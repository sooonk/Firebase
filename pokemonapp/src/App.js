import React, { Component } from 'react';
import './App.css';

class Pokemon extends Component {
  render() {
    state = {
      pokemonImg: [],
      
    }
    return (
      <div>
        {this.props.name}
        {this.props.url}
      </div>
    )
  }
}

class App extends Component {

  state = {
    pokemon: [],
    isLoading: false,
    value: '',

  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(
        response => response.json()
      )
      .then(
        result => {
          this.setState({
            pokemon: result.results,
          })
        }
      )
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {

    const filteredData = this.state.pokemon
      .filter(pokemon => pokemon.name.includes(this.state.value))


    return (
      <div className="App">
        <input onChange={this.handleInputChange} />
        {filteredData.map(pokemon =>
          <Pokemon {...pokemon} />
        )}
      </div>
    );
  }
}

export default App;
