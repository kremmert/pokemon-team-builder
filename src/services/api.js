var Pokedex = require("pokedex-promise-v2");
var options = {
  protocol: 'https',
  versionPath: '/api/v2/'
}
var P = new Pokedex(options);

export function getPokemon(id) {
	return new Promise((resolve, reject) => {
		return P.getPokemonByName(id)
		.then(res => { return resolve(res) })
		.catch(err => { return reject(err.response.data.error) });
	});
}

export async function getMoves(moves) {
	var movePromises = [];
	for(var i = 0; i < moves.length; i++) {
		movePromises.push(getMove(moves[i].move.url));
	}
	var allMoves = await Promise.all(movePromises).then(res => res).catch(err => err);
	return allMoves;
}

async function getMove(name) {
	return await P.resource(name)
		.then(res => res)
		.catch(err => err)
}

export function capitalize(str) {
	var find = '-';
	var re = new RegExp(find, 'g');
	str = str.replace(re, " ");
	return str.charAt(0).toUpperCase() + str.slice(1);
}


// import axios from "axios";

// export function apiCall(method, path, data) {
// 	return new Promise((resolve, reject) => {
// 		return axios[method](path, data).then(res => {
// 			return resolve(res.data);
// 		}).catch(err => {
// 			return reject(err.response.data.error);
// 		});
// 	});
// }
