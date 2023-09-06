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
      </Navbar>
    </div>
  )
}

export default NavBar
