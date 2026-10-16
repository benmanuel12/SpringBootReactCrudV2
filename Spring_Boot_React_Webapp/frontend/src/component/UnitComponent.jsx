import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UnitDataService from '../service/UnitDataService';

function UnitComponent() {
    // The id comes from the URL as a string, so "-1" means a new unit
    const { id } = useParams()
    const isNew = id === '-1'
    const [name, setName] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        setName('')
        if (isNew) {
            return
        }

        // Ignore a response that arrives after the id has changed or the page has closed
        let ignore = false
        UnitDataService.retrieveUnit(id)
            .then(response => {
                if (!ignore) {
                    setName(response.data.name)
                }
            })
        return () => { ignore = true }
    }, [id, isNew])

    function validate(values) {
        let errors = {}
        if (!values.name) {
            errors.name = 'Enter a name'
            alert("Name cannot be empty")
        }

        return errors
    }

    function onSubmit(values) {
        // A new unit has no id yet, so the database generates one
        let unit = isNew
            ? { name: values.name }
            : { id: id, name: values.name }

        if (isNew) {
            UnitDataService.createUnit(unit)
                .then(() => navigate('/units'))
        } else {
            UnitDataService.updateUnit(id, unit)
                .then(() => navigate('/units'))
        }
    }

    return (
        <div>
            <h3>Unit</h3>
            <div className="container">
                <Formik
                    enableReinitialize={true}
                    initialValues={{ id: isNew ? '' : id, name }}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={validate}
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

export default UnitComponent
