import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter,Route} from 'react-router-dom';
import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import AppRouter from './routes/AppRouter';

// import App from './components/App';


ReactDOM.render(<AppRouter />, document.getElementById('root'));
