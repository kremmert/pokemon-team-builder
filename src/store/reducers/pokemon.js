import { ADD_POKEMON, REMOVE_POKEMON, EDIT_POKEMON } from "../actionTypes";

const DEFAULT_STATE = {
	team: [
		{
			name: "bulbasaur",
			moves: [
				{
					name: "razorleaf"
				},
				{
					name: "tackle"
				}
			]
		},
		{
			name: "charmander",
			moves: [
				{
					name: "razorleaf"
				},
				{
					name: "tackle"
				}
			]
		},
		{
			name: "squirtle",
			moves: [
				{
					name: "razorleaf"
				},
				{
					name: "tackle"
				}
			]
		},
		{
			name: "pikachu",
			moves: [
				{
					name: "razorleaf"
				},
				{
					name: "tackle"
				}
			]
		},
		{
			name: "eevee",
			moves: [
				{
					name: "razorleaf"
				},
				{
					name: "tackle"
				}
			]
		},
		{
			name: "pidgey",
			moves: [
				{
					name: "razorleaf"
				},
				{
					name: "tackle"
				}
			]
		}
	]
}

export default (state=DEFAULT_STATE, action) => {
	switch(action.type) {
		case ADD_POKEMON:
			return {...state, team: [...state.team, action.pokemon]};
		case REMOVE_POKEMON:
			var team = state.team.filter(val => val.name !== action.pokemon);
			return {...state, team }; 
		case EDIT_POKEMON: 
			var updateTeam = Object.assign([], state.team);
			team[action.i] = action.pokemon;
			return {...state, team: updateTeam };
		default:
			return state;
	}
};