import React, { Component } from 'react'
import UserCard from '../Molecules/UserCard'


class Users extends Component {

    constructor(props) {
        //pasar por herencia al componente para que sea creado
        super(props)
        
        //Inicializo users con un array vacio
        this.state = {
            users: []
        }

    }
    //Cuando el coponente se haya montado quiero obtener el array
    // de postman y ponerlo en user
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users', {method:'get'})
        .then(respuesta => console.log(respuesta))
    }

    render() {
        const { users } = this.state
        return (
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div>
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