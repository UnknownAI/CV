// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';

// ReactDOM.render(<App />, document.getElementById('app'));

import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// reportWebVitals();