import { ADD_POKEMON, REMOVE_POKEMON, EDIT_POKEMON, ADD_MOVE, REMOVE_MOVE } from "../actionTypes";

const DEFAULT_STATE = {
	team: [],
	numPokemon: 0,
	lastPokemon: {}
}

export default (state=DEFAULT_STATE, action) => {
	switch(action.type) {
		case ADD_POKEMON:
			var teamNumber = state.numPokemon + 1;
			return {...state, team: [...state.team, action.pokemon], numPokemon: teamNumber, lastPokemon: action.pokemon};
		case REMOVE_POKEMON:
			var team = state.team.filter(val => val !== action.pokemon);
			var num = state.numPokemon - 1;
			debugger
			return {...state, team, numPokemon: num, lastPokemon: {} }; 
		case EDIT_POKEMON: 
			return {...state, lastPokemon: action.pokemon};
		case ADD_MOVE:
			var i = state.team.indexOf(action.pokemon);
			var moveList = [...state.team[i].moveList, action.move];
			var updateTeamAdd = [...state.team];
			updateTeamAdd[i].moveList = moveList;
			return {...state, team: updateTeamAdd};
		case REMOVE_MOVE:
			var x = state.team.indexOf(action.pokemon);
			var moveListRemove = state.team[x].moveList.filter( moveName => moveName !== action.move);
			var updateTeamRemove = [...state.team];
			updateTeamRemove[x].moveList = moveListRemove;
			return {...state, team: updateTeamRemove};
		default:
			return state;
	}
};