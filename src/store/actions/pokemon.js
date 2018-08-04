import { ADD_POKEMON, REMOVE_POKEMON, EDIT_POKEMON, ADD_MOVE, REMOVE_MOVE } from "../actionTypes";
import { addError } from "./errors";
import { getPokemon, getMoves } from "../../services/api";

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

export const addMove = (pokemon, move) => ({
	type: ADD_MOVE,
	pokemon,
	move
});

export const removeMove = (pokemon, move) => ({
	type: REMOVE_MOVE,
	pokemon,
	move
});

export const addPokemonToTeam = id => {
	return dispatch => {
		return getPokemon(id)
		.then( async function(pokemon) {
			debugger
			pokemon["moveList"] = [];
			var updatedMoves = await getMoves(pokemon.moves);
			debugger
			pokemon.moves = updatedMoves;
			dispatch( addPokemon(pokemon) );
		}).catch( err => dispatch( addError(err.message) ));
	}
}

export const removePokemonFromTeam = pokemon => {
	return async function(dispatch) {
		await dispatch(removePokemon(pokemon));
	}
}

export const editPokemonInTeam = pokemon => {
	return dispatch => {
		dispatch(editPokemon(pokemon));
	}
}

export const addMoveToList = (pokemon, move) => {
	return dispatch => {
		dispatch(addMove(pokemon, move));
	}
}

export const removeMoveFromList = (pokemon, move) => {
	return dispatch => {
		dispatch(removeMove(pokemon, move));
	}
}