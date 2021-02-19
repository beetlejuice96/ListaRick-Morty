import React from 'react';
import Row from "./Row";

const Table=(props)=>{
    const {dataView} = props;
    return(

            <table className="table table-danger">
                <thead>
                <tr className="table-danger">
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Species</th>
                    <th scope="col">actions</th>
                </tr>
                </thead>
                <tbody>
                {dataView.map((row,i)=>{
                    return(
                        <Row key={i} id={i}  row={row} deleteRow={()=>props.deleteRow(row.id)} editRow={props.editRow} />
                    );
                })}
                </tbody>
            </table>
    )
}

export default Table;