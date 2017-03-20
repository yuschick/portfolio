import React, {Component} from 'react';

class AdminBlogsEdit extends Component {
    render() {
        const blog = this.props.editBlog;
        return (
            <form>
                <input type="text" value={blog.title}/>
                <input type="date" value={blog.date}/>
                <input type="text" value={blog.url}/>
                <textarea>{blog.preview}</textarea>
            </form>
        )
    }
}

export default AdminBlogsEdit;
