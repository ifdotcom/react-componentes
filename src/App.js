import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <br />
          <hr />
          <Componente msg="Trabajando con componentes funcionales"></Componente>
          <hr />
          <Propiedades
            cadena="Cadena de texto"
            numero={20}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Fernanda Vidal", correo: "ifervb@outlook.com" }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento de React</i>}
            componenteReact={
              <Componente msg="Componente de react pasado como prop." />
            }
          ></Propiedades>
          <hr />
          <Estado></Estado>
        </section>
      </header>
    </div>
  );
}

export default App;
