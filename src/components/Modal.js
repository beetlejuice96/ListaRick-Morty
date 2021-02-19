import React, {useState} from 'react';

const  Modal = (props) =>{
    const [name,setName] = useState(props.row.name);
    const [species,setSpecies] =useState(props.row.species);
    const [row,setRow] =useState(props.row);


    /*TODO no esta entrando a setPersonaje*/
    const setearPersonaje=()=>{
        console.log("asdasdsad");
        let newRow = {
            id:props.row.id,
            name:name,
            species:species
        }
        /*TODO ver como funciona bien el ...prev para poder mantener los datos antiguos*/

        /*setRow((prev)=>{
            name:name,


        })*/
        props.editRow(newRow);
    }
    const id = "Modal"+props.row.id;
    return(

        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Editar personaje</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div className="modal-body">
                                <input type="text" placeholder={props.row.id}   readOnly className="form-control"/>

                                <input type="text" placeholder={props.row.name} onChange={(e)=>setName(e.target.value)} className="form-control"/>

                                <input type="text" placeholder={props.row.species} onChange={(e)=>setSpecies(e.target.value)} className="form-control"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={()=>setearPersonaje()}  data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;