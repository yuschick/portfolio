import React, {Component} from 'react';

class BlogPreview extends Component {
    render() {
        return (
            <article className="blog-container">
                <header>
                    <h2>
                        <a href={this.props.b.url} target="_blank">{this.props.b.title}</a>
                    </h2>
                </header>
                <time dateTime={this.props.b.date}>{this.props.b.date}</time>
                <p className="has-spacer">{this.props.b.preview}</p>
            </article>
        )
    }
}

export default BlogPreview;
