import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAppBar from './app-bar/AppBar';
import AppBody from './app-body/AppBody';

import '../css/general.scss';

const App = () => {
    return (
        <div>
            <ButtonAppBar />
            <div className="portfolio-picture-panel">
                Picture
            </div>
            <AppBody />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));