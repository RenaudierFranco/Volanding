import React from 'react'
import {Navbar ,BImg, Nav, Collapse } from 'bootstrap-4-react'


const NavBar = () => {
  return (
    <div>
      <Navbar dark bg="dark">
        <Navbar.Brand href="#">
          <BImg
            src={'https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg'}
            width="30"
            height="30"
            display="inline-block"
            align="top"
            mr="1"
          />
          Volanding
        </Navbar.Brand>

        <React.Fragment>
          <Navbar expand="lg" dark bg="dark" className="mb-0">
            <Navbar.Toggler target="#navbarColor1" />
            <Collapse navbar id="navbarColor1">
              <Navbar.Nav className="ml-auto">
                <Nav.ItemLink href="#" active>Home</Nav.ItemLink>
                <Nav.ItemLink href="#">Features</Nav.ItemLink>
                <Nav.ItemLink href="#">Pricing</Nav.ItemLink>
                <Nav.ItemLink href="#">About</Nav.ItemLink>
              </Navbar.Nav>
            </Collapse>
          </Navbar>
        </React.Fragment>

        <nav class="navbar bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Offcanvas navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr class="dropdown-divider"></hr>
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      </Navbar>
    </div>
  )
}

export default NavBar;