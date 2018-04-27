import React from 'react'


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="fab fa-free-code-camp"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Amr Elsekilly</h1>
                <p>I will help you create the next App for your business.</p>
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
                        className="fab fa-python"
                        title="Python"
                    ></span>
                    <span
                        className="fas fa-database"
                        title="MongoDB, MySQL, Firebase"
                    ></span>
                    <span 
                        className="fab fa-git-square"
                        title="Git VCS"
                    ></span>
                </div>

                <div>
                    <a href='https://www.upwork.com/signup/create-account/client_contact_freelancer?ciphertext=~014d7603bde62ae128&BYOC' className="button" target="_blank">
                        Hire Me
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
