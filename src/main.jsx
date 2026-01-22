import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'

{/* createRoot initializes Client-side Rendering.
    StrictMode = React's Debugging Protocol */}
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode> 
        <App />
    </React.StrictMode>
);
