import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addPokemonToTeam } from "../store/actions/pokemon";
import Options from "../services/optionList";

class SelectPokemon extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		if(this.props.numPokemon >= 6) {
			return;
		}

		this.props.addPokemonToTeam(e.value);
		this.props.history.push("/addPokemon");
	}

	handleSubmit(e) {
	}

	render() {
		return (
			<Select 
				id="select"
				placeholder={"Choose Your Pok\u00E9mon!"}
				options={Options} 
				onChange={this.handleChange}
			/>
		);
	}
}

function mapStateToProps(state) {
	return {
		numPokemon: state.pokemon.numPokemon
	}
}

export default withRouter(connect(mapStateToProps, { addPokemonToTeam })(SelectPokemon));