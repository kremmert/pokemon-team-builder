import React from "react";

const Move = ({moveName}) => (
	<p>{moveName}</p>
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