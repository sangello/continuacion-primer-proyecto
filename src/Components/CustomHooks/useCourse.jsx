import { useState, useEffect } from 'react'
import axios from 'axios'

//const = useCourse = id => {...}
// otra forma de crear una funcion.
//function useCourse (id) {...}
function useCourse (id) {
      //Inicio un estado con un objeto vacio
      //Useeffect, hook que simula el ciclo de vida del componente 
      const [estado, setEstado] = useState({ })
    
      //useEffect se ejecuta cada vez que el componete se renderiza
      //Se vuelve a renderizar un componente cuando recibe nuevas propiedades o su estado cambia
      //por lo que se hace recursivo 
      //la primera vez que corre se renderiza que llama a useEffect que renderiza y vuelve a llamar a useEffect
      // para evitar eso se agrega un segundo parametro de entrada [] --> Emula el componentDidmount que corre una sola vez
      //https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
      useEffect ( () => {
        //axios.get('https://my-json-server.typicode.com/sangello/json-db/Cursos/4')
        //con la ayuda de los template String 
        axios.get(`https://my-json-server.typicode.com/sangello/json-db/Cursos/${id}`)
        .then(responseAxios => setEstado(responseAxios.data))//--> actualiza el estado
        
      }, [id])

  return estado
}

export default useCourse