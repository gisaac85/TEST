import React from "react";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      initName: "InitialValue"
    };
  }

  onChangeName(newName) {
    this.setState({
      initName: newName
    });
  }

  render() {
    return (
      <div className='App'>
        <div>
          <h2> 2 way Data-Binding</h2>
        </div>

        <Header initName={this.state.initName} />

        <Body
          changeName={this.onChangeName.bind(this)}
          initName={this.state.initName}
        />
      </div>

    );
  }
};
export default App;
