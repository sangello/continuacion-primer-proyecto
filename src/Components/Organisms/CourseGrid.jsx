import React from 'react'
import CourseCard from '../Molecules/CourseCard'
import withLoader from '../HOC/withLoader'

const CourseGrid = ({MuchosCursos}) => (
<div>
    <h3 className="ed-grid m-grid-1 center">CourseGrid</h3>
        <div className="ed-grid m-grid-4">
            {/** El método map() crea un nuevo array con los resultados de 
             * la llamada a la función indicada aplicados a cada uno de sus elementos.
            * 
             * var numbers = [1, 5, 10, 15];
             * var doubles = numbers.map(function(x) {
             *      return x * 2;
             * });
             * 
             * // doubles is now [2, 10, 20, 30]
             * // numbers is still [1, 5, 10, 15]
             * 
             * En nuestro caso en lugar de multiplicarlo por 2 se aplica CourseCard a
             * cada elemento.
             * 
             */}
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

export default withLoader("MuchosCursos",CourseGrid)



