import React, {Component} from 'react';
import BlogPreview from './BlogPreview';
import Loader from './Loader';
import {sort} from '../helpers';

class Blog extends Component {
    render() {
        if (this.props.blogs.length === 0) {
            return (
                <Loader></Loader>
            );
        }
        const blogs = sort(this.props.blogs, 'date', 'desc');
        return (
            <section className="blogs-container">
                {blogs.map((blog) => <BlogPreview key={blog.id} b={blog}></BlogPreview>)}
            </section>
        )
    }
}

export default Blog;
