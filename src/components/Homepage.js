import React from "react";
import TeamMemberList from "./TeamMemberList";
import SelectPokemon from "../containers/SelectPokemon";

const Homepage = ({ pokemon, removePokemon }) => (
	<div>
		<TeamMemberList pokemon={pokemon} removePokemon={removePokemon} />
		<SelectPokemon />
	</div>
);

export default Homepage;