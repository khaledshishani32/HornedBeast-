import React from "react";



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

        <div>
          <h2>{this.props.title}</h2>
          <p>⭐{this.state.vote}</p>
          <img onClick={this.requestVote} style={{ width: "200px", height: "200px" }} src={this.props.img} alt={this.props.title} ></img>
          <p>{this.props.description}</p>
        </div>


      </div>

    )

  }
}

export default HornedBeast;