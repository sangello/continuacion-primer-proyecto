import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CourseHooks = ({ match }) => {
  //Se usa la funcion useState es un hook que nos permite actualizar el estado 
  // en este caso estamos pasando un objeto pero podemos pasar un String, int
  // y se guarda en un array de 2 elementos
  //El 1ro parametro de entrada es el estado, lo llamamos estado
  //El 2do parametro de entrada es un callback, lo llamamos setState
  /**
   * const [estado, setState] = useState({
    CursoActual: {
      "id": 1,
      "title": "Java Desde 0",
      "image": "https://edteam-media.s3.amazonaws.com/courses/original/50668a3f-3a6e-4e24-80ff-dd5bea441559.jpg",
      "price": "120 USD",
      "profesor": "juan Alberto"
    }
  })*/

  //Otra forma en lugar de usar CursoActual usar estado directamente.
  //Ejemplo Hook: UseState
  /**
  const [estado, setState] = useState({
    
      id: 1,
      title: "Java Desde 0",
      image: "https://edteam-media.s3.amazonaws.com/courses/original/50668a3f-3a6e-4e24-80ff-dd5bea441559.jpg",
      price: "120 USD",
      profesor: "juan Alberto"
    
  })
   */
  
  // ...state --> pone todos los elementos del estado
  // solamente cambia el title
  // sin ...state cambia solamente el titulo y
  // el resto de los atributos se pierden
  /** Ejemplo Hook: UseState
  const changeTitle = (text) => {
    setState ({
      ...estado,
      title: text
    })
  }
  */



  //Inicio un estado con un objeto vacio
  //Useeffect, hook que simula el ciclo de vida del componente 
 const [estado, setEstado] = useState({ })
 const [commentario, setCommentario] = useState("Sin comentarios")

  const setMyCommentario = (e) => {
    setCommentario (e.target.value)
  }

  //useEffect se ejecuta cada vez que el componete se renderiza
  //Se vuelve a renderizar un componente cuando recibe nuevas propiedades o su estado cambia
  //por lo que se hace recursivo 
  //la primera vez que corre se renderiza que llama a useEffect que renderiza y vuelve a llamar a useEffect
  // para evitar eso se agrega un segundo parametro de entrada [] --> Emula el componentDidmount que corre una sola vez
  useEffect ( () => {
    //axios.get('https://my-json-server.typicode.com/sangello/json-db/Cursos/4')
    //con la ayuda de los template String 
    axios.get(`https://my-json-server.typicode.com/sangello/json-db/Cursos/${match.params.id}`)
    .then(responseAxios => setEstado(responseAxios.data))//--> actualiza el estado
  }, [])


  

  return (

    <div className="ed-grid m-grid-3">
      {estado ? (
        <>
          <div className="l-block">
            {/**<h1 className="m-cols-3">Curso: {match.params.id}</h1>*/}
            {/**estado.CursoActual.title se cambia por estado.title */}
            <h1 className="m-cols-3">{estado.title}</h1>
            <img className="m-cols-1" src={estado.image} alt={estado.title} />
            <p className="m-cols-2"> Profesor: {estado.profesor} </p>
            {/** Ejemplo Hook: UseState
             * <button onClick={changeTitle.bind(this, "TituloNuevo AAA")}>Cambiar Titulo</button>*/}
          </div>
          <div className="ed-grid">
             <h2>Escriba tu comentario: </h2>
             <input type="text" placeholder="Escribe..." onChange={setMyCommentario.bind(this)}/>
              <p>{commentario}</p>
          </div>
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

export default CourseHooks