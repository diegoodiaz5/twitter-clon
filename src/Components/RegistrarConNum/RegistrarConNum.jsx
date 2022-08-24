import "./RegistrarConNum.css";

import React from "react";

export default function RegistrarConNum({ mostrar }) {
  return (
    <div className="conteinerRegistrarConNum" style={{ display: `${mostrar}` }}>
      <div className="subConteinerRegistrar"></div>
    </div>
  );
}
