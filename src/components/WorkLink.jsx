import React, {Component} from 'react';
import {capitalize} from '../helpers';

class WorkLink extends Component {
    render() {
        return (
            <a className="project-link" href={this.props.url} target="_blank">{capitalize(this.props.label)}</a>
        )
    }
}

export default WorkLink;
