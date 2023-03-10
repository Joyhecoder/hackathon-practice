//Packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ToDo from './components/ToDo'
import BaseLayout from './layout/BaseLayout'

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <BaseLayout>
      <Switch>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/toDo" element={<ToDo />} /> 
      </Switch>
    </BaseLayout>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
