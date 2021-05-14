import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from 'component/header/Header'

function App() {
    return (
        <Router>
            <Route path="/" component={Header}/>
        </Router>
    );
}

export default App;