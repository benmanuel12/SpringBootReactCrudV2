import React, { Component } from 'react';
import ListUnitsComponent from './ListUnitsComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UnitComponent from './UnitComponent';

class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Instructor Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListUnitsComponent} />
                        <Route path="/units" exact component={ListUnitsComponent} />
                        <Route path="/units/:id" component={UnitComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default InstructorApp