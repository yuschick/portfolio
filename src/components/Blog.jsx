import React, {Component} from 'react';
import BlogPreview from './BlogPreview';
import base from '../base';
import Loader from './Loader';
import {sort} from '../helpers';
import '../styles/blogs.css';

class Blog extends Component {
    constructor() {
        super();
        this.state = {
            blogs: []
        };
    }
    componentWillMount() {
        this.ref = base.syncState(`/blogs`, {
            context: this,
            state: 'blogs'
        });
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }
    render() {
        if (this.state.blogs.length === 0) {
            return (
                <Loader></Loader>
            );
        }
        const blogs = sort(this.state.blogs, 'date', 'desc');
        return (
            <section className="blogs-container">
                {blogs.map((blog) => <BlogPreview key={blog.id} b={blog}></BlogPreview>)}
            </section>
        )
    }
}

export default Blog;
