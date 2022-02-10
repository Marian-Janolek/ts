import {
  PokemonDispatchTypes,
  PokemonType,
  POKEMON_SUCCESS,
  POKEMON_FAIL,
  POKEMON_LOADING,
} from '../actions/PokemonActionTypes';

interface DefaultStateI {
  loading: boolean;
  pokemon?: PokemonType;
}

const initialState: DefaultStateI = {
  loading: false,
};

const pokemonReducer = (
  state: DefaultStateI = initialState,
  action: PokemonDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case POKEMON_FAIL:
      return { loading: false };
    case POKEMON_SUCCESS:
      return { loading: false, pokemon: action.payload };
    case POKEMON_LOADING:
      return { loading: true };
    default:
      return state;
  }
};

export default pokemonReducer;
