import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

export class userForm extends Component {
    
    constructor(props){
        super(props);
        this.state={
            horns : ''
        }
    }

     
    updateHorns (e) => 
        this.setState({
         horns : e.target.value
        });
    }


    render() {
        return (
            <div>
                <Form>

                
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </Form>
            </div>
        )
    }
}

export default userForm
