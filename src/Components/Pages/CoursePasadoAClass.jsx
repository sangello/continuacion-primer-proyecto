import React, { Component } from 'react'
import axios from 'axios'

class CoursePasadoAClass extends Component {

  constructor(props) {
    super(props)
    //Inicializo users con un array vacio
    this.state = {
      CursoActual: {}
    }
    
  }

  // --- Axios ---
  componentDidMount(){
    //axios.get('http://my-json-server.typicode.com/sangello/json-db/Cursos/'+this.props.match.params.id)
    //Mejor escrito de esta otra forma con TemplatesStrings de ECMA SCRIPT 6
    //axios.get(`http://my-json-server.typicode.com/sangello/json-db/Cursos/${this.props.match.params.id}`)
    
    //Utilizando Ejemplo de WebServiceRest, https://github.com/sangello/WebServiceRest
    // localhost:8443 si queremos que sea https por lo configurado en tomcat.
    axios.get(`https://localhost:8443/WebServiceRest/restService/InfoService/getCurso/id=${this.props.match.params.id}`)
      .then(responseAxios => {
          this.setState({
            CursoActual: responseAxios.data
          })
      })
  }

  componentDidUpdate(){
    alert("componentDidUpdate")
  }

  render() {
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