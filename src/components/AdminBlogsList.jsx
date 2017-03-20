import React, {Component} from 'react';
import {Link} from 'react-router';
import base from '../base';
import {sort} from '../helpers';

class AdminBlogsList extends Component {
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
        const blogs = sort(this.state.blogs, 'date', 'desc');
        return (
            <ul>
                {blogs.map((blog, index) => <Link to={`/admin/blogs/${index}`} key={blog.title}>
                    <li>{blog.title}</li>
                </Link>)}
            </ul>
        )
    }
}

export default AdminBlogsList;
