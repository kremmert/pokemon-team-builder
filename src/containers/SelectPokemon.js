import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { addPokemonToTeam } from "../store/actions/pokemon";

const options = [
	{ value: "bulbasaur", label: "Bulbasaur" }
];

class SelectPokemon extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		//this.props.history.push("/addPokemon");
		// e.value
		this.props.addPokemonToTeam(e.value);

		debugger
	}

	handleSubmit(e) {
	}

	render() {
		return (
			<Select 
				options={options} 
				onChange={this.handleChange}
			/>
		);
	}
}

function mapStateToProps(state) {
	return {
		numPokemon: state.numPokemon
	}
}

export default connect(mapStateToProps, { addPokemonToTeam })(SelectPokemon)