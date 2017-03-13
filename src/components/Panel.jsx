import React, {Component} from 'react';

class Panel extends Component {
  render() {
    return (
      <section className={`panel ${this.props.classNames}`}>
        {this.props.children}
      </section>
    )
  }
}

export default Panel;
