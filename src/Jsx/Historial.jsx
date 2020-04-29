import React from 'react'

const Historial = ({match , location, history}) => (

        <div>
            <h3>Match:    </h3>{JSON.stringify(match)}
            <h3>Location: </h3>{JSON.stringify(location)}
            <h3>History:  </h3>{JSON.stringify(history)}
        </div>

)

export default Historial 