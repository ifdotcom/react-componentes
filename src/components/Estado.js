//! Component es un objeto de React
import React, { Component } from "react";

//! ------- Component funcional -------
//? Los componentes funcionales no pueden tener estado
//? lo siguiente se hará para pasarle el estado del componente padre al componente hijo
function EstadoAHijo(props) {
  return (
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  );
}

//! ------- Class component -------
/*
? Un componente de clase necesita el metodo render(){}
? este metodo renderiza todo el contenido
? y requerimos que el componente tenga estado
? este se puede definir dentro del constructor.
*/
/*
 * super() es usado para acceder y llamar funciones del padre de un objeto.
 * Super -> habilita this dentro del constructor del componente
 * Super(props) -> habilita this.props dentro del constructor  del componente
 */

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    setInterval(() => {
      /*
       ? el estado no se puede modificar directamente,tal como:
       * this.state.contador += 1;
       ? es ncesario utilizar setState({})
       */
      this.setState({
        //! la propiedad contador será igual al valor actual + 1
        contador: this.state.contador + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h2>El State</h2>
        <p>{this.state.contador}</p>
        <EstadoAHijo contadorHijo={this.state.contador}></EstadoAHijo>
      </div>
    );
  }
}
