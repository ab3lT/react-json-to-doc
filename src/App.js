// src/App.js

import React from 'react';
import DownloadDoc from './DownloadDoc';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Download JSON Data as .doc File</h1>
                <DownloadDoc />
            </header>
        </div>
    );
}

export default App;
