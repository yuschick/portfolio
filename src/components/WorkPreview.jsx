import React, {Component} from 'react';
import {Link} from 'react-router';
import Loader from './Loader';
import '../styles/project-preview.css';

class WorkPreview extends Component {
    constructor() {
        super();
        this.imageLoaded = this.imageLoaded.bind(this);
        this.state = {
            isLoading: true
        }
    }

    showLoader() {
        if (this.state.isLoading) {
            return <Loader/>
        }
    }
    imageLoaded() {
        this.setState({isLoading: false});
    }
    render() {
        return (
            <section className="project-preview">
                <span>{this.props.p.textOne}</span>
                <span>{this.props.p.textTwo}</span>
                {this.showLoader()}
                <Link to={`/work/${this.props.p.id}`}>
                    <img src={`http://danyuschick.com/assets/images/projects/${this.props.p.image}`} alt={this.props.p.title} onLoad={this.imageLoaded}/>
                </Link>
            </section>
        )
    }
}

export default WorkPreview;
