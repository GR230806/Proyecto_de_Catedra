import React, { Fragment } from "react";
import Menu from "../componentes/Menu";
function notas_importantes_() {
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
          <h1>Notas importantes</h1>
          <img src="IMG/estrella.png" alt="" />

          <div>
            <textarea className="area-de-texto" placeholder="
              1-Hacer tareas de informática.
              2-Reunión informativa.
              3-Inicio de proyecto.
              4-Aceptación para horas sociales.
              5-Entrega de guías.
              6-Inscribirse al curso de redes.
              7-Estudiar para el parcial.
              8-Conectarse a clase PAL.
              9-Hacer investigación científica.
              10-Viernes no hay clase presencial.
            "></textarea>
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

export default notas_importantes_;