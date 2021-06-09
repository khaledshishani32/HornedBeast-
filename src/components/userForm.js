import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

export class userForm extends Component {

 





    render() {
        return (
            <Form>


                <FloatingLabel controlId="floatingSelect" label="Works with selects">
                    <Form.Select aria-label="Floating label select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FloatingLabel>
            </Form>
        )
    }
}

export default userForm
