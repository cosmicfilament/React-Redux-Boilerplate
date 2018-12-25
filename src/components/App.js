import React from 'react';
import Ziggy from './ziggy';
import '../styles/styles.scss'

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>React Redux Boilerplate</h1>
                <Ziggy />
            </div>
        );
    }
}

export default App;
