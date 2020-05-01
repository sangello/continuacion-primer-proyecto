import React, { Component } from 'react'
import axios from 'axios'
import UsersGrid from '../Organisms/UsersGrid'


class Users extends Component {

    constructor(props) {
        //pasar por herencia al componente para que sea creado
        super(props)
        
        //Inicializo users con un array vacio
        this.state = {
            users: []
        }

    }

    // --- Axios ---
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(responseAxios => {
            this.setState({
                users: responseAxios.data
            })
        })
    }

    // --- Fetch ---
    //Cuando el coponente se haya montado quiero obtener el array
    // de postman y ponerlo en user
    /** componentDidMount(){
        //fetch('https://jsonplaceholder.typicode.com/users', {method:'get'})
        //.then(respuesta => console.log(respuesta))

        fetch('https://jsonplaceholder.typicode.com/users', {method:'get'})
        .then(response => response.json())
        .then(response2 => console.log(
            this.setState({
                users: response2
            })
        ))
    } */

    render() {
        const { users } = this.state
        return (
            <UsersGrid MuchosUsuarios={users}/>
        )
    }
}

export default Users