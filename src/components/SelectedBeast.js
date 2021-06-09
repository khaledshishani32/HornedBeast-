import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



export class SelectedBeast extends Component {
    render() {
        return (
            <Modal show={this.props.show}>
                <Modal.Header >
                    <Modal.Title>{this.props.selectePros.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img onClick={this.requestVote} variant="top" style={{ width: "200px", height: "200px" }} src={this.props.selectePros.img} alt={this.props.selectePros.title} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                {this.props.selectePros.description}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.displayModal}>Close</Button>
                   
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SelectedBeast;
