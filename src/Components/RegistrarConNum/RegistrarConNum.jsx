import "./RegistrarConNum.css";
import React from "react";
import XClose from "../../Images/xClose.png";

export default function RegistrarConNum({ mostrar }) {
  const dia = () => {
    let arregloDeDias = [];
    for (let i = 0; i <= 30; i++) {
      arregloDeDias[i] = <option>{i + 1}</option>;
    }
    return arregloDeDias;
  };

  const mes = () => {
    let arregloDeMes = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Setiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    for (let i = 0; i <= 11; i++) {
      arregloDeMes[i] = <option>{arregloDeMes[i]}</option>;
    }
    return arregloDeMes;
  };

  const anio = () => {
    let arregloDeAnios = [];
    let añoActual = 2022;
    for (let i = 0; i <= 120; i++) {
      arregloDeAnios[i] = <option>{añoActual - i}</option>;
    }
    return arregloDeAnios;
  };

  return (
    <div className="conteinerRegistrarConNum" style={{ display: `${mostrar}` }}>
      <div className="subConteinerRegistrar">
        <div className="firstLine">
          <img className="xClose" src={XClose} alt="close-button" />
          <p className="pasos">
            <b>Paso 1 de 5</b>
          </p>
        </div>
        <div className="conteinerModal">
          <h1>Crea tu cuenta</h1>
          <input
            id="inputNombre"
            className="inputPasoUno"
            type="text"
            placeholder="Nombre"
          />
          <input className="inputPasoUno" type="text" placeholder="Teléfono" />
          <p className="correoTel">
            <b>Usar correo</b>
          </p>
          <p className="fechaNacTitle">
            <b>Fecha de nacimiento</b>
          </p>
          <p className="infoFechaNac">
            <b>
              Esta información no será publica. Confirma tu propia edad, incluso
              si esta cuenta es para una empresa, una mascota u otra cosa.
            </b>
          </p>
          <div className="fechaNac">
            <select id="selectMes" className="selectsRegistro" name="mes">
              {mes()}
            </select>
            <select id="selectDia" className="selectsRegistro" name="dia">
              {dia()}
            </select>
            <select id="selectAnio" className="selectsRegistro" name="anio">
              {anio()}
            </select>
          </div>
          <button className="buttonNext">Siguiente</button>
        </div>
      </div>
    </div>
  );
}
