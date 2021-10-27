import React from "react";
import PropTyes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>Trabajando con propiedades</h2>
      <h3>{props.porDefecto}</h3>
      <h4>{props.tipoProps}</h4>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Trabajando con propiedades por defecto",
  tipoProps:
    "Tipo de props: Cadena de texto, números, booleanos, arreglos, objetos, elementos de react...",
};

Propiedades.propTypes = {
  numero: PropTyes.number.isRequired,
};
