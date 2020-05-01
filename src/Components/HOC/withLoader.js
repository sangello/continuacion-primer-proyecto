import React, { Component } from "react"

/**
 * Un componente de Orden superior es:
 *  una funcion (withLoader) que recibe un componente ( WrapperComponent ) 
 * y devuelve otro componente 
 * 
 */
const withLoader = ( WrapperComponent ) => {
    return class WithLoader extends Component{

            constructor(props){
                super(props)
            }

            render(){
                //Devuelve el mismo componente WrapperComponent que recibo como entrada
                // con sus mismas propiedades
                return <WrapperComponent {...this.props} />
            }

    }

}
export default withLoader