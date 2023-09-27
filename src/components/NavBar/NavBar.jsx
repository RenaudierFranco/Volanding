import React, { useContext, useEffect } from 'react';
import {Navbar} from 'bootstrap-4-react';
import { NavLink } from 'react-router-dom';
import FormLogin from '../FormLogin/FormLogin';
import { UserContext } from '../../Context/UserContext';

const NavBar = () => {

  const { logIn, logOut, log, logForm, setLog} = useContext(UserContext)

  // Leer el valor de localStorage al cargar el componente
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      setLog(true);
    }
  }, []);

  return (
      <Navbar shadow p="3" mb="5" bg="light" rounded>
        <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
        <NavLink className="navbar-brand">
          <img src="https://i.ibb.co/TwdYpf5/unnamed.png" alt="Logo" width="30" height="30" style={{"borderRadius" : "50%"}} className="mr-3 d-inline-block align-text-top"></img>
          Volanding
        </NavLink>
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
                    <a className="nav-link" href="/MyFlights/rpcYrvDWfdNqHoMZw5Fj">Mis vuelos</a>
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
                    <FormLogin/>
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