import React from "react";
import TeamMember from "./TeamMember";

const TeamMemberList = ({ pokemon, removePokemon }) => {
	const teamList = pokemon.team.map((member,i) => (
		<TeamMember 
			name={member.name}
			sprite={member.sprites}
			moves={member.moves}
			removePokemon={removePokemon.bind(this, member.name.toLowerCase())}
			key={i}
		/>
	));
	return (
		<div className="row">
			{teamList}
		</div>
	);
} 

export default TeamMemberList;