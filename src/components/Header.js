import React from 'react'


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="fas fa-laptop-code"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Amr Elsekilly</h1>
                <p>Sr. Frontend Engineer at <a href="https://www.rubikal.com/" target="_blank">Rubikal</a></p>
                <div className="technologies">
                    <span 
                        className="fab fa-node-js"
                        title="Node.js"
                    ></span>
                    <span 
                        className="fab fa-react"
                        title="React.js"
                    ></span>
                    <span 
                        className="fab fa-angular"
                        title="Angular.js"
                    ></span>
                    <span
                        className="fab fa-phoenix-framework"
                        title="Phoenix/Elixir"
                    ></span>
                    <span
                        className="fas fa-database"
                        title="PostgreSQL, MongoDB, MySQL, Firebase"
                    ></span>
                    <span 
                        className="fab fa-git-square"
                        title="Git VCS"
                    ></span>
                </div>

                <div>
                    <a href='https://github.com/amrsekilly' className="button hvr-ripple-out" target="_blank">
                    <span
                        className="fab fa-github"
                    ></span>
                        Github
                    </a>
                </div>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('experience')}}>Experience</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
