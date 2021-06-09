
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Data from "./components/Data.json";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import userForm from "./components/userForm"





class App extends React.Component {

  constructor(props){

    super(props)

    this.state ={
      show: false,
      selectePros :{}

     
    }
  };
    displayModal =(prevProps)=>{
      this.setState({
        show: !this.state.show,
        selectePros : prevProps
      })
    }

      render(){
        return (
          <div >
           <Header />
           <userForm />
           <Main 
               Data={Data}
               displayModal={this.displayModal}
               />
               <SelectedBeast 
                show={this.state.show}
                selectePros={this.state.selectePros}

               />
           <Footer />
          </div>
        );
      }
 
}
export default App ;
