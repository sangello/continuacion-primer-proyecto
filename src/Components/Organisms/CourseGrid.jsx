import React from 'react'
import CourseCard from '../Molecules/CourseCard'
import withLoader from '../HOC/withLoader'

const CourseGrid = ({MuchosCursos}) => (
<div>
    <h3 className="ed-grid m-grid-1 center">RecorriendoArrays - CourseGrid</h3>
    {MuchosCursos.length === 0 
        ? <h1>Cargando ... </h1>
        : <div className="ed-grid m-grid-4">
            {MuchosCursos.map ( c  => (
                  <CourseCard 
                      key={c.id}
                      id={c.id}
                      title={c.titulo}
                      image={c.image}
                      price={c.price}
                      profesor={c.profesor}
                  /> )) 
            }
        </div>
    }


</div>
)

export default withLoader(CourseGrid)



