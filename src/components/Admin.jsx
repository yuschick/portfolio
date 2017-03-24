import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router';
import base from '../base';
import '../styles/admin.css';

class Admin extends Component {
    constructor() {
        super();
        this.renderLogin = this.renderLogin.bind(this);
        this.authenticate = this.authenticate.bind(this);
        this.authHandler = this.authHandler.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            uid: null,
            owner: null
        }
    }
    componentDidMount() {
        base.onAuth((user) => {
            if (user) {
                this.authHandler(null, {user})
            }
        })
    }
    authenticate() {
        base.authWithOAuthPopup('github', this.authHandler);
    }
    logout() {
        base.unauth();
        this.setState({uid: null, owner: null});
    }
    authHandler(error, data) {
        if (error) {
            console.error(error);
            return;
        }

        const siteRef = base.database().ref('admin');

        siteRef.once('value', (snapshot) => {
            const siteData = snapshot.val();
            this.setState({uid: data.user.uid, owner: siteData.owner});
        });

    }
    renderLogin() {
        return (
            <section>
                <button className="login github" onClick={this.authenticate}>Login with Github</button>
            </section>
        )
    }
    render() {
        const logout = <button className="logout" onClick={this.logout}>Log Out</button>;
        if (!this.state.uid) {
            return <div>{this.renderLogin()}</div>;
        }
        if (this.state.uid !== this.state.owner) {
            return (
                <div className="is-error">
                    {logout}
                    <h3>Invalid login. #WompWomp</h3>
                </div>
            )
        }
        return (
            <section>
                <nav>
                    <ul className="admin-nav">
                        <li>
                            <IndexLink to='/admin/'>About</IndexLink>
                        </li>
                        <li>
                            <Link to='/admin/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/admin/blogs'>Blogs</Link>
                        </li>
                        <li>{logout}</li>
                    </ul>
                </nav>
                {this.props.children}
            </section>
        )
    }
}

export default Admin;
