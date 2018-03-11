import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Amr Elsekilly - Coding with ❤️ in <a href="https://en.wikipedia.org/wiki/Alexandria">Alexandria</a>.</p>
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
