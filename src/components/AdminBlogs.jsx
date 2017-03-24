import React, {Component} from 'react';
import {Link} from 'react-router';
import {sort, lookup, replaceChar, getIndex} from '../helpers';
import base from '../base';

class AdminBlogs extends Component {
    constructor() {
        super();
        this.handleBlogForm = this.handleBlogForm.bind(this);
        this.blogForm = this.blogForm.bind(this);
        this.deleteBlog = this.deleteBlog.bind(this);
        this.showDeleteButton = this.showDeleteButton.bind(this);
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
    toggleNav() {
        return (
            <h2 className="admin-sub-nav">
                <Link to="/admin/blogs/" activeClassName="active">Edit</Link>
                <Link to="/admin/blogs/new" activeClassName="active">Add</Link>
            </h2>
        )
    }
    handleBlogForm(event) {
        event.preventDefault()
        const blogToPost = {
            id: this.idField.value
                ? Number(this.idField.value)
                : Number(this.state.blogs.length),
            title: this.titleField.value,
            date: this.dateField.value,
            preview: this.previewField.value,
            url: this.urlField.value
        };
        const blogs = this.state.blogs;
        if (this.idField.value) {
            blogs[getIndex(blogs, 'id', Number(this.idField.value))] = blogToPost;
        } else {
            blogs[Date.now()] = blogToPost;
        }
        this.props.router.push('/admin/blogs');
        this.setState({blogs});
    }
    deleteBlog(id) {
        const blogs = this.state.blogs;
        const indexToDelete = getIndex(blogs, 'id', Number(this.idField.value));
        blogs.splice(indexToDelete, 1);
        this.setState({blogs});
        this.props.router.push('/admin/blogs')

    }
    showDeleteButton() {
        if (this.props.params.id && (Number(this.props.params.id) || Number(this.props.params.id) === 0)) {
            return (<input type="submit" className="btn-negative" onClick={this.deleteBlog.bind(this)} value="Delete Blog"/>)
        }
    }
    blogForm(blogObj) {
        const blog = blogObj || {
            title: '',
            date: '',
            preview: '',
            url: ''
        };
        return (
            <div>
                <form ref={(form) => this.form = form} onSubmit={this.handleBlogForm.bind(this)}>
                    <label htmlFor="blog-title">Blog Title</label>
                    <input ref={(title) => this.titleField = title} type="text" id="blog-title" defaultValue={blog.title}/>
                    <label htmlFor="blog-date">Blog Date</label>
                    <input ref={(date) => this.dateField = date} type="date" id="blog-date" defaultValue={replaceChar(blog.date, '/', '-')}/>
                    <label htmlFor="blog-preview">Blog Preview</label>
                    <textarea ref={(preview) => this.previewField = preview} id="blog-preview" defaultValue={blog.preview}></textarea>
                    <label htmlFor="blog-url">Blog URL</label>
                    <input ref={(url) => this.urlField = url} type="text" id="blog-url" defaultValue={blog.url}/>
                    <input type="hidden" ref={(id) => this.idField = id} defaultValue={blog.id}/>
                    <input type="submit" className="btn-primary" onClick={this.handleBlogForm.bind(this)} value={blog.title
                        ? `Update Blog`
                        : `Add Blog`}/>
                    <div className="has-spacer"></div>
                    {this.showDeleteButton()}
                </form>
            </div>
        )
    }
    render() {
        const blogs = sort(this.state.blogs, 'date', 'desc');

        if (this.props.params.id && (Number(this.props.params.id) || Number(this.props.params.id) === 0)) {
            return (
                <div>
                    {this.toggleNav()}
                    {this.blogForm(lookup(blogs, 'id', Number(this.props.params.id)))}
                </div>
            )
        } else if (this.props.params.id && this.props.params.id === 'new') {
            return (
                <div>
                    {this.toggleNav()}
                    {this.blogForm()}
                </div>
            )
        }

        return (
            <div>
                {this.toggleNav()}
                <ul>
                    {blogs.map((blog) => <Link to={`/admin/blogs/${blog.id}`} key={blog.title}>
                        <li>{blog.title}</li>
                    </Link>)}
                </ul>
            </div>
        )
    }
}

export default AdminBlogs;
