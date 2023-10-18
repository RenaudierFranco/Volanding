import React, { useContext, useEffect } from 'react';
import {Navbar} from 'bootstrap-4-react';
import { NavLink } from 'react-router-dom';
import FormLogin from '../FormLogin/FormLogin';
import { UserContext } from '../../Context/UserContext';

const NavBar = () => {

  const { logIn, logOut, log, logForm, setLog, userId, setUserId, userName, setUserName} = useContext(UserContext)

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      setLog(true);
    }
    
    if (localStorage.getItem('userName')){
      setUserName(localStorage.getItem('userName'))
    }
  }, []);

  useEffect(() => {
    console.log('user id ',userId)
    if(localStorage.getItem('user')){
      const getUserId = JSON.parse(localStorage.getItem('user'))
      setUserId(getUserId.id)
      console.log('get User Id', getUserId.id)
    }
  }, [userId])
  
  useEffect(() => {

  }, [])

  return (
      <Navbar shadow p="3" mb="5" bg="light" rounded>
        <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
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
          <div className="offcanvas-header justify-content-between">
              {
                userName !== ''?
                <>
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-person-fill mr-2" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>
                  {userName.charAt(0).toUpperCase() + userName.slice(1)}
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </>
                :
                <>
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </>
              }
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                </li>
                {
                  log?
                  <li className="nav-item">
                    <NavLink className="nav-link" to={`/MyFlights/${userId}`}>Mis vuelos</NavLink>
                  </li>
                :
                  <></>
                }
                <li className="nav-item">
                  <a className="nav-link" href="https://www.youtube.com/watch?v=Emp7ntPJm2w">Sobre Nosotros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.youtube.com/watch?v=bolIZGtKOfw">Contacto</a>
                </li>
                {
                  // Renderizado condicional Login - Logout
                  log?
                  <li className="nav-item">
                    <NavLink className="nav-link" onClick={logOut}>Salir</NavLink>
                  </li>
                :
                  <li className="nav-item">
                  <NavLink className="nav-link" onClick={logIn}>Loguearse</NavLink>
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