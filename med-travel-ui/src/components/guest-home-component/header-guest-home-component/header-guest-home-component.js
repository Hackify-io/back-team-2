import React from 'react';
// import Nav from 'react-bootstrap/Nav';
// import $ from 'jquery';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './header-guest-home-component.css';

export default class HeaderGuestHomeComponent extends React.Component{

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light header-guest-home-component" id="header-guest-home-component">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto header-guest-home-component-list">                        
                        <li class="nav-item">
                            <Link to="register-clinic" class="nav-link header-guest-home-component-list-item" href="#">Registrar clinica</Link>
                        </li>
                        <li>
                            <Link to="/register-user" class="nav-link header-guest-home-component-list-item" href="#">Registrar usuario</Link>
                        </li>
                        <li>
                            <Link to="/sign-in" class="nav-link header-guest-home-component-list-item" href="#">Iniciar sesion</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
