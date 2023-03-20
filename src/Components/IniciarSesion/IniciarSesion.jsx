import React, { useEffect } from "react";
import "./IniciarSesion.css";
import GoogleG from "../../Images/googleG.png";
import { GoogleLogin } from "react-google-login";

export default function IniciarSesion({ mostrarModalLogeo, cerrarModalLogeo }) {
  useEffect(() => {
    const conteinerIniciarSesion = document.getElementById("conteinerIniciarSesion");
    if (mostrarModalLogeo === false) {
      conteinerIniciarSesion.style.display = "none";
      conteinerIniciarSesion.style.zIndex = "-1"
    } else {
      conteinerIniciarSesion.style.zIndex = "1"
      conteinerIniciarSesion.style.display = "flex"
    }
  })
  return (
    <div id="conteinerIniciarSesion">
      <div className="subConteinerIniciarSesion">
        <div id="firstLineLogIn">
          <img onClick={cerrarModalLogeo} src={require('../../Images/xClose.png')} alt="closeButton" className="closeButton" id="closeButtonLogIn"/>
          <h1 id="twitterTitlteLogin">Inicia sesión en <p id="twitterTitle">Twitter</p></h1>   
        </div>
          <GoogleLogin
            clientId="899094118766-i0obvramnap5vlnodfkvnkkeft47dbb9.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                className="buttonLogin buttonBackgroundWhite googleButton"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img className="googleG" src={GoogleG} alt="google-G-Icon" />
                Continuar con Google
              </button>
            )}
            cookiePolicy={"single_host_origin"}
          />
          <p className="oParrafo">
            <b>o</b>
          </p>
          <input
            type="text"
            placeholder="Teléfono, Correo Electrónico o nombre de usuario"
            className="anchosLogin inputLogin"
          />
          <button className="anchosLogin buttonSiguiente">
            <b>Siguiente</b>
          </button>
          <button className="anchosLogin buttonOlvidarContraseña">
            <b>¿Olvidaste tu contraseña?</b>
          </button>
          <p className="noAccount">
            <b>
              ¿No tienes una cuenta?
              <span className="registrateLink">
                Regístrate
              </span>
            </b>
          </p>
        </div>
      </div>
  );
}
