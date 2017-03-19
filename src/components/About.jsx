import React, {Component} from 'react';
import headshot from '../images/about-headshot.jpg';
import resume from '../files/danyuschick-resume.pdf';
import base from '../base';
import Loader from './Loader';

class About extends Component {
    constructor() {
        super();
        this.state = {
            about: []
        };
    }

    componentWillMount() {
        this.ref = base.syncState(`/about`, {
            context: this,
            state: 'about'
        });
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    render() {
        if (this.state.about.length === 0) {
            return (
                <Loader></Loader>
            );
        }
        return (
            <div>
                <div className="headshot-container">
                    <img src={headshot} alt="Dan Yuschick"/>
                    <a className="download-link" href={resume} target="_blank"><img src="https://freeiconshop.com/wp-content/uploads/edd/pdf-flat.png" alt="Download Resume"/></a>
                </div>
                {this.state.about.map((section) => {
                    return (
                        <article key={section.heading} className="about-section">
                            <header className="is-block-header">
                                <h2>{section.heading}</h2>
                            </header>
                            {section.content.map((data, index) => <p key={`data-${index}-${section.heading}`}>{data}</p>)}
                        </article>
                    )
                })}

            </div>
        )
    }
}

export default About;
