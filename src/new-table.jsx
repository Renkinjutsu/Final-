import React, { Component } from 'react'

class NewTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: false,
			newTable: {
				tableName: "",
				cols: 0,
				rows: 0
			}
		}
	}

	handleClick = (e) => {
		e.preventDefault();
		this.setState(prevState => ({
			visible: !prevState.visible
		}))
	}

	handleChange = (property, event) => {
		const newTable = {...this.state.newTable};
		newTable[property] = event.target.value;
		this.setState({newTable})
	}

	handleSubmission = (e) => {
		e.preventDefault();
		this.props.renderNewTable(this.state.newTable)
		this.setState(prevState => ({
			visible: !prevState.visible
		}))
	}


	render() {
		return (
			<div>
				<button type="button" className="button is-pulled-right is-dark is-normal" onClick={this.handleClick}><i className="fas fa-table"></i>Create Table</button>
				{
					this.state.visible &&
				// create table popup
				<div className={this.state.visible ? "modal is-active" : null}>
					<div className="modal-background"></div>
					<div className="modal-card">
						<header className="modal-card-title">
							<button className="delete" aria-label="close" onClick={this.handleClick}></button>
						</header>
						<section className="modal-card-body">
							<form onSubmit={this.handleSubmission}>
								<table className="table is-striped is-narrow is-bordered">
									<tbody>
										<tr>
											<td className="header-row"><p>Table name:</p></td>
											<td className="data-row"><input type="text" value={this.state.newTable.tableName} onChange={this.handleChange.bind(this, "tableName")} className="input"/></td>
										</tr>
										<tr>
											<td className="header-row"><p>Columns:</p></td>
											<td className="data-row"><input type="number" value={this.state.newTable.cols} onChange={this.handleChange.bind(this, "cols")} placeholder="#" className="input"/></td>
										</tr>
										<tr>
											<td className="header-row"><p>Rows:</p></td>
											<td className="data-row"><input type="number" value={this.state.newTable.rows} onChange={this.handleChange.bind(this, "rows")} placeholder="#" className="input"/></td>
										</tr>
										<tr>
											<td colSpan="2"><button type="submit" className="button is-paddingless is-pulled-right is-dark is-normal">Create</button></td>
										</tr>
									</tbody>
								</table>
							</form>
						</section>
					</div>
				</div>
				}
			</div>
		)
	}
}

 export default NewTable