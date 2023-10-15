import { Container } from 'bootstrap-4-react/lib/components/layout';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white py-5" style={{"backgroundColor":"#8f82f6"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Enlaces rápidos</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink 
                  to="home"
                  style={{textDecoration:"none", color:"#FFFFFF"}}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                to="FormOperator"
                style={{textDecoration:"none", color:"#FFFFFF"}}>
                Operadores
                </NavLink>
              </li>
              <li><a>Nosotros</a></li>
              <li><a>Contacto</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Nuestras redes sociales</h5>
            <ul className="list-unstyled">
              <li><a><i className="fab fa-facebook"></i> Facebook</a></li>
              <li><a><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Boletín de noticias</h5>
            <p>Suscribite a nuestro boletín para recibir noticias y ofertas especiales.</p>
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Correo electrónico" />
                <div className="input-group-append">
                  <button className="btn btn-success" type="button">Suscribirse</button>
                </div>
              </div>
            </form>
          </div>
          <Container style={{"color":"#bdbdbd"}} mt="4" text="center">
            <div><span align="bottom">Copyright 2023 Volanding, llegá donde querés estar siempre . All rights reserved Ⓡ</span></div>         
            <div><span align="bottom">Ignacio Soria - Franco Renaudier</span></div>
          </Container>
        </div>
      </div>
    </footer>
  );
}

export default Footer;