import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UnitDataService from '../service/UnitDataService';

class UnitComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        UnitDataService.retrieveUnit(this.state.id)
            .then(response => this.setState({
                name: response.data.name
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.name) {
            errors.name = 'Enter a name'
            alert("Name cannot be empty")
        }

        return errors

    }

    onSubmit(values) {

        let unit = {
            id: this.state.id,
            name: values.name,
        }

        if (this.state.id === -1) {
            UnitDataService.createUnit(unit)
                .then(() => this.props.history.push('/units'))
        } else {
            UnitDataService.updateUnit(this.state.id, unit)
                .then(() => this.props.history.push('/units'))
        }

        console.log(values);
    }

    render() {

        let { id, name } = this.state

        return (
            <div>
                <h3>Unit</h3>
                <div className="container">
                    <Formik
                        enableReinitialize={true}
                        initialValues={{ id, name }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                    >
                        {
                            () => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default UnitComponent