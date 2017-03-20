import React, {Component} from 'react';

class AdminBlogs extends Component {
    render() {
        return (
            <div>
                <h2>Edit | Add</h2>
                {this.props.children}
            </div>
        )
    }
}

export default AdminBlogs;
