import React, { Fragment } from "react";
import '../../public/notas/CSS/estilo.css';
import Menu from "../Menu";

function inicio() {
  return (
    <Fragment>
      <div>
        <header>
          <nav>
            <a href="inicio.html">Crear nueva nota</a>
            <a href="inicio.html">Ver mis Notas</a>
            <a href="inicio.html">Agregar recordatorio</a>
          </nav>
        </header>

        <div className="contenedor">
          <Menu/>
          <div className="contenedor-central">
            <h1>Apartado de notas</h1>
            <div>
              <textarea className="area-de-texto" placeholder="Nota de texto sin formato..."></textarea>
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
};

export default inicio;
