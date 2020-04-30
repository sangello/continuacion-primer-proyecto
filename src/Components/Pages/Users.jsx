import React, { Component } from 'react'
import UserCard from '../Molecules/UserCard'
import axios from 'axios'


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
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div className="ed-grid s-grid-2 m-sgrid-3 l-grid-4">
                    {
                        users.map(u => (
                            <UserCard 
                                key={u.id}
                                name={u.name}
                                username={u.username}
                                email={u.email}
                            />
                            ))
                    }
                </div>
            </div>

        )
    }
}

export default Users