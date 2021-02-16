import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      data:[],
      dataView:[]
    }
  }


  obtenerPersonajes = () =>{
    //TODO hacer array con nros random y pasarlo a la url.
    let url ='https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10';
    fetch(url)
        .then(res => res.json())
        .then((personajeCard) => {
          this.setState({
            data:personajeCard,
            dataView:personajeCard,
          });
        })
        .catch(console.log)
  }

  handleChange=(e)=> {
      let aux = [];
      this.state.data.map((row) => {
          //row.name.indexOf(e.target.value) ? aux.push(row) :

          if (row.name.toLowerCase().includes(e.target.value.toLowerCase())) {
              aux.push(row)
          }
      })
      if (e.target.value === ''){
          this.setState((prev)=>({
              ...prev,
              dataView:this.state.data,
          }))
      }else {
          this.setState((prev)=>({
              ...prev,
              dataView:aux,
          }))
      }

  }




  render(){
    return(

        <React.Fragment>
            <nav className="navbar navbar-expand-lg ">
                <button className="btn btn-info" onClick={this.obtenerPersonajes}>Listar personajes</button>
                <input type="text" className="ms-4" onChange={this.handleChange}/>
            </nav>


            <table className="table table-danger">
                <thead>
                    <tr className="table-danger">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Species</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.dataView.map((row,i)=>{
                    return(
                        <tr key={i} className="table-danger">
                            <td className="table-danger">{row.id}</td>
                            <td className="table-danger">{row.name}</td>
                            <td className="table-danger">{row.species}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </React.Fragment>
    )
  }
}

export default App;

