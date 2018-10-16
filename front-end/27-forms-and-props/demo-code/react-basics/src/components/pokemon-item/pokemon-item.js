import React from 'react';
import PropTypes from 'prop-types';
import PokemonForm from '../pokemon-form/pokemon-form';

import superagent from 'superagent';

class PokemonItem extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // CODE TO VALIDATE THAT PROPS HAS EVERYTHING WE NEED
  // }
  handleClick = () => {
    if(!this.props.pokemon.imageURL) {
      return superagent.get(this.props.pokemon.url)
        .then(response => {
          this.props.handlePokemonUpdate({
            ...this.props.pokemon,
            imageURL: response.body.sprites.front_default,
            height: response.body.height,
          });
        })
    } else {
      this.props.handlePokemonUpdate({
        ...this.props.pokemon,
        imageURL: null,
        height: null,
      });
    }
  };

  render() {
    //! Vinicio - this.props is coming from the parent component
    // and here, we assume it has a pokemon property
    const { pokemon } = this.props;
    return (
      <li onClick={this.handleClick}>
        <p>{pokemon.name}</p>
        {pokemon.imageURL ? <img src={pokemon.imageURL} /> : undefined }
        {pokemon.height ? <p> This pokemon is {pokemon.height} tall</p> : undefined }
        <PokemonForm
          pokemon = {pokemon}
          handleNameChange = {this.props.handleNameChange}
        />
      </li>
    );
  }
}

PokemonItem.propTypes = {
  pokemon: PropTypes.object,
  handlePokemonUpdate: PropTypes.func,
  handleNameChange: PropTypes.func,
};

export default PokemonItem;