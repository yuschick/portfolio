import React, {Component} from 'react';

class Icon extends Component {
    render() {
        return (
            <div className="icon">
                <img src={this.props.image} alt={this.props.alt}/>
                <span>{this.props.title}</span>
            </div>
        )
    }
}

export default Icon;
