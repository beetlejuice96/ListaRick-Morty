import React from 'react';
import Modal from "./Modal";
import ModalView from "./ModalView";
/*
* lo que hice con este componente es pasarle todo por props para poder separar este codigo del componente controlador,
*  esto lo hago ya que este componente de "presentacion" lo unico que hace es dibujar las row y absolutamentea nada mas.
* */
/*
* aclaracion: cuando tengo que pasar a un componente secundario
* la key de un map para que react pueda identificar el elemento, debo hacerlo a travez de otro props como por ejemplo "id"
* https://reactjs.org/warnings/special-props.html
* */
const Row =(props)=>{

    const id = props.row.id;
    const idModal = "#Modal"+id;
    const modalView = "#ModalView"+id;
    return(
        <tr key={props.id} className="table-danger">
            <td className="table-danger">{props.row.id}</td>
            <td className="table-danger">{props.row.name}</td>
            <td className="table-danger">{props.row.species}</td>
            <td className="table-danger">
                <button onClick={props.deleteRow} className="btn btn-danger btn-block">
                    Eliminar
                </button>
                <button  type="button" className="btn btn-success btn-block" data-bs-toggle="modal" data-bs-target={idModal}>
                    Editar
                </button>
                <button  type="button" className="btn btn-warning btn-block" data-bs-toggle="modal" data-bs-target={modalView}>
                    ver
                </button>
                <Modal row={props.row} editRow={props.editRow}/>
                <ModalView row={props.row}/>
            </td>
        </tr>
    );
}

export default Row;
