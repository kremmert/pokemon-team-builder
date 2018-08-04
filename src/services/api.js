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
