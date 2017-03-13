import React, {Component} from 'react';
import BlogPreview from './BlogPreview';

class Blog extends Component {
  render() {
    return (
      <section className="blogs-container">
        <BlogPreview></BlogPreview>
      </section>
    )
  }
}

export default Blog;
