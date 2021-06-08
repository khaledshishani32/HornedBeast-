import React from "react";

import HornedBeast from "./HornedBeast";
import Data from "./Data.json";


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vote: 0
        }
    }

    giveVote = () => {
     
        this.setState({
           vote: this.state.vote
        })
    }




    render() {

        
        return (
            <div>
                {
                    Data.map((value) => {
                        return (
                            <div>

                                <HornedBeast

                                    title={value.title}
                                    giveVote={this.giveVote}
                                    img={value.image_url}
                                    description={value.description}

                                />
                            </div>

                        )
                    })
                }
            </div>

        );
    }
}


export default Main;