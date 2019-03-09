import React, { Component } from 'react';

export default class Saludo extends Component {
    constructor(props){
        console.log('Constructor');
        super(props);
        this.state = {
            mensaje: 'Hola!!!!'
        }
    }
    render(){
        console.log('Render');
        
        return(
            <div className="saludo">
                <h2>{this.state.mensaje}</h2>
                <h2>Mi nombre es {this.props.miNombre}</h2>
                <p>Y tengo {this.props.edad} años</p>
            </div>
        )
    }

    
    componentDidMount(){
        this.setState({ok:'WTF!!!'})
        console.log('Estamos en DidMount');
    }

    componentDidUpdate(){
        console.log('Estamos en DidUpdate');
    }

    componentWillUnmount(){
        console.log('Estamos en WillUnmount');
    }

}