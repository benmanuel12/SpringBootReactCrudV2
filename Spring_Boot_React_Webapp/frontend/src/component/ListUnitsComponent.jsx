import React, { Component } from 'react'
import UnitDataService from '../service/UnitDataService';

class ListUnitsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            units: [],
            message: null
        }
        this.deleteUnitClicked = this.deleteUnitClicked.bind(this)
        this.updateUnitClicked = this.updateUnitClicked.bind(this)
        this.addUnitClicked = this.addUnitClicked.bind(this)
        this.refreshUnits = this.refreshUnits.bind(this)
    }

    componentDidMount() {
        this.refreshUnits();
    }

    refreshUnits() {
        UnitDataService.retrieveAllUnits()//HARDCODED
            .then(
                response => {
                    //console.log(response);
                    this.setState({ units: response.data })
                }
            )
    }

    deleteUnitClicked(id) {
        UnitDataService.deleteUnit(id)
            .then(
                response => {
                    this.setState({ message: `Delete of unit ${id} Successful` })
                    this.refreshUnits()
                }
            )
    }

    addUnitClicked() {
        this.props.history.push(`/units/-1`)
    }

    updateUnitClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/units/${id}`)
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>All Units</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.units.map(
                                    unit =>
                                        <tr key={unit.id}>
                                            <td>{unit.id}</td>
                                            <td>{unit.name}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateUnitClicked(unit.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteUnitClicked(unit.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addUnitClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListUnitsComponent