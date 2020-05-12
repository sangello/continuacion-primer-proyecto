import React from 'react';
import useCounter from './useCounter'

const Index0 = () => {

   const counterOne = useCounter()

   const counterTwo = useCounter()
  
    return(
        <>
        <div className="data">
            {counterOne.count}
            <br />
           <button onClick={counterOne.increase}>Agregar</button>
           <button onClick={counterOne.decrease}>Disminuir</button>
        </div>

        <div className="data">
            {counterTwo.count}
            <br />
           <button onClick={counterTwo.increase}>Agregar</button>
           <button onClick={counterTwo.decrease}>Disminuir</button>
        </div>
        </>
    )
        
}

export default Index0