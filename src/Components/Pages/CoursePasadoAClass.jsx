import React, { Component } from 'react'
import axios from 'axios'

class CoursePasadoAClass extends Component {

  constructor(props) {
    alert("constructor")
    super(props)
    //Inicializo users con un array vacio
    this.state = {
      CursoActual: {}
    }
    
  }

  // --- Axios ---
  componentDidMount(){
    alert("componentDidMount")
    //axios.get('http://my-json-server.typicode.com/sangello/json-db/Cursos/'+this.props.match.params.id)
    //Mejor escrito de esta otra forma con TemplatesStrings de ECMA SCRIPT 6
    axios.get(`http://my-json-server.typicode.com/sangello/json-db/Cursos/${this.props.match.params.id}`)
    .then(responseAxios => {
        //console.log("rta: "+Object.values(responseAxios.data))
        this.setState({
          CursoActual: responseAxios.data
        })
    })
  }

  componentDidUpdate(){
    alert("componentDidUpdate")
  }

  render() {
    alert("render")
    //const { Curso } = this.state
    //const CursoActual = Cursos.filter ( c => c.id === parseInt(this.props.match.params.id))[0]
    //const { CursoActual } = this.state
    return (
        <div className="ed-grid m-grid-3">
        {this.state.CursoActual?(
                <>  

                    {/**<h1 className="m-cols-3">Curso: {match.params.id}</h1>*/}
                    <h1 className="m-cols-3">{this.state.CursoActual.title}</h1>
                    <img className="m-cols-1" src= {this.state.CursoActual.image} alt= {this.state.CursoActual.title}/>
                    <p className="m-cols-2"> Profesor: {this.state.CursoActual.profesor} </p>
                </> 
            ) : ( 
                <>  
                    <div className="ed-grid">
                    <h1>Error 404</h1>
                    <span>Página no encontrada</span>
                    </div>
                </> 
            )
        }
      </div>
     )
  }
} 

export default CoursePasadoAClass