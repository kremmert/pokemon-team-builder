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
		this.state = {
			value: "",
			id: 0
		}
	}

	handleChange(e) {
		this.setState({value: e.value, id: e.id});
	}

	async handleSubmit(e) {
		e.preventDefault();
		if(this.props.numPokemon >= 6 || this.state.id === 0) {
			return;
		}

		this.props.history.push("/loading");
		await this.props.addPokemonToTeam(this.state.id);
		this.props.history.push("/addPokemon");
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<Select 
					id="select"
					placeholder={"Choose Your Pok\u00E9mon!"}
					options={Options} 
					onChange={this.handleChange}
				/>
				<button type="submit" className="add btn btn-primary btn-block">
					{"Add Pok\u00E9mon!"}
				</button>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {
		numPokemon: state.pokemon.numPokemon
	}
}

export default withRouter(connect(mapStateToProps, { addPokemonToTeam })(SelectPokemon));