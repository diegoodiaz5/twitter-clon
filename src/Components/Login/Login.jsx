import "./Login.css";
import Footer from "../Footer/Footer";
import TwitterWhite from "../../Images/twitterWhite.png";
import TwitterLogo from "../../Images/twitterLogo.png";
import GoogleG from "../../Images/googleG.png";
import { GoogleLogin } from "react-google-login";
import { useState } from "react";

// import Apple from "../../Images/apple.png";
// import AppleLogin from "react-apple-login";

import RegistrarConNum from "../RegistrarConNum/RegistrarConNum";
import IniciarSesion from "../IniciarSesion/IniciarSesion";

import React from "react";

export default function Login() {
  const [mostrar, setMostrar] = useState(false);
  const [mostrarModalLogeo, setMostrarModalLogeo] = useState(false);
  const cuerpo = document.querySelector("body");

  const openModalLogeo = () => {
    setMostrarModalLogeo(true);
    cuerpo.style.overflow = "hidden";
  };
  const cerrarModalLogeo = () => {
    setMostrarModalLogeo(false);
    cuerpo.style.overflow = "";
  };

  const openModal = () => {
    setMostrar(true);
    cuerpo.style.overflow = "hidden";
  };

  const cerrarModal = () => {
    setMostrar(false);
    cuerpo.style.overflow = "";
  };

  return (
    <>
      <div id="conteinerLogin">
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
            <GoogleLogin
              clientId="899094118766-i0obvramnap5vlnodfkvnkkeft47dbb9.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className="buttonLogin buttonBackgroundWhite googleButton"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <img className="googleG" src={GoogleG} alt="google-G-Icon" />
                  Registrarse con Google
                </button>
              )}
              cookiePolicy={"single_host_origin"}
            />
            {/* <AppleLogin
              clientId="com.react.apple.login"
              redirectURI="https://redirectUrl.com"
              usePopup
              render={(renderProps) => (
                <button
                  className="buttonLogin buttonBackgroundWhite appleButton"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <img
                    className="apple-icon"
                    src={Apple}
                    alt="apple-icon-button"
                  />
                  <b>Registrarse con Apple</b>
                </button>
              )}
            /> */}
            <p className="parrafoEntreBotones">o</p>
            <button
              onClick={openModal}
              className="buttonLogin registroConTelefono"
            >
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
            <button
              className="buttonLogin buttonIniciarSesion"
              onClick={openModalLogeo}
            >
              <b>Iniciar sesión</b>
            </button>
          </div>
        </div>
      </div>

      <Footer />
      <RegistrarConNum mostrar={mostrar} cerrarModal={cerrarModal} />
      <IniciarSesion
        mostrarModalLogeo={mostrarModalLogeo}
        cerrarModalLogeo={cerrarModalLogeo}
      />
    </>
  );
}
