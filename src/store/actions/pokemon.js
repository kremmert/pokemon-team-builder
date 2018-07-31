import { ADD_POKEMON, REMOVE_POKEMON, EDIT_POKEMON } from "../actionTypes";

export const addPokemon = pokemon => ({
	type: ADD_POKEMON,
	pokemon
});

export const removePokemon = pokemon => ({
	type: REMOVE_POKEMON,
	pokemon
});

export const editPokemon = pokemon => ({
	type: EDIT_POKEMON,
	pokemon
});

export const addPokemonToTeam = pokemon => {
	return dispatch => {
		dispatch(addPokemon(pokemon));
	}
}

export const removePokemonFromTeam = pokemon => {
	return dispatch => {
		dispatch(removePokemon(pokemon));
	}
}