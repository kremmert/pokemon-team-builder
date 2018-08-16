import React from "react";
import Homepage from "../components/Homepage";
import AddPokemon from "./AddPokemon";
import Loading from "../components/Loading";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { removePokemonFromTeam, editPokemonInTeam } from "../store/actions/pokemon"

const Main = props => {
	const {team, removePokemonFromTeam, editPokemonInTeam} = props;
	return (
		<div className="container">
			<Switch>
				<Route exact path="/" render={props => {
					return (
						<Homepage team={team} 
						removePokemon={removePokemonFromTeam} 
						editPokemon={editPokemonInTeam}
						{...props} />
					)
				}}/>
				<Route exact path="/addPokemon" render={props => {
					return (
						<AddPokemon 
							{...props}
						/>
					)
				}}/>
				<Route exact path="/editPokemon" render={props => {
					return (
						<AddPokemon 
							{...props}
						/>
					)
				}}/>
				<Route exact path="/loading" render={ props => <Loading />} />
			</Switch>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		team: state.pokemon.team
	};
}

export default withRouter(connect(mapStateToProps, { removePokemonFromTeam, editPokemonInTeam })(Main));