import React, {Component} from 'react';
import {Link} from 'react-router';

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/about" className="nav-link" activeClassName="active">About</Link>
                    </li>
                    <li>
                        <Link to="/work" className="nav-link" activeClassName="active">Work</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="nav-link" activeClassName="active">Blog</Link>
                    </li>
                    <li>
                        <a href="http://www.twitter.com/yuschick" className="nav-link" target="_blank">Twitter</a>
                    </li>
                    <li>
                        <a href="https://github.com/yuschick" className="nav-link" target="_blank">GitHub</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;
