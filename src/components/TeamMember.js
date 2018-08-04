import React from "react";
import { Link } from "react-router-dom";
import DefaultSprite from "../images/poke-ball.png";
import MoveList from "./MoveList";
import { getType } from "../services/moveTypes";
import { capitalize } from "../services/api";

const Type = (type, i) => {
	return <img src={getType(type.typeName)} alt={capitalize(type.typeName)} key={type.typeName} />
}

const TeamMember = ({name, sprite, types, moves, removePokemon, editPokemon}) => {
	const typeList = types.map( (typeObj, i) => <Type typeName={typeObj.type.name} key={i} /> )
	return (
		<div className="card col-sm-2">
			<img className="card-img-top" src={sprite || DefaultSprite} alt="Pokemon Sprite"/>
			<div className="card-body">
				<h5 className="card-title"> {name} </h5>
				<span className="types">
					{typeList}
				</span>
				<div className="card-text"> 
					<MoveList moves={moves} />
				</div>

				<div className="buttons">
					<Link to="/editPokemon" className="btn btn-warning btn-block" onClick={editPokemon}> Edit </Link>
					<a className="btn btn-danger btn-block" onClick={removePokemon}> Remove </a>
				</div>
			</div>
		</div>
	)
};

export default TeamMember;