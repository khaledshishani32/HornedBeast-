import React from "react";



class Footer extends React.Component{

    render(){
        const myName = "khaled";
        return(
            <div>
                <footer>
                <p>The author {myName}</p>
                </footer>
            </div>
        );
    }
}

export default Footer;