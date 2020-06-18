import React, { Component } from 'react';

class MiComponente extends Component {

    constructor(props){
        super(props);
        console.log('Constructor micomponente')
    }

    render() {
        console.log('Inicio')
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Piña'],
            calorias: 400
        }
        return (
            <div className="mi-componente">
                <h1>{'Receta: ' + receta.nombre}</h1>
                <h2>Calorias: {receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((item, i) => {
                            console.log(item,i)
                            return (
                                <li key={i}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ol>
                <hr />
            </div>
        );
    }
}

export default MiComponente;
