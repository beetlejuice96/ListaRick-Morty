import React, {useState} from 'react';


const  ModalView = (props) =>{

    const id = "ModalView"+props.row.id;
    const {gender,location,status} = props.row;
    return(
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.row.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="card" >
                        <img src={props.row.image} className="card-img-top" alt=""/>
                         <div className="card-body">
                            <p>{gender}</p>
                             <p>{location.name}</p>
                             <p>{status}</p>

                         </div>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export  default ModalView;