import React from 'react'
import UserCard from '../Molecules/UserCard'

const UsersGrid = ({MuchosUsuarios}) => (
   
    <div className="ed-grid">
        <h1>Usuarios</h1>
        <div className="ed-grid s-grid-2 m-sgrid-3 l-grid-4">
        {MuchosUsuarios.length === 0
                ? <h1 className="t3">Cargando...</h1> 
                : MuchosUsuarios.map(u => (
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

export default UsersGrid