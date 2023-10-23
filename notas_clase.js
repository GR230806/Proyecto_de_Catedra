import React, { Fragment } from "react";
import Menu from "../componentes/Menu";
function notas_clase_() {
    return (
        <Fragment>
            <div>
      <header>
        <nav>
          <a href="index.html">Crear nueva nota</a>
          <a href="index.html">Ver mis Notas</a>
          <a href="index.html">Agregar recordatorio</a>
        </nav>
      </header>

      <div className="contenedor">
        <Menu/>
       
        <div className="contenedor-central">
          <h1>Notas de clase</h1>
          <h2>Sociales</h2>
          <div>
            <textarea className="area-de-texto" placeholder="Ciencias sociales son: La investigan, perfeccionan o desarrollan conceptos, teorías y métodos o se dedican a la aplicación de los conocimientos en materia de filosofía, economía, sociología, psicología, antropología, historia, política y otras"></textarea>
            <h2>Ciencias</h2>
            <textarea className="area-de-texto" placeholder="La ciencia: Es un conjunto de conocimientos sistemáticos comprobables que estudian, explican y predicen los fenómenos sociales, artificiales y naturales."></textarea>
            <h2>Matemática</h2>
            <textarea className="area-de-texto" placeholder="Matemática es: la ciencia que estudia las relaciones entre cantidades, magnitudes y propiedades, y las operaciones lógicas mediante las cuales se pueden deducir cantidades, magnitudes y propiedades desconocidas."></textarea>
          </div>
          <nav>
            <button className="boton">
              <i className="fas fa-save icono"></i> Guardar
            </button><br /><br />
            <button className="boton">
              <i className="fas fa-edit icono"></i> Editar
            </button><br /><br />
            <button className="boton">
              <i className="fas fa-trash-alt icono"></i> Eliminar
            </button><br /><br />
          </nav>
        </div>
        <div className="contenedor-lateral">
          <h1>Notas</h1>
          <ul>
            <li><a href="index.html">Nota 1</a></li>
            <li><a href="index.html">Nota 2</a></li>
            <li><a href="index.html">Nota 3</a></li>
          </ul>
        </div>
      </div>

      <footer>
        <div className="iconos"><br />
          <a href="#" className="icono"><i className="fab fa-facebook"></i></a>
          <a href="#" className="icono"><i className="fab fa-twitter"></i></a>
          <a href="#" className="icono"><i className="fab fa-instagram"></i></a>
          <a href="#" className="icono"><i className="fab fa-linkedin"></i></a>
        </div>
        <p>© COPYRIGHT WRITE NOTE. TODOS LOS DERECHOS RESERVADOS</p>
      </footer>
    </div>
        </Fragment>
    );
}

export default notas_clase_;