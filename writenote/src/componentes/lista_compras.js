import React, { Fragment } from "react";
import Menu from "../Menu";

function lista_compras(){
    return(
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
                    <h1>Lista de Compras</h1>
                    <div className="tareas-container">
                        <div id="tarea1" className="tarea">
                            <input type="checkbox" id="checkbox1" className="checkbox" />
                            <label htmlFor="checkbox1">Pan</label>
                        </div>
                        <div id="tarea2" className="tarea">
                            <input type="checkbox" id="checkbox2" className="checkbox" checked />
                            <label htmlFor="checkbox2">Huevos</label>
                        </div>
                        <div id="tarea3" className="tarea">
                            <input type="checkbox" id="checkbox3" className="checkbox" />
                            <label htmlFor="checkbox3">Frijoles</label>
                        </div>
                        <div id="tarea4" className="tarea">
                            <input type="checkbox" id="checkbox3" className="checkbox" />
                            <label htmlFor="checkbox3">Queso</label>
                        </div>
                    </div>
                    <textarea className="area-de-texto" placeholder="Agregar nueva compra..."></textarea>
                    <nav>
                        <button className="boton" id="guardar">
                            <i className="fas fa-save icono"></i> Guardar
                        </button><br /><br />
                        <button className="boton" id="editar">
                            <i className="fas fa-edit icono"></i> Editar
                        </button><br /><br />
                        <button className="boton" id="eliminar">
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
    )
}