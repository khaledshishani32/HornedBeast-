import React from "react";



class HornedBeast extends React.Component {

  constructor(props) {
    // we are passing the props object as an argument to our parent React Component Class 
    super(props)

    // a react standard of saving information related to the class component
    // we call those information as states (conditions) to describe the state/ condition of the component.
    this.state = {
        childName: this.props.name,
        vote: 0
    }
}

requestVote = () => {
    // the request money child function will be invoking or calling the passed giveMoney function from the parent component
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