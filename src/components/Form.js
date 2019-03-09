import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre:'',
            descripcion:'',
            precio:0.0
        }
    }

    onInputChange = (event) => {
        // const target = event.target;
        // console.log(target.value);
        // console.log(target.id);
        const {id, value} =event.target;
        this.setState({[id]:value});
        
        // switch (target.id) {
        //     case 'nombre':
        //         this.setState({nombre: target.value})
        //         break;
        //     case 'descripcion':
        //     console.log('entro a descripcion');
            
        //         this.setState({descripcion: target.value})
        //         break;
        //     case 'precio':
        //         this.setState({precio: target.value})
        //         break;
        //     default:
        //         break;
        // }
        // this.setState({nombre: target.id === 'nombre' ? target.value : })
    }

    render() {
        return (
            <div>
                <h1>Nuevo Curso</h1>
                <form action="" >
                    <div className="form-group">
                        <label htmlFor="nombre">Name: </label>
                        <input onChange={this.onInputChange} type="text" placeholder="Nombre del curso" id="nombre" name="nombre"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcion">Descripción: </label>
                        <textarea onChange={this.onInputChange} placeholder="De que va tu curso" id="descripcion" name="descripcion" />
                    </div>
                    <div className="form-group">
                        <label htmlFor = "precio">Precio: </label>
                        <input onChange={this.onInputChange} placeholder="$ 0.00" id="precio" name="precio" type="text" />
                    </div>

                    <button className="btn btn-primary" type="submit" >Crear Curso</button>
                </form>
                <h1>Nombre: {this.state.nombre}</h1>
                <h1>Descripcion: {this.state.descripcion}</h1>
                <h1>Precio: {this.state.precio}</h1>
            </div>
        );
    }
}

export default Form;