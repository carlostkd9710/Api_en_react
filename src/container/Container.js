import React, { Component } from 'react'
import Lista from '../components/Lista'

export default class Container extends Component {
    render() {
        return (
            <div>
                <h1>Hola soy el container</h1>
                <Lista/>
            </div>
        )
    }
}
