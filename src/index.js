import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import './styles/reset.css';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Blog from './components/Blog';
import ProjectFull from './components/ProjectFull';
import NotFound from './components/NotFound';
import Admin from './components/Admin';
import AdminProjects from './components/AdminProjects';
import AdminBlogs from './components/AdminBlogs';
import AdminBlogsList from './components/AdminBlogsList';
import AdminBlogsEdit from './components/AdminBlogsEdit';
import AdminBlogsAdd from './components/AdminBlogsAdd';
import AdminAbout from './components/AdminAbout';

import './styles/modifiers.css';

ReactDOM.render((
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="/about" component={About}/>
            <Route path="/work">
                <IndexRoute component={Work}></IndexRoute>
                <Route path=":id" component={ProjectFull}></Route>
            </Route>
            <Route path="/blog" component={Blog}/>
            <Route path="/admin" component={Admin}>
                <Route path="projects" component={AdminProjects}/>
                <Route path="blogs" component={AdminBlogs}>
                    <IndexRoute component={AdminBlogsList}/>
                    <Route path=':id' component={AdminBlogsEdit}/>
                    <Route path='add' component={AdminBlogsAdd}/>
                </Route>
                <Route path="about" component={AdminAbout}/>
            </Route>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
), document.getElementById('root'));
