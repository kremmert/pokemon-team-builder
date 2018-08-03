import React from "react";
import DefaultSprite from "../images/poke-ball.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MoveTableRow from "./MoveTableRow";
import MoveList from "../components/MoveList";

const AddPokemon = ({pokemon}) => {
	return (
		<div className="container">
			<div className="d-flex justify-content-center">
				<div id="pokeInfo">
					<img className="rounded addTeamMemberSprite" src={pokemon.sprite || DefaultSprite} alt="Pokemon Sprite" />
					<span className="pokeName">
						{pokemon.name}
					</span>
					<MoveList moves={pokemon.moveList}/>
				</div>
				<table className="table table-hover moveList">
					<MoveTableHeader />
					<MoveTableRow pokemon={pokemon} moves={pokemon.moves} />
				</table>
			</div>
			<Link to="/" className="btn btn-primary btn-block"> Your Team </Link>
		</div>
	)
}

const MoveTableHeader = () => {
	return (
		<thead>
			<tr>
				<th scope="col"> Name </th>
				<th scope="col"> Type </th>
				<th scope="col"> Category </th>
				<th scope="col"> Power </th>
				<th scope="col"> Accuracy </th>
				<th scope="col"> PP </th>
				<th scope="col"> Description </th>
			</tr>
		</thead>
	)
}

function mapStateToProps(state) {
	return {
		pokemon: state.pokemon.lastPokemon
	}
}

export default connect(mapStateToProps,null)(AddPokemon);