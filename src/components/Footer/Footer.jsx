import { Container } from 'bootstrap-4-react/lib/components/layout';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { db } from "../../Services/Firebase/Firebase";
import { addDoc, collection } from "firebase/firestore";



const Footer = () => {

  function sendMail
  (email, subject, body) {
    const collectionRef = collection(db, 'mail')
    const emailContent = {
      to: email,
      message: {
        subject: subject,
        text: body,
        html: `<p>${body}<p>`,
      },
    };
    console.log("Listo para ser enviado.");
    return addDoc(collectionRef, emailContent)
  }


  function sumbitHandler(e){
    e.preventDefault();
    let email = e.target.email.value;
    let subject = e.target.subject.value;
    let coment = e.target.coment.value;
    sendMail (email, subject, coment);
    email = subject = coment =  "";
  }


  return (
    <footer className="text-white py-5" style={{"backgroundColor":"#8f82f6"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Enlaces rápidos</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink 
                  to="/home"
                  style={{textDecoration:"none", color:"#FFFFFF"}}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                to="/FormOperator"
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
            <h5>Dejar comentarios</h5>
            <form onSubmit={sumbitHandler}>
              <div className="input-group mb-3">
                <div>
                  <input type="email" className="form-control m-2" name="email" placeholder="Correo electrónico" />
                </div>
                <div>
                  <input type="text" className="form-control m-2" name="subject" placeholder="Asunto" />
                </div>
                <div>
                  <input type="text" className="form-control m-2" name="coment" placeholder="Comentarios..." />
                </div>
                <div className="input-group m-2">
                  <button className="btn btn-success" type="submit">Enviar</button>
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