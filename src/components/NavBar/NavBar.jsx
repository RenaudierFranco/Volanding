import React, { useState, useEffect } from 'react';
import {Navbar} from 'bootstrap-4-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import React, { Component } from 'react';


const NavBar = () => {

  const [log, setLog] = useState(false);
  const [logForm, setLogForm] = useState(false);
  
  useEffect(() => {
      console.log('que devuelve nav',localStorage.getItem('log'))
      if(localStorage.getItem('log')){
        setLogForm(false)
        setLog(true)
      }
  }, []);

  const logIn = () => {
    logForm?
      setLogForm(false)
    :
      setLogForm(true)
  }

  const logOut = () => {
    setLog(false)
    localStorage.setItem('log', false)
    console.log('LS log false')
  }

  // Función para manejar el inicio de sesión exitoso
  const handleLoginSuccess = () => {
    setLog(true);
    setLogForm(false); // Oculta el formulario después del inicio de sesión exitoso
    localStorage.setItem('log', 'true'); // Actualiza el estado de autenticación en el almacenamiento local
  };

  return (
      <Navbar shadow p="3" mb="5" bg="light" rounded>
        <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand">
            <NavLink><img src="https://i.ibb.co/TwdYpf5/unnamed.png" alt="Logo" width="30" height="30" style={{"borderRadius" : "50%"}} className="mr-3 d-inline-block align-text-top"></img>
            </NavLink>
            Volanding
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </span>
          </button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Otras Opciones</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/home">Home</a>
                </li>
                {
                  // Renderizado condicional del boton Mis Vuelos
                  log?
                  <li className="nav-item">
                    <a className="nav-link" href="/home">Mis vuelos</a>
                  </li>
                :
                  <></>
                }
                <li className="nav-item">
                  <a className="nav-link" href="/home">Sobre Nosotros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/home">Contacto</a>
                </li>
                {
                  // Renderizado condicional Login - Logout
                  log?
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={logOut}>Salir</a>
                  </li>
                :
                  <li className="nav-item">
                  <a className="nav-link" href="#" onClick={logIn}>Loguerase</a>
                  </li>
                }
                {
                  // Renderizado condicional Formulario Login
                  logForm === true?
                  <li className="nav-item" w="100">
                    <FormLogin onLoginSuccess={handleLoginSuccess}/>
                  </li>
                  :
                  <></>
                }              
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </Navbar>
  )
}

export default NavBar;