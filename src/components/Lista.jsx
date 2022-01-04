import React, { Component } from 'react'
import Cards from './Cards';

export default class Lista extends Component {


    constructor() {
        super();
        this.state = {
            peliculas: []
        }
    }
    async componentDidMount() {
        const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=888f397d19eb915efedefa8a3bee35b8&pag'
        const resp = await fetch(url);
        const data = await resp.json();
        const { results } = data;
        console.log("Somos results " + results)
        this.setState({ peliculas: results })
        console.log("soy peliculas " + this.state.peliculas);
    }
    render() {
        return (
            <div>
                <h1>Lista</h1>
                {
                    this.state.peliculas.map((objeto1, index) => (
                        <Cards key={index} obj1={objeto1} />
                    ))
                }
            </div>
        )
    }
}
