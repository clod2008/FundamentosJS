import React from 'react';
import { BrowserRouter } from "react-router-dom"; // Docu: https://reactrouter.com/en/v6.3.0/getting-started/overview
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  
    <App />
  </BrowserRouter>


);


