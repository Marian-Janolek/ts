import { Dispatch } from 'redux';
import {
  PokemonDispatchTypes,
  POKEMON_SUCCESS,
  POKEMON_FAIL,
  POKEMON_LOADING,
} from './PokemonActionTypes';
import axios from 'axios';

export const GetPokemon =
  (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
      dispatch({ type: POKEMON_LOADING });
      const { data } = await axios(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );

      dispatch({ type: POKEMON_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: POKEMON_FAIL });
    }
  };
