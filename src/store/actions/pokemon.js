import { ADD_POKEMON, REMOVE_POKEMON, EDIT_POKEMON, ADD_MOVE, REMOVE_MOVE } from "../actionTypes";
import { getPokemon } from "../../services/api";

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

export const addPokemonToTeam = pokemon => {
	return dispatch => {
		let poke = {name: pokemon, moves: [
				{
					name: "razorleaf"
				},
				{
					name: "tackle"
				},
				{
					name: "growl"
				},
				{
					name: "swords dance"
				},
				{
					name: "leaf blade"
				},
				{
					name: "ice beam"
				},
				{
					name: "thunder"
				}
			],
			moveList: []
		}

		//remember to add moveList to pokemon object
		//getPokemon(pokemon);
		dispatch(addPokemon(poke));
	}
}

export const removePokemonFromTeam = pokemon => {
	return dispatch => {
		dispatch(removePokemon(pokemon));
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