import { useState, useEffect } from 'react'

function useCounter () {

    const [count, setCount] = useState(0)

    function increase(){
        setCount(count+1)
    }

    function decrease(){
        setCount(count-1)
    }

    useEffect(() => {
        console.log(count)
    },[count])
    
      

  return {
      count,
      increase,
      decrease
    }
}

export default useCounter