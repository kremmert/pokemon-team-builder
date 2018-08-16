import React from "react";
import { connect } from "react-redux";
import { TypeArray } from "../services/moveTypes";
import { createResistances } from "../services/typeResistances";

// const Type = (type, i) => {
// 	return <img src={getType(type.typeName)} alt={capitalize(type.typeName)} key={type.typeName} />
// }

class TypeResistances extends React.Component {
	render() {
		const teamTypes = createResistances(this.props.types);
		return (
			<table className="table table-bordered table-sm table-hover typeList">
				<caption className="typeCaption"> Type Resistances </caption>
				<TypeTableHeader />
				<TypeTableBody teamTypes={teamTypes} />
			</table>
		)
	}
}

const TypeTableHeader = () => {
	return (
		<thead>
			<tr>
				<th scope="col"> Type </th>
				<th scope="col"> 0 </th>
				<th scope="col"> 1/4x </th>
				<th scope="col"> 1/2x </th>
				<th scope="col"> 2x </th>
				<th scope="col"> 4x </th>
			</tr>
		</thead>
	)
}

const TypeTableBody = (teamTypes) => {
	const typeNums = Object.values(teamTypes.teamTypes);
	debugger
	const typeRows = TypeArray.map(function(type, i) {
		createRows(type, i, typeNums[i]);
	})
	return (
		<tbody>
			{typeRows}
		</tbody>
	)
}

function createRows(type, i, numbers) {
	return <TypeTableRow type={type} key={i} numbers={numbers} />
}

const TypeTableRow = (typeImg, numbers) => {
	console.log(numbers);
	debugger
	return (
		<tr>
			<th> <img src={typeImg.type} alt="Type" /> </th>
			<td> {numbers.immune} </td>
			<td> {numbers.fourth} </td>
			<td> {numbers.half} </td>
			<td> {numbers.double} </td>
			<td> {numbers.quad} </td>
		</tr>
	)
}

function mapStateToProps(state) {
	return {
		types: state.pokemon.teamTypes
	}
}

export default connect(mapStateToProps, null)(TypeResistances);