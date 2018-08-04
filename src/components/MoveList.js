import React from "react";
import { capitalize } from "../services/api";

const Move = ({moveName}) => (
	<p className="move">{capitalize(moveName)}</p>
);

const MoveList = props => {
	const {moves} = props;
	const moveList = moves.map( (move,i) => (
		<Move 
			moveName={move} 
			key={i}
		/>
	));
	return (
		<div>
			{moveList}
		</div>
	)
}

export default MoveList;