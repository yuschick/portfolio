import React, {Component} from 'react';
import {Link} from 'react-router';
import {sort, lookup, getIndex} from '../helpers';
import base from '../base';

class AdminProjects extends Component {
    constructor() {
        super();
        this.handleProjectForm = this.handleProjectForm.bind(this);
        this.projectForm = this.projectForm.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
        this.showDeleteButton = this.showDeleteButton.bind(this);
        this.state = {
            projects: []
        };
    }
    componentWillMount() {
        this.ref = base.syncState(`/projects`, {
            context: this,
            state: 'projects'
        });
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }
    toggleNav() {
        return (
            <h2 className="admin-sub-nav">
                <Link to="/admin/projects/" activeClassName="active">Edit</Link>
                <Link to="/admin/projects/new" activeClassName="active">Add</Link>
            </h2>
        )
    }
    handleProjectForm(event) {
        event.preventDefault()
        const projectToPost = {
            id: this.idField.value,
            title: this.titleField.value,
            date: this.dateField.value,
            preview: this.previewField.value,
            url: this.urlField.value
        };
        const projects = this.state.projects;
        if (this.idField.value) {
            projects[getIndex(projects, 'id', this.idField.value)] = projectToPost;
        } else {
            projects[Date.now()] = projectToPost;
        }
        this.props.router.push('/admin/projects')
        this.setState({projects});
    }
    deleteProject(id) {
        const projects = this.state.projects;
        const indexToDelete = getIndex(projects, 'id', this.idField.value);
        projects.splice(indexToDelete, 1);
        this.setState({projects});
        this.props.router.push('/admin/projects')

    }
    showDeleteButton() {
        if (this.props.params.id && this.props.params.id !== 'new') {
            return (<input type="submit" className="btn-negative" onClick={this.deleteProject.bind(this)} value="Delete Project"/>)
        }
    }
    projectForm(projectObj) {
        const project = projectObj || {
            "id": '',
            "title": '',
            "textOne": '',
            "textTwo": '',
            "tech": [],
            "description": '',
            "links": {
                "live": '',
                "github": '',
                "codepen": '',
                "preview": ''
            },
            "image": '',
            "featured": ''
        };
        return (
            <div>
                <form ref={(form) => this.form = form} onSubmit={this.handleProjectForm.bind(this)}>
                    <label htmlFor="project-title">Project Title</label>
                    <input ref={(field) => this.titleField = field} type="text" id="project-title" defaultValue={project.title}/>
                    <label htmlFor="project-text-one">Project Text One</label>
                    <input ref={(field) => this.textOneField = field} type="text" id="project-text-one" defaultValue={project.textOne}/>
                    <label htmlFor="project-text-two">Project Text Two</label>
                    <input ref={(field) => this.textTwoField = field} type="text" id="project-text-two" defaultValue={project.textTwo}/>
                    <label htmlFor="project-tech">Project Tech</label>
                    <input ref={(field) => this.techField = field} type="text" id="project-tech" defaultValue={project.tech}/>
                    <label htmlFor="project-description">Project Description</label>
                    <input ref={(field) => this.descriptionField = field} type="text" id="project-description" defaultValue={project.description}/>
                    <label htmlFor="project-live-link">Project Live Link</label>
                    <input ref={(field) => this.liveLinkField = field} type="text" id="project-live-link" defaultValue={project.links.live}/>
                    <label htmlFor="project-github-link">Project Github Link</label>
                    <input ref={(field) => this.githubLinkField = field} type="text" id="project-github-link" defaultValue={project.links.github}/>
                    <label htmlFor="project-codepen-link">Project Codepen Link</label>
                    <input ref={(field) => this.codepenLinkField = field} type="text" id="project-codepen-link" defaultValue={project.links.codepen}/>
                    <label htmlFor="project-preview-link">Project Preview Link</label>
                    <input ref={(field) => this.previewLinkField = field} type="text" id="project-preview-link" defaultValue={project.links.preview}/>
                    <label htmlFor="project-featured">Is Featured?</label>
                    <input ref={(field) => this.featuredLinkField = field} type="checkbox" id="project-featured" checked={project.featured}/>
                    <input type="hidden" defaultValue={project.id}/>
                    <div className="has-spacer"></div>
                    {this.showDeleteButton()}
                </form>
            </div>
        )
    }
    render() {
        const projects = sort(this.state.projects, 'title');

        if (this.props.params.id) {
            return (
                <div>
                    {this.toggleNav()}
                    {this.projectForm(lookup(projects, 'id', Number(this.props.params.id)))}
                </div>
            )
        } else if (this.props.params.id && this.props.params.id === 'new') {
            return (
                <div>
                    {this.toggleNav()}
                    {this.projectForm()}
                </div>
            )
        }

        return (
            <div>
                {this.toggleNav()}
                <ul>
                    {projects.map((project) => <Link to={`/admin/projects/${project.id}`} key={project.id}>
                        <li>{project.title}</li>
                    </Link>)}
                </ul>
            </div>
        )
    }
}

export default AdminProjects;
