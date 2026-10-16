import React, { Component } from 'react';
import ListUnitsComponent from './ListUnitsComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import UnitComponent from './UnitComponent';

class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Unit Tracker</h1>
                    <Routes>
                        <Route path="/" element={<ListUnitsComponent />} />
                        <Route path="/units" element={<ListUnitsComponent />} />
                        <Route path="/units/:id" element={<UnitComponent />} />
                    </Routes>
                </>
            </Router>
        )
    }
}

export default InstructorApp
