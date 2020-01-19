import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GuestHomeComponent from './components/guest-home-component/guest-home-component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <GuestHomeComponent />
    </Router>    
  );
}

export default App;
