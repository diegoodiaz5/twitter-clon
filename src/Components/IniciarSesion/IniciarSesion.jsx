import React from "react";
import "./IniciarSesion.css";
import XClose from "../../Images/xClose.png";
import TwitterLogo from "../../Images/twitterLogo.png";
import GoogleG from "../../Images/googleG.png";
import { GoogleLogin } from "react-google-login";

export default function IniciarSesion({ mostrarModalLogeo, cerrarModalLogeo }) {
  let zzIndex = "";

  if (mostrarModalLogeo === false) {
    zzIndex = "-1";
  } else zzIndex = "1";

  return (
    <div className="conteinerIniciarSesion" style={{ zIndex: `${zzIndex}` }}>
      <div className="subConteinerIniciarSesion">
        <img
          onClick={cerrarModalLogeo}
          className="xCloseLogin"
          src={XClose}
          alt="close-button"
        />
        <div className="rightLoginModal">
          <img
            src={TwitterLogo}
            alt="twitter-logo"
            className="twitterLogoModal"
          />
          <h1>Inicia sesión en Twitter</h1>
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
              <a className="registrateLink" href="http://">
                {" "}
                Regístrate
              </a>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}
