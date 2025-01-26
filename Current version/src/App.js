import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Lessons from "./components/Lessons";
import Reviews from "./components/Reviews";
import data from "./data.json";

class App extends Component {
  componentWillMount() {
    this.setState({ data: data });
  }
  render() {
    return (
      <div className="App">
        <Header data={this.state.data.main} />
        <About data={this.state.data.main} />
        <Lessons />
        <Reviews data={this.state.data.reviews}/>
        <Contact />
        <Footer data={this.state.data.main} />
      </div>
    );
  }
}

export default App;
