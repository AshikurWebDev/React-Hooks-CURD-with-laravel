import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MyRotues from './MyRotues';
import Navbar from './Navbar';
import "../../css/app.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <MyRotues />
            </BrowserRouter> 
        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
