import React from "react";
import { Link } from "react-router-dom";
import DefaultSprite from "../images/poke-ball.png";
import MoveList from "./MoveList";

const TeamMember = ({name, sprite, moves, removePokemon, editPokemon}) => (
	<div className="card col-sm-2">
		<img className="card-img-top" src={sprite || DefaultSprite} alt="Pokemon Sprite"/>
		<div className="card-body">
			<h5 className="card-title"> {name} </h5>

			<div className="card-text"> 
				<MoveList moves={moves} />
			</div>

			<div>
				<Link to="/editPokemon" className="btn btn-warning btn-block" onClick={editPokemon}> Edit </Link>
				<a className="btn btn-danger btn-block" onClick={removePokemon}> Remove </a>
			</div>
		</div>
	</div>
);

export default TeamMember;