import React from "react";
import Card from 'react-bootstrap/Card';
import SelectedBeast from "./SelectedBeast";





class HornedBeast extends React.Component {

  constructor(props) {

    super(props)

    this.state = {

      vote: 0
    }
  }

  requestVote = () => {

    this.props.giveVote();
    let tempValue = this.state.vote;
    this.setState({
      vote: tempValue += 1
    })
  }



  render() {
    return (

      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img onClick={() =>{
             this.requestVote();
             this.props.displayModal(this.props);
          }}  variant="top" style={{ width: "200px", height: "200px" }} src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              ⭐ {this.state.vote}
            </Card.Text>
          </Card.Body>
        </Card>




      </div>


    )

  }
}

export default HornedBeast;