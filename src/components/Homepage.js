import React from "react";
import TeamMemberList from "./TeamMemberList";
import SelectPokemon from "../containers/SelectPokemon";
//import TypeResistances from "../containers/TypeResistances";

class Homepage extends React.Component {
	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		const { team, removePokemon, editPokemon } = this.props;
		return (
			<div>
				<h1 className="d-flex justify-content-center"> Select {"Pok\u00E9mon"} for your team! </h1>
				<TeamMemberList team={team} removePokemon={removePokemon} editPokemon={editPokemon} />
				<SelectPokemon />
				
			</div>
		)
	}
}

export default Homepage;