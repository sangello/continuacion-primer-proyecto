import React, { Component } from 'react'
import axios from 'axios'
import CourseGrid from '../Organisms/CourseGrid'

/**
// Reescribimos el componente de tipo clase por lo que comentamos este codigo
const Cursos = [
    { "id":1,
      "title" : "Java Desde 0",
      "image" : "https://edteam-media.s3.amazonaws.com/courses/original/50668a3f-3a6e-4e24-80ff-dd5bea441559.jpg",
      "price" :  "120 USD",
      "profesor": "juan Alberto"} , 
    { "id":2,
      "title" : "PHP Desde 0",
      "image" : "https://edteam-media.s3.amazonaws.com/courses/original/5ec26692-8451-4297-a59a-adb1829a90e8.jpg",
      "price" :  "20 USD",
      "profesor": "Maxi Muñiz"} ,
    { "id":3,
      "title" : "GO Desde 0",
      "image" : "https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
      "price" :  "120 USD" ,
      "profesor": "Juan ordoñez"} , 
    { "id":4,
      "title" : "SEO Desde 0",
      "image" : "https://edteam-media.s3.amazonaws.com/courses/original/9828742f-4da6-426e-80c9-e5081cc7f7a9.png",
      "price" :  "20 USD" , 
      "profesor": "Lucero Alberto"} , 
  ]


const CourseGrid = () => (

    <div>
        <h3 className="ed-grid m-grid-1 center">RecorriendoArrays - CourseGrid</h3>
        <div className="ed-grid m-grid-4">
          {Cursos.map ( c  => (
                <CourseCard 
                    key={c.id}
                    id={c.id}
                    title={c.titulo}
                    image={c.image}
                    price={c.price}
                    profesor={c.profesor}
                /> )) }
        </div>
    </div>

) */

class Courses extends Component {

  constructor(props) {
      super(props)
      
      //Inicializo users con un array vacio
      this.state = {
        Cursos: []
      }

  }

  // --- Axios ---
  componentDidMount(){
      axios.get('http://my-json-server.typicode.com/sangello/json-db/Cursos')
      .then(responseAxios => {
          this.setState({
              Cursos: responseAxios.data
          })
      })
  }

  render() {
    const { Cursos } = this.state
    return <CourseGrid MuchosCursos={Cursos} />
  }
}

export default Courses