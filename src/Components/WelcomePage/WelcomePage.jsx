import "./WelcomePage.css";
import Footer from "../Footer/Footer";
import { GoogleLogin } from "react-google-login";
import { useState } from "react";
import RegistrarConNum from "../RegistrarConNum/RegistrarConNum";
import IniciarSesion from "../IniciarSesion/IniciarSesion";
import React from "react";

export default function WelcomePage() {
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

  const openModalLoginWitPhone = () => {
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
          <img className="twitterWhite" src={require('../../Images/twitterWhite.png')} alt="twitterLogo" />
        </div>

        <div className="rightLogin">
          <img className="twitterLogoMini" src={require('../../Images/twitterLogo.png')} alt="twitterLogo" />
          <h1 className="titleLogin">Lo que está pasando ahora</h1>
          <h2 className="subTitleLogin">Únete a Twitter hoy mismo.</h2>
          <div className="conteinerButtonsLogin ">
            <GoogleLogin clientId="899094118766-i0obvramnap5vlnodfkvnkkeft47dbb9.apps.googleusercontent.com" render={(renderProps) => (
              <button className="buttonLogin buttonBackgroundWhite googleButton" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                <img className="googleG" src={require('../../Images/googleG.png')} alt="google-G-Icon" /> Registrarse con Google
              </button>
            )} cookiePolicy={"single_host_origin"} />
            <p className="parrafoEntreBotones">o</p>
            <button onClick={openModalLoginWitPhone} className="buttonLogin registroConTelefono">
              <b>Regístrate con el número de teléfono</b>
            </button>
            <span className="terminosServicios">Al registrarte, aceptas los <span className="linksRegistro"><b> Términos de servicio </b></span>
              y la <span className="linksRegistro" ><b> Política de privacidad</b></span>, incluída la política de
              <span className="linksRegistro"> <b> Uso de Cookies</b></span>.
            </span>

            <p className="cuentaPregunta"><b>¿Ya tienes una cuenta?</b></p>
            <button className="buttonLogin buttonIniciarSesion" onClick={openModalLogeo}>
              <b>Iniciar sesión</b>
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <RegistrarConNum mostrar={mostrar} cerrarModal={cerrarModal} />
      <IniciarSesion mostrarModalLogeo={mostrarModalLogeo} cerrarModalLogeo={cerrarModalLogeo} />
    </>
  );
}
