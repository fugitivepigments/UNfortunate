import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import BrokenCookie from "../../components/BrokenCookie";
import SaveButton from "../../components/SaveButton";
import SendButton from "../../components/SendButton";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import {Link} from "react-router-dom";

class FortuneID extends Component {
  state = {
    fortunes: [{}],
    fortune: "",
  };

  componentDidMount() {
    this.loadFortune();
  }

  loadFortune = () => {
    API.getFortune()
      .then(res =>{
        console.log(res.data)
        this.setState({ fortune: res.data.fortune })
      })
      .catch(err => console.log("problem with API call getFortune"));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.fortune) {
      API.saveFortune({
        fortune: this.state.fortune
      })
        .then(res => this.loadFortune())
        .catch(err => console.log(err));
    }
  };

    render() {
        return (
          <div>
            <div className="App">
              <NavBar />
                <p className="App-title"></p>
                <Link to ="/Home">
                <BrokenCookie fortune={this.state.fortune}/>
                </Link>
                <SaveButton />
                <SendButton />
              <div>
                <Footer />
              </div>
            </div>
         </div>

        );
      }
    }

export default FortuneID;