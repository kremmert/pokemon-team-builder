import React from "react";
import Homepage from "../components/Homepage";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { removePokemonFromTeam } from "../store/actions/pokemon"

const Main = props => {
	const {pokemon, removePokemonFromTeam} = props;
	return (
		<div className="container">
			<Switch>
				<Route exact path="/" render={props => <Homepage pokemon={pokemon} removePokemon={removePokemonFromTeam} {...props} />} />
			</Switch>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		pokemon: state.pokemon
	};
}

export default withRouter(connect(mapStateToProps, { removePokemonFromTeam })(Main));