import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from './Home';
import Blog from './Blog';
import Nav from './Nav';


const history = createBrowserHistory();

const Root = ({ store, }) => (
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Nav />
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/blog" component={Blog} />
                </div>
            </div>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
