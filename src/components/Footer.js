import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright"><span className="brand-name">&copy; Amr Elsekilly</span> - Coding with ❤️ at <a href="https://www.instagram.com/Rubikal/" target="_blank">Rubikal</a>.</p>
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
