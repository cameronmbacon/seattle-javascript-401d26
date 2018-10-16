import "@babel/polyfill";
import React from 'react';
import superagent from 'superagent';
import Header from '../header/header';
import PokemonItem from '../pokemon-item/pokemon-item';

//! Vinicio - in code, components are classes that extend from React.Component

class App extends React.Component {
  //! Vinicio - props are the main way of communication in REACT
  constructor(props) {
    super(props); // Initialize everything on React's side of the component

    this.state = {};
    this.state.pokemon = [];

  }

  async componentDidMount(){
    await this.loadPokemonList();

    console.log('Pokemon loaded!');
  }

  loadPokemonList = async () => {
    //! Vinicio - an async function ALWAYS returns a promise
    //! Vinicio - outside of this function, I can use await
    const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/';
    return superagent.get(POKEMON_API)
      .then(response => {
        if (response.body.results) {
          this.setState({pokemon: response.body.results.slice(0,10)});
        }
      })
      .catch(console.error);
  };

  // Vinicio - this function takes A single pokemon and updates it in
  // the main pokemon list
  handlePokemonUpdate = (updatedPokemon) => {
    //! Vinicio - using setState is required so that react can update the DOM
    this.setState((previousState) => {
      return {
        pokemon: previousState.pokemon.map(currentPokemon => {
          return currentPokemon.url === updatedPokemon.url ? updatedPokemon : currentPokemon
        }),
      }
    });
  };

  handleNameChange = (originalName, newName) => {
    this.setState((previousState) => {
      return {
        pokemon: previousState.pokemon.map(currentPokemon => {
          return currentPokemon.name === originalName ? {...currentPokemon, name: newName} : currentPokemon;
        }),
      }
    });
  };


  //! React components NEED to have one render function in every compontent
  render() {
    return (
      <main>
        <Header/> {/* new Header().render();*/}
        <ul>
          {
            this.state.pokemon.map((currentPokemon, index) =>
              <PokemonItem
                pokemon = {currentPokemon}
                handlePokemonUpdate = {this.handlePokemonUpdate}
                handleNameChange = {this.handleNameChange}
              />
            )
          }
        </ul>
      </main>
    ); //! Vinicio - every return function will return JSX
  }
}

//! Vinicio - export default, means I'm only exporting ONE entity
export default App;
