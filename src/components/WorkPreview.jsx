import React, {Component} from 'react';
import {Link} from 'react-router';
import {titleToUrl} from '../helpers';

class WorkPreview extends Component {
    render() {
        const id = titleToUrl(this.props.p.title);
        return (
            <section className="project-preview">
                <span>{this.props.p.textOne}</span>
                <span>{this.props.p.textTwo}</span>
                <Link to={`/work/${this.props.p.id}`}>
                    <img src={`http://danyuschick.com/assets/images/projects/${this.props.p.image}`} alt={this.props.p.title}/>
                </Link>
            </section>
        )
    }
}

export default WorkPreview;
