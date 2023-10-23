import React, { Fragment } from "react";

function menu (){
    return (
        <Fragment>
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
        </Fragment>
    );
    
}

export default menu;