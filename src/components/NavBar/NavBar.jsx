import React from 'react'
import {Navbar} from 'bootstrap-4-react'


const NavBar = () => {
  return (
    <div>
      <Navbar light bg="light">
        <nav class="navbar bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="https://i.ibb.co/TwdYpf5/unnamed.png" alt="Logo" width="30" height="30" style={{"borderRadius" : "50%"}} className="mr-3 d-inline-block align-text-top"></img>
            Volanding
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Otras Opciones</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Sobre Nosotros</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Contacto</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Cerrar Sesion</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Iniciar Sesion</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </Navbar>
    </div>
  )
}

export default NavBar;