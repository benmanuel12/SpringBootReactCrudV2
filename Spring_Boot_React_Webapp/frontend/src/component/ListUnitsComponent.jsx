import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import UnitDataService from '../service/UnitDataService';

function ListUnitsComponent() {
    const [units, setUnits] = useState([])
    const [message, setMessage] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        refreshUnits()
    }, [])

    function refreshUnits() {
        UnitDataService.retrieveAllUnits()
            .then(response => setUnits(response.data))
    }

    function deleteUnitClicked(id) {
        UnitDataService.deleteUnit(id)
            .then(() => {
                setMessage(`Delete of unit ${id} Successful`)
                refreshUnits()
            })
    }

    function addUnitClicked() {
        navigate(`/units/-1`)
    }

    function updateUnitClicked(id) {
        navigate(`/units/${id}`)
    }

    return (
        <div className="container">
            <h3>All Units</h3>
            {message && <div className="alert alert-success">{message}</div>}
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
                            units.map(
                                unit =>
                                    <tr key={unit.id}>
                                        <td>{unit.id}</td>
                                        <td>{unit.name}</td>
                                        <td><button className="btn btn-success" onClick={() => updateUnitClicked(unit.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => deleteUnitClicked(unit.id)}>Delete</button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={addUnitClicked}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default ListUnitsComponent
