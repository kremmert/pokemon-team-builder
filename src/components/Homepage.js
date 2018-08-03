import React from "react";
import TeamMemberList from "./TeamMemberList";
import SelectPokemon from "../containers/SelectPokemon";

const Homepage = ({ team, removePokemon, editPokemon }) => (
	<div>
		<TeamMemberList team={team} removePokemon={removePokemon} editPokemon={editPokemon} />
		<SelectPokemon />
	</div>
);

export default Homepage;