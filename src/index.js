import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ToDoItem from "./components/ToDo/ToDoItem";

import {Route, BrowserRouter as Router  } from "../node_modules/react-router-dom";

const myRouter = (

  <Router>
    <Route  exact path="/" component={App}/>
    <Route  path="/toDo" component={ToDoItem}/>
  </Router>

)

ReactDOM.render( myRouter, document.getElementById('root') );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
