import React from "react";
import Move from "./Move"

const MoveList = props => {
	const {moves} = props;
	const moveList = moves.map( (move,i) => (
		<Move 
			moveName={move.name} 
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