import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from './store';
import { GetPokemon } from './actions/PokemonActions';

function App() {
  const dispatch = useDispatch();
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const [pokemonName, setPokemonName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(GetPokemon(pokemonName));
  };

  return (
    <div className="app">
      <div className="input">
        <input type="text" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </div>
      {pokemonState.pokemon && (
        <div className="pokemon">
          <img src={pokemonState?.pokemon.sprites.front_default} alt="" />
          {pokemonState.pokemon.abilities.map((ability, i) => {
            return <p key={i}>{ability.ability.name}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
