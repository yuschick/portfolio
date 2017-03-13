import React, {Component} from 'react';

class BlogPreview extends Component {
  render() {
    return (
      <article className="blog-container">
        <header>
          <h2>The Iron Yard - Graduation Day</h2>
          </header>
        <time dateTime="2016-12-14 20:00">December 14, 2016</time>
        <p className="has-spacer">I don't know if this has been the longest or quickest three months of my life. But I do know it's been the most rewarding. Everything culminated to graduation day which occurred this past Friday and boy was it filled with the feels.</p>
      </article>
    )
  }
}

export default BlogPreview;
