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

interface DisplayLanguage extends Language {
    active: boolean
}

export class RepoList extends React.Component<RepoListProps, RepoListState> {
    constructor(props: RepoListProps) {
        super(props);
        this.state = { currentLanguages: [] }
    }

    public render = () => (
        <div className="repo-list">
            {this.getLanguageFilters().map(language => (
                <span 
                    className={
                        `repo-list__language-filter ${language.active 
                            ? 'repo-list__language-filter--active'
                            : ''
                        }`
                    }
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
                <RepoCard 
                    repo={repo} 
                    toggleLanguage={this.handleLanguageToggled} 
                    currentLanguages={this.state.currentLanguages}
                    key={repo.id}
                />
            )}
            <h3 className="repo-list__header">Other Projects</h3>
            {this.getOtherRepositories().map(repo =>
                <RepoCard 
                    repo={repo} 
                    toggleLanguage={this.handleLanguageToggled} 
                    size="sm" 
                    currentLanguages={this.state.currentLanguages}
                    key={repo.id}
                />
            )}
        </div>
    )

    private getLanguageFilters(): DisplayLanguage[] {
        const allLanguages: Language[] = []
        this.props.pinnedRepositories.concat(this.props.allRepositories ).forEach(repo => {
            const languages = repo.node && repo.node.languages && repo.node.languages.edges || []
            languages.forEach(language => {
                if (!allLanguages.find(existingLanguage => existingLanguage.name === language.node.name)) {
                    allLanguages.push(language.node)
                }
            })
        })
        return allLanguages.map(existingLanguage => {
            const active = Boolean(this.state.currentLanguages.find(currentLanguage => currentLanguage.name === existingLanguage.name))
            return { ...existingLanguage, active }
        }).sort((a, b) => {
            if (a.active) return -1
            if (b.active) return 1
            if (a.name > b.name) return 1
            if (b.name > a.name) return -1
            return 0
        })
    }

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
        const languageExists = this.state.currentLanguages.find(currentLanguage => currentLanguage.name === language.name)
        if (languageExists) {
            this.setState({ currentLanguages: this.state.currentLanguages.filter(currentLanguage => currentLanguage.name != language.name) })
        } else {
            this.setState({ currentLanguages: [...this.state.currentLanguages, language] })
        }
    }
}
