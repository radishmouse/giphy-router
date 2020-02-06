import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';

import GiphyAppWrapper from './GiphyAppWrapper';

function GiphyRouterApp() {

    return (

        <Router>
            <ul>
                <li><Link to="/giphy/dog">dog</Link></li>
                <li><Link to="/giphy/cat">cat</Link></li>
                <li><Link to="/giphy/fish">fish</Link></li>
            </ul>

            <Route path="/giphy/:tag">
                <GiphyAppWrapper />
            </Route>
        </Router>
    )
}

export default GiphyRouterApp;