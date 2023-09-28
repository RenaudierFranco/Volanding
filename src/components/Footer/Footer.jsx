import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-5" style={{"backgroundColor":"#8f82f6"}}>
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <h5>Enlaces rápidos</h5>
            <ul className="list-unstyled">
              <li><a>Productos</a></li>
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
            <p>Suscríbite a nuestro boletín para recibir noticias y ofertas especiales.</p>
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Correo electrónico" />
                <div className="input-group-append">
                  <button className="btn btn-success" type="button">Suscribirse</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;