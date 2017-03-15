import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import Panel from './Panel';
import Nav from './Nav';
import base from '../base';
import '../styles/app.css';
import '../styles/logo.css';

class App extends Component {
    constructor() {
        super();
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

    render() {
        const childWithProp = React.Children.map(this.props.children, (child) => {
            let path = child.props.location.pathname.replace('/', '');

            if (path.lastIndexOf('work', 0) === 0) {
                return React.cloneElement(child, {projects: this.state.projects})
            } else {
                return child;
            }
        });
        return (
            <div className="container">
                <Panel classNames='has-gears'>
                    <section className="name-container">
                        <IndexLink to="/">
                            <svg className="logo" version="1.1" viewBox="0 0 87 87" x="0" xmlns="http://www.w3.org/2000/svg">
                                <title>Dan Yuschick - Logo</title>
                                <description>Dan Yuschick - Front-End Engineering Instructor | Raleigh, North Carolina</description>
                                <circle cx="43.5" cy="43.5" fill="#FFFFFF" r="40"></circle>
                                <g transform="matrix(2.8498229,0,0,2.8498229,-1.5389044,-1.6300463)">
                                    <path d="M15.9 29.6c-0.5 0-0.8 0.2-1.3 0 -1.7-0.2-3.6-0.6-5.2-1.6 -2.1-1.1-4-2.7-5.2-4.6 -1.3-2.1-2.1-4.3-2.4-6.7 0-0.6 0-1.3 0-1.9 0.2-1.7 0.6-3.6 1.4-5.2 1-2.1 2.4-3.6 4-4.9 2.1-1.6 4.6-2.7 7.3-2.9 0.5 0 0.8-0.2 1.3 0 0.3 0 0.5 0 0.8 0 -1 2.7-1.9 5.6-3 8.2 -1.1 0-2.2 0-3.2 0 -0.8 0-1.4 0.3-1.6 1.1C7.8 13.8 6.8 16.3 6.1 19c-0.2 0.3-0.2 0.8-0.2 1.3 0.2 0.5 0.6 1 1.1 1 0.5 0.2 1 0.2 1.4 0.2 1.4 0 2.7 0 4.1 0 0 0 0-0.2 0.2-0.2 2.2-6.3 4.4-12.5 6.7-18.9 2.4 0.6 4.4 1.7 6.2 3.5 2.1 1.9 3.5 4.6 4 7.5 0.2 0.8 0.2 1.7 0.3 2.5 0 1.7-0.3 3.6-1 5.2 -1.6 4.1-5.4 7.5-9.8 8.4 2.2-6.2 4.4-12.5 6.7-18.9 -0.2 0-0.3 0-0.5 0 -0.8 0-1.6 0-2.5 0 -0.2 0-0.2 0.2-0.2 0.2 -1 2.9-2.1 5.6-3 8.4 0 0.2-0.2 0.3-0.2 0.5 -0.5 0-1.1 0-1.6 0 1.1-3 2.2-6 3.3-9 -0.2 0-0.3 0-0.3 0 -1-0.2-1.7-0.2-2.7-0.2 -1 2.7-1.9 5.6-3 8.2 -0.2 0.6-0.2 1.3 0.2 1.7 0.3 0.5 0.8 0.6 1.4 0.6 0.8 0 1.4 0 2.2 0C17.8 23.9 16.8 26.8 15.9 29.6zM10.2 19.5c-0.2 0.2-0.3 0-0.3 0 -0.5 0-0.8 0-1.3 0 1-2.7 1.9-5.2 2.9-7.9 0.5 0 1.1 0 1.6 0C12.1 14.2 11.1 16.9 10.2 19.5L10.2 19.5z"></path>
                                </g>
                            </svg>
                        </IndexLink>
                        <h1>
                            <IndexLink to="/">Dan Yuschick</IndexLink>
                        </h1>
                    </section>
                    <Nav></Nav>
                </Panel>
                <Panel>
                    <section className="content-container">
                        {childWithProp}
                    </section>
                </Panel>
            </div>
        );
    }
}

export default App;
