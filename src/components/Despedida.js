import React, { Component } from 'react';

// Mostrar por medio de los props
// el nombre de Sensei, la edad y la nacionalidad
// Bonus si se pasa el Objeto sensei

class Despedida extends Component {
    constructor(props) {
        super(props);
        console.log('Hola');
        this.getSensei = this.getSensei.bind(this);
        
    }

    getSensei(){
        let sensei={
          nameSensei: 'Danyparc', 
          ageSensei: 23,
          nacSensei:'Mexican'
        }
        console.log(sensei);
        this.setState({sensei});
        // return sensei
      }

    render() {
        console.log('State',this.state);
        
        return ( 
            <div>
                {/* <p>Tu Sensei es: {this.state.sensei.nameSensei}</p> */}
                <p>Mi sensei es: {this.state.sensei.nameSensei}</p>
                <button onClick={this.getSensei}>Get Sensei</button>
            </div>
         );
    }
}
 
export default Despedida;