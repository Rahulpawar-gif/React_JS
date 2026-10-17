import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    {/* Fragments:
        A Fragment is a wrapper used to group JSX elements.
    */}

    {/* Empty wrapper:
        <> </> or <React.Fragment> </React.Fragment>
    */}

    {/* StrictMode:
        It helps identify potential problems in the application.
    */}

    <App />
  </>
);

// Measure application performance
reportWebVitals