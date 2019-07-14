import React from "react"

import { Repository, Language } from "../../generated/githubTypes";
import { pickTextColor } from '../helpers/colorHelper'

import "./repoCard.scss"

interface RepoCardProps {
    repo: Repository
    toggleLanguage: (language: Language) => void
    size?: 'sm' | 'md'
    currentLanguages?: Language[]
}

const getCardClass = (language: Language, currentLanguages: Language[]) => {
    const baseClass = 'repo-card__language'
    const isCurrentLanguage = currentLanguages.find(currentLanguage => currentLanguage.name === language.name)
    return `${baseClass} ${isCurrentLanguage ? `${baseClass}--active` :  ''}`
}

const RepoCard: React.SFC<RepoCardProps> = ({ repo, toggleLanguage, size, currentLanguages }) => (
    <section className={`repo-card ${size === 'sm' ? 'repo-card--small' : ''}`}>
        <div className="repo-card__language-wrapper">
            {repo.languages.edges.map(language => {
                return (
                    <span 
                        className={getCardClass(language.node, currentLanguages)}
                        style={{ 
                            backgroundColor: language.node.color,
                            color: pickTextColor(language.node.color)
                        }}
                        onClick={() => toggleLanguage(language.node)}
                        key={language.node.name}
                    >
                        <span className="repo-card__language-text">{language.node.name}</span>
                    </span>
                )}
            )} 
        </div>
        <h2 className="repo-card__header">
            {(repo.owner.login !== 'jackkoppa' 
            ? `@${repo.owner.login}/` 
            : ''
            ) + repo.name}
        </h2>
        <h4 className="repo-card__description">{repo.description}</h4>
        <a href={repo.url} className="repo-card__link">
            <span className="repo-card__link-text">GitHub</span>
            <i className="fab fa-github"></i>
        </a> 
        {repo.homepageUrl
            ? <a href={repo.homepageUrl} className="repo-card__link">
                <span className="repo-card__link-text">View Project</span>
                <i className="far fa-external-link"></i>
            </a>
            : null
        }
    </section>
)

export default RepoCard
