import React, { Component } from "react"

/**
 * Un componente de Orden superior es:
 *  una funcion (withLoader) que recibe un componente ( WrapperComponent ) 
 * y devuelve otro componente 
 * 
 */
const withLoader = ( propValue, WrapperComponent ) => {
    return class WithLoader extends Component{

            constructor(props){
                super(props)
            }

            render(){
                console.log(`aaa: ${JSON.stringify(this.props["MuchosUsuarios"])}`)
                //Devuelve el mismo componente WrapperComponent que recibo como entrada
                // con sus mismas propiedades
                // this.props.MuchosCursos.length === 0
                // this.props["MuchosCursos"].length
                return this.props[propValue].length === 0
                            ? <h3>Cargando...</h3>
                            : <WrapperComponent {...this.props} />
                
            }

    }

}
export default withLoader