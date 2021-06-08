import React from "react";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
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
      // <div>

      //   <div>
      //     <h2>{this.props.title}</h2>
      //     <p>⭐{this.state.vote}</p>
      //     <img onClick={this.requestVote} style={{ width: "200px", height: "200px" }} src={this.props.img} alt={this.props.title} ></img>
      //     <p>{this.props.description}</p>
      //   </div>


      // </div>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img onClick={this.requestVote}  variant="top" style={{ width: "200px", height: "200px" }} src={this.props.img} />
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

      //   <Row xs={1} md={4} className="g-4">
      //   {Array.from({ length: 4 }).map((_, idx) => (
      //     <Col>
      //       <Card>
      //         <Card.Img variant="top"  style={{ width: "200px", height: "200px" }} src={this.props.img} />
      //         <Card.Body>
      //           <Card.Title>{this.props.title}</Card.Title>
      //           <Card.Text>
      //           {this.props.description}
      //           </Card.Text>
      //         </Card.Body>
      //       </Card>
      //     </Col>
      //   ))}
      // </Row>

    )

  }
}

export default HornedBeast;