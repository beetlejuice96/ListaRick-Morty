import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Table from './components/Table.js';
import escapeStringRegexp from 'escape-string-regexp';


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
          /*if (row.name.toLowerCase().includes(e.target.value.toLowerCase())) {
              aux.push(row)
          }*/
          /*TODO ver como poder recorrer verdaderamente todos los campos anidados de un objeto.*/
          const regex = new RegExp(`.*?${escapeStringRegexp(e.target.value)}.*?`, 'i');
          const rowKeys=['id','name','species'];

          for (let i = 0; i<rowKeys.length;i++){
              let value = row[rowKeys[i]];
              if(regex.test(value)){
                  aux.push(row);
                  break;
              }
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

  deleteRow =(id)=>{
      const newArray = this.state.data.filter(row => row.id !== id);
      this.setState({
          data:newArray,
          dataView:newArray
      })
  }

  editRow=(row)=>{
    const {id,name,species}=row;
    const newArray = this.state.data.map(personaje=>personaje.id===row.id ? {...personaje ,id:id,name:name,species:species} : personaje);
    this.setState({
        data:newArray,
        dataView:newArray
    })
  }

  render(){
      const style= {
          background:'#282c34',
          color:'white',
      }
      const styleh1 = {
          margin:'auto',
      }
      const stylenav = {
          display:'flex',
          flexDirection:'column',

      }
    return(

        <React.Fragment>
            <header className="navbar navbar-expand-lg " style={style}>
                <h1 style={styleh1}>Lista de rick & Morty</h1>
            </header>
            <nav className="navbar navbar-expand-lg ">
                <button className="btn btn-info" onClick={this.obtenerPersonajes}>Listar personajes</button>
                <input type="text" className="ms-4" onChange={this.handleChange}/>
            </nav>
            <Table dataView ={this.state.dataView} deleteRow={this.deleteRow} editRow={this.editRow}/>

        </React.Fragment>
    )
  }
}

export default App;

