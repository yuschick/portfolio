import React, {Component} from 'react';
import base from '../base';

class AdminAbout extends Component {
    constructor() {
        super();
        this.processForm = this.processForm.bind(this);
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

    renderTextAreas(content) {
        content.map(section => {
            return (
                <p>section</p>
            )
        })
    }

    processForm(event) {
        event.preventDefault();

        let aboutSections = this.state.about;

        aboutSections[0].content[0] = this.Overview_0.value;
        aboutSections[0].content[1] = this.Overview_1.value;
        aboutSections[1].content[0] = this.Experience_0.value;
        aboutSections[1].content[1] = this.Experience_1.value;
        aboutSections[1].content[2] = this.Experience_2.value;
        aboutSections[1].content[3] = this.Experience_3.value;
        aboutSections[1].content[4] = this.Experience_4.value;
        aboutSections[2].content[0] = this.Goals_0.value;
        aboutSections[2].content[1] = this.Goals_1.value;

        this.setState({about: aboutSections});
        this.props.router.push('/admin/');
    }

    render() {
        const content = this.state.about;

        return (
            <div>
                <form onSubmit={this.processForm}>
                    {content.map((section) => {
                        return (
                            <div key={section.heading} className="has-spacer">
                                <h2>{section.heading}</h2>
                                {section.content.map((area, index) => {
                                    return (
                                        <textarea ref={(area) => this[`${section.heading}_${index}`] = area} key={`${section.heading}-${index}`} defaultValue={area}></textarea>
                                    )
                                })}
                            </div>
                        )
                    })}
                    <input type="submit" className='btn-primary' value="Update Sections"/>
                </form>
            </div>
        )
    }
}

export default AdminAbout;
