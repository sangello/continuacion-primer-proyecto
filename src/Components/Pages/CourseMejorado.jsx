import React, { Component } from 'react'
import axios from 'axios'
import withLoader from '../HOC/withLoader'

class CourseMejorado extends Component {

  constructor(props) {
    super(props)
    //console.log(this.props)
    //Inicializo users con un array vacio
    this.state = {
      CursoActual: []
    }
    
  }

  // --- Axios ---
  componentDidMount(){
    axios.get('http://my-json-server.typicode.com/sangello/json-db/Cursos/'+this.props.match.params.id)
    .then(responseAxios => {
        console.log("rta: "+Object.values(responseAxios.data))
        this.setState({
          CursoActual: responseAxios.data
        })
    })
  }

  render() {
    //const { Curso } = this.state
    //const CursoActual = Cursos.filter ( c => c.id === parseInt(this.props.match.params.id))[0]
    const { CursoActual } = this.state
    return (
        <div className="ed-grid m-grid-3">
        {CursoActual.id!=undefined?(
                <>  

                    {/**<h1 className="m-cols-3">Curso: {match.params.id}</h1>*/}
                    <h1 className="m-cols-3">{CursoActual.title}</h1>
                    <img className="m-cols-1" src= {CursoActual.image} alt= {CursoActual.title}/>
                    <p className="m-cols-2"> Profesor: {CursoActual.profesor} </p>
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

export default CourseMejorado