import React, { Fragment } from "react";
function lista_tareas() {
    return (
        <Fragment>
<div className="contenedor">
            <div className="contenedor-lateral">
                <h1>Menú de opciones</h1>
                <button className="boton-con-icono">
                    <i className="fas fa-plus icono"></i> Agregar nueva categoria
                </button><br />
                <button className="boton-con-icono">
                    <i className="fas fa-tasks icono"></i> Lista de Tareas
                </button><br />
                <button className="boton-con-icono">
                    <i className="fas fa-shopping-cart icono"></i> Lista de Compras
                </button><br />
                <button className="boton-con-icono">
                    <i className="fas fa-chalkboard icono"></i> Notas de clases
                </button><br />
                <button className="boton-con-icono">
                    <i className="fas fa-tasks icono"></i> Lista de Compras
                </button><br />
                <button className="boton-con-icono">
                    <i className="fas fa-chalkboard icono"></i> Notas Importantes
                </button><br />
                <button className="boton-con-icono">
                    <i className="fas fa-bell icono"></i> Agregar Recordatorio
                </button>
            </div>
            <div className="contenedor-central">
                <h1>Lista de tareas</h1>
                <div className="tareas-container">
                    <div id="tarea1" className="tarea">
                        <input type="checkbox" id="checkbox1" className="checkbox" />
                        <label htmlFor="checkbox1">Tarea 1</label>
                    </div>
                    <div id="tarea2" className="tarea">
                        <input type="checkbox" id="checkbox2" className="checkbox" checked />
                        <label htmlFor="checkbox2">Tarea 2</label>
                    </div>
                    <div id="tarea3" className="tarea">
                        <input type="checkbox" id="checkbox3" className="checkbox" />
                        <label htmlFor="checkbox3">Tarea 3</label>
                    </div>
                    <div id="tarea4" className="tarea">
                        <input type="checkbox" id="checkbox4" className="checkbox" />
                        <label htmlFor="checkbox4">Tarea 4</label>
                    </div>
                </div>
                <textarea className="area-de-texto" placeholder="Agregar tarea..."></textarea>
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
        </Fragment>
    );
}

export default lista_tareas;