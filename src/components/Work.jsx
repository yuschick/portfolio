import React, {Component} from 'react';
import WorkPreview from './WorkPreview';
import Loader from './Loader';
import {sort} from '../helpers.js';

class Work extends Component {
    render() {
        if (this.props.projects.length === 0) {
            return (
                <Loader></Loader>
            );
        }
        const projects = sort(this.props.projects, 'title');
        return (
            <section className="project-previews-container">
                {projects.map((project) => <WorkPreview key={project.id} p={project}></WorkPreview>)}
            </section>
        )
    }
}

export default Work;
