import React from "react";
import { connect } from "react-redux";
import { addMoveToList, removeMoveFromList } from "../store/actions/pokemon";
import { getType, getCategory } from "../services/moveTypes";

class MoveTableRow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			moveState: new Array(props.moves.length).fill(false)
		}
		this.handleClick = this.handleClick.bind(this);
		this.setActive = this.setActive.bind(this);
	}

	setActive(moveState) {
		var updatedMoveState = [...moveState];

		for(var i = 0; i < this.props.pokemon.moveList.length; i++) {
			for(var j = 0; j < this.props.moves.length; j++) {
				if(this.props.pokemon.moveList[i] === this.props.moves[j].name) {
					updatedMoveState[j] = true;
				}
			}
		}

		this.setState({moveState: updatedMoveState});
	}

	handleClick(e) {
		var moveName = e._dispatchInstances.memoizedProps.value;
		var i = e._dispatchInstances.key;

		// adding/removing move from move list
		if(this.state.moveState[i]) {
			this.props.removeMoveFromList(this.props.pokemon, moveName);
		} else {
			if(this.props.pokemon.moveList.length >= 4) {
				return;
			}
			this.props.addMoveToList(this.props.pokemon, moveName);
		}

		// toggle active state
		
		let moveState = [...this.state.moveState];
		moveState[i] = !moveState[i];
		this.setState({ moveState });
	}

	componentWillMount() {
		this.setActive(this.state.moveState);
	}	

	render() {
		const { moves } = this.props;
		const moveList = moves.map( (move, i) => (
			<tr 
				className={this.state.moveState[i] ? "table-info" : null}
				value={move.name}
				onClick={this.handleClick}
				key={i}
			>
				<th scope="row"> {move.name} </th>
				<td> 2 </td>
				<td> 3 </td>
				<td> 4 </td>
				<td> 5 </td>
				<td> 6 </td>
				<td> 7 </td>
			</tr>
		));
		return (
			<tbody>
				{moveList}
			</tbody>
		)
	}
}

export default connect(null, { addMoveToList, removeMoveFromList })(MoveTableRow);