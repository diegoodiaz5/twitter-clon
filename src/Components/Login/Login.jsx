import "./Login.css";
import Footer from "../Footer/Footer";
import TwitterWhite from "../../Images/twitterWhite.png";
import TwitterLogo from "../../Images/twitterLogo.png";
import Apple from "../../Images/apple.png";
import GoogleG from "../../Images/googleG.png";

import React from "react";

export default function Login() {
  return (
    <>
      <div className="conteinerLogin">
        <div className="leftLogin">
          <img className="twitterWhite" src={TwitterWhite} alt="twitter-Logo" />
        </div>

        <div className="rightLogin">
          <img
            className="twitterLogoMini"
            src={TwitterLogo}
            alt="twitter-Logo-Mini"
          />
          <h1 className="titleLogin">Lo que está pasando ahora</h1>
          <h2 className="subTitleLogin">Únete a Twitter hoy mismo.</h2>
          <div className="conteinerButtonsLogin ">
            <button className="buttonLogin buttonBackgroundWhite googleButton">
              <img className="googleG" src={GoogleG} alt="google-G-Icon" />
              <b>Registrarse con Google</b>
            </button>

            <button className="buttonLogin buttonBackgroundWhite appleButton">
              <img className="apple-icon" src={Apple} alt="apple-icon-button" />
              <b>Registrarse con Apple</b>
            </button>
            <p className="parrafoEntreBotones">o</p>
            <button className="buttonLogin registroConTelefono">
              <b>Regístrate con el número de teléfono</b>
            </button>
            <span className="terminosServicios">
              Al registrarte, aceptas los{" "}
              <a className="linksRegistro" href="http://">
                <b>Términos de servicio </b>
              </a>
              y la{" "}
              <a className="linksRegistro" href="http://">
                <b>Política de privacidad</b>
              </a>
              , incluída la política de{" "}
              <a className="linksRegistro" href="http://">
                <b>Uso de Cookies</b>
              </a>
              .
            </span>

            <p className="cuentaPregunta">
              <b>¿Ya tienes una cuenta?</b>
            </p>
            <button className="buttonLogin buttonIniciarSesion">
              <b>Iniciar sesión</b>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
