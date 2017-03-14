import React, {Component} from 'react';
import Loader from './Loader';
import {lookup} from '../helpers';

class ProjectFull extends Component {
    render() {
        if (this.props.projects.length === 0) {
            return (
                <Loader></Loader>
            );
        }
        const id = this.props.params.id;
        const projects = this.props.projects;
        const project = lookup(projects, 'id', id);
        return (
            <section className="project-container">
                <iframe allowFullScreen="true" allowTransparency="true" frameBorder="no" title={project.title} scrolling="yes" src={project.links.preview}></iframe>
                <h2>{project.title}</h2>
                <p className="has-spacer">{project.description}</p>
                <h3>Technologies</h3>
                <p>{project.tech.join(', ')}</p>
                <h3>Visit</h3>
                <p>Live | CodePen | GitHub</p>
            </section>
        )
    }
}

export default ProjectFull;
