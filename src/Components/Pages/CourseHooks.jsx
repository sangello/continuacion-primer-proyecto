import React, { useState } from 'react'

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
  const [estado, setState] = useState({
    
      id: 1,
      title: "Java Desde 0",
      image: "https://edteam-media.s3.amazonaws.com/courses/original/50668a3f-3a6e-4e24-80ff-dd5bea441559.jpg",
      price: "120 USD",
      profesor: "juan Alberto"
    
  })
  // ...state --> pone todos los elementos del estado
  // solamente cambia el title
  // sin ...state cambia solamente el titulo y
  // el resto de los atributos se pierden
  const changeTitle = (text) => {
    setState ({
      ...estado,
      title: text
    })
  }

  return (

    <div className="ed-grid m-grid-3">
      {estado ? (
        <>
          {/**<h1 className="m-cols-3">Curso: {match.params.id}</h1>*/}
          {/**estado.CursoActual.title se cambia por estado.title */}
          <h1 className="m-cols-3">{estado.title}</h1>
          <img className="m-cols-1" src={estado.image} alt={estado.title} />
          <p className="m-cols-2"> Profesor: {estado.profesor} </p>
          <button onClick={changeTitle.bind(this, "TituloNuevo AAA")}>Cambiar Titulo</button>
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