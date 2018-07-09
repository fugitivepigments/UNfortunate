import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import { Input, FormBtn } from "../../components/Form";

class CreateFortune extends Component {
    state = {
        fortunes: []
    };
    componentDidMount () {
        this.loadFortune();
    };
    loadFortune = () => {
        API.getFortune()
        .then(res => this.setState({ fortune: res.data}))
        .catch(err=> console.log(err));
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
    render () {
        return (
          <div>
            <div>
                <NavBar />

            </div>
            <div>
            <p className="App-title">Create your own...
            </p>
            <form>
            <Input
              value={this.state.fortune}
              onChange={this.handleInputChange}
              name="fortune"
              placeholder="Some cynical wit (required)"
              />
            <FormBtn
              disabled={!(this.state.fortune)}
              onClick={this.handleFormSubmit}
              >
                Submit Fortune
              </FormBtn>
          </form>
            </div>
          <Footer />
          </div>
        );
    }
}
export default CreateFortune;
