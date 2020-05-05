import React, { useState } from 'react'

const CourseHooks = ({ match }) => {
  //Por teoria la funcion useState es un hook que nos permite actualizar el estado y
  // devuelve un array de 2 elementos
  //El 1ro parametro de entradad es el estado, lo llamamos estado
  //El 2do parametro de entrada es un callback, lo llamamos setState
  const [estado, setState] = useState({
    CursoActual: {
      "id": 1,
      "title": "Java Desde 0",
      "image": "https://edteam-media.s3.amazonaws.com/courses/original/50668a3f-3a6e-4e24-80ff-dd5bea441559.jpg",
      "price": "120 USD",
      "profesor": "juan Alberto"
    }
  })

  return (

    <div className="ed-grid m-grid-3">
      {estado.CursoActual ? (
        <>
          {/**<h1 className="m-cols-3">Curso: {match.params.id}</h1>*/}
          <h1 className="m-cols-3">{estado.CursoActual.title}</h1>
          <img className="m-cols-1" src={estado.CursoActual.image} alt={estado.CursoActual.title} />
          <p className="m-cols-2"> Profesor: {estado.CursoActual.profesor} </p>
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