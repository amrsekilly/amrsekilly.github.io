import React from 'react'
import Link from 'gatsby-link'

import profile from '../images/profile.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major"><span className="fa fa-user-secret"></span> About Me</h2>
          
          <span className="image main"><img src={profile} alt="" /></span>
          
          <p>
            Hello,<br />
            <br />
            I'm a software engineer living in the EET-Zone. I'm proficient with most of the Javascript frameworks and tools.<br />
            <br />
            I can help your business by developing a responsive website/web app, or a phone app that works on both iOS and Android.<br />
            <br />

            I started programming in 2011, and I got into web development in late 2015, since then, I've been programming almost everyday. I've studied web development on Coursera (you can find the verified certificates in my resume), Udemy, and <a href="https://www.freecodecamp.org/amrsekilly">FreeCodeCamp</a>.<br />
            <br />

            Currently, I'm only accepting work by referrals. But in the past I've worked on <a href="https://www.upwork.com/freelancers/~014d7603bde62ae128">Upwork</a> and <a href="https://www.freelancer.com/u/amrsekilly">Freelancer.com</a>. If you want to work with me, send me a message in the contact section.

          </p>

          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">My Work</h2>

          <p>I'm still writing this section, and I'll publish it soon. <i className="fas fa-clock"></i></p>

          <p>
            If you want to check my latest work, you can view my <a href="https://www.upwork.com/freelancers/~014d7603bde62ae128">Upwork</a> portfolio.
          </p>

          {close}
        </article>

        <article id="experience" className={`${this.props.article === 'experience' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major"><span className="fa fa-briefcase"></span> Experience</h2>
        
          
          <p><i className="fas fa-download"></i> Download my updated <a href="https://github.com/amrsekilly/my-resume/raw/master/amr-elsekilly-resume.pdf"> Résumé</a>.</p>

          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major"><span className="fa fa-envelope"></span> Contact Me</h2>
            <form 
              method="post" 
              action="https://formspree.io/amr.e.dev@gmail.com"
            >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input 
                type="text"
                name="name" 
                id="name" 
                placeholder="YOUR NAME"
                required
              />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="_replyto"
                id="email" 
                placeholder="YOUR EMAIL"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                 name="message" 
                 id="message" 
                 rows="4"
                 placeholder="YOUR MESSAGE"
                 required
              >
              </textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="mailto:amr@amrsekilly.com" className="icon fa-envelope">
              <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/amrsekilly" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/amrsekilly" className="icon fa-github">
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a href="https://eg.linkedin.com/in/amrsekilly" className="icon fa-linkedin-in">
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/amrsekilly" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://keybase.io/amrsekilly" className="icon fa-key">
                <span className="label">Keybase</span>
              </a>
            </li>
            
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main