import React, {Component} from 'react';

class ProjectFull extends Component {
  render() {
    return (
      <section className="project-container">
        <iframe allowFullScreen="true" allowTransparency="true" frameBorder="no" title="31 Nights of Horror - 2016" height="600" scrolling="yes" src="http://danyuschick.com/31-nights-of-horror"></iframe>
        <h2>31 Nights of Horror - 2016</h2>
        <p className="has-spacer">Need recommendations for movies this October? Here is a calendar showcasing many movies that may have flown under the radar. The calendar includes movie trailers, links to IMDB and where to watch the movie online; most for free! Enjoy many of the month-long themes like Throwback Thursday, Supernatural Saturday, Masked Monday, and others!</p>
        <h3>Technologies</h3>
        <p>Html, Ember, Firebase, JavaScript, jQuery, SCSS</p>
        <h3>Visit</h3>
        <p>Live | CodePen | GitHub</p>
      </section>
    )
  }
}

export default ProjectFull;
