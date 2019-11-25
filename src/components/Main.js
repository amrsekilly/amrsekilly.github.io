import React from "react";
import Link from "gatsby-link";

import profile from "../images/profile.jpg";

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">About Me</h2>

          <span className="image main">
            <img src={profile} alt="" />
          </span>

          <p>
            Hello!
            <br />
            <br />
            Experienced and Passionate Professional Senior Frontend Developer
            with extensive experience in React, Redux, and AngularJS.
            <br />
            <br /> Extensive Experience as a React.js Senior Developer
            methodically identifying and resolving complex underlying causes of
            React.js problems, using a variety of debugging techniques and
            tools. I have architected apps for multiple mid and small size
            businesses since 2015, as well as covering everything I write with
            unit tests.
            <br />
            <br /> Expert Level ability with architecting Javascript
            applications from the ground up. And refactoring existing legacy
            code to transform it into a modern-looking maintainable code. I
            pride myself on my ability to intuitively gather, interpret and
            understand your requirements, as well as develop intuitive and
            creative Frontend Solutions using my extensive experience in the
            field.
            <br />
            <br /> I am eager to work with you, to provide reliable, consistent,
            and High-Level solutions to your development challenges. Please
            contact me, so we can discuss how we can work together to fully meet
            your business needs!
            <br />
            <br />
            Follow me on{" "}
            <a href="https://www.instagram.com/amrsekilly/" target="_blank">
              IG
            </a>{" "}
            to know more about my journey! ❤️🎉
          </p>

          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === "work" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">My Work</h2>

          <p>
            I'm still writing this section, and I'll publish it soon.{" "}
            <i className="fas fa-clock"></i>
          </p>

          <p>
            If you want to check my latest work, you can view my{" "}
            <a href="https://www.upwork.com/freelancers/~014d7603bde62ae128">
              Upwork
            </a>{" "}
            portfolio.
          </p>

          {close}
        </article>

        <article
          id="experience"
          className={`${this.props.article === "experience" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">
            <span className="fa fa-briefcase"></span> Experience
          </h2>

          <p>
            <i className="fas fa-download" style={{ marginRight: 10 }}></i>
            <a href="https://github.com/amrsekilly/my-resume/raw/master/amr-elsekilly-resume.pdf">
              Download my Résumé
            </a>
            .
          </p>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">
            <span className="fa fa-envelope"></span> Contact Me
          </h2>
          <form method="post" action="https://formspree.io/amr.e.dev@gmail.com">
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
              ></textarea>
              <input type="hidden" name="_next" value="/" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="tel:+201153993369" className="icon fa-phone">
                <span className="label">Phone</span>
              </a>
            </li>
            <li>
              <a href="mailto:amr@amrsekilly.com" className="icon fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/amrsekilly"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/amrsekilly"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://eg.linkedin.com/in/amrsekilly"
                className="icon fa-linkedin-in"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/amrsekilly"
                className="icon fa-instagram"
              >
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
    );
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
};

export default Main;
