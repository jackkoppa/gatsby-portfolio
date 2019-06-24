import React from 'react';

import { Repository, RepositoryEdge, Language } from '../../generated/githubTypes';
import { pickTextColor } from '../helpers/colorHelper'

import RepoCard from './repoCard'
import './repoList.scss'

interface RepoListProps {
    pinnedRepositories: RepositoryEdge[]
    allRepositories: RepositoryEdge[]
}

interface RepoListState {
    currentLanguages: Language[]
}

export class RepoList extends React.Component<RepoListProps, RepoListState> {
    constructor(props: RepoListProps) {
        super(props);
        this.state = { currentLanguages: [] }
    }

    public render = () => (
        <div className="repo-list">
            {this.state.currentLanguages.map(language => (
                <span 
                    className="repo-list__language-filter" 
                    style={{ 
                        backgroundColor: language.color,
                        color: pickTextColor(language.color)
                    }}
                    onClick={() => this.handleLanguageToggled(language)}
                    key={language.name}
                >
                    <span className="repo-list__language-filter-text">{language.name}</span>
                    <i className="fal fa-times"></i>
                </span>
            ))}
            <h3 className="repo-list__header">Pinned Projects</h3>
            {this.getPinnedRepositories().map(repo =>
                <RepoCard repo={repo} toggleLanguage={this.handleLanguageToggled} key={repo.id} />
            )}
            <h3 className="repo-list__header">Other Projects</h3>
            {this.getOtherRepositories().map(repo =>
                <RepoCard repo={repo} toggleLanguage={this.handleLanguageToggled} size="sm" key={repo.id} />
            )}
        </div>
    )

    private getPinnedRepositories(): Repository[] {
        return this.filterReposByLanguage(this.props.pinnedRepositories)
    }

    private getOtherRepositories(): Repository[] {
        return this.filterReposByLanguage(this.props.allRepositories)
            .filter(repo => 
                this.getPinnedRepositories().every(pinnedRepo => pinnedRepo.id !== repo.id)
            )
    }
    
    private filterReposByLanguage(repositories: RepositoryEdge[]): Repository[] {
        return (this.state.currentLanguages.length > 0 
            ? repositories
                .filter(repo => (
                    repo.node.languages.edges.some(language => 
                        this.state.currentLanguages.some(currentLanguage => currentLanguage.name === language.node.name)
                    )
                ))
            : repositories
            )   
            .map(repo => repo.node)
    }

    private handleLanguageToggled = (language: Language) => {
        const languageIndex = this.state.currentLanguages.indexOf(language)
        if (languageIndex !== -1) {
            this.setState({ currentLanguages: this.state.currentLanguages.filter(currentLanguage => currentLanguage != language) })
        } else {
            this.setState({ currentLanguages: [...this.state.currentLanguages, language] })
        }
    }
}
