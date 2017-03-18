import React, {Component} from 'react';

class NotFound extends Component {
    render() {
        return (
            <div>
                <h2 className='has-spacer'>404</h2>
                <p>Whoops. That page either doesn't exist or you typed the URL incorrectly.</p>
            </div>
        )
    }
}

export default NotFound;
