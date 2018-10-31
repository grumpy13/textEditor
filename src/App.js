import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      fontWeight: "",
      fontStyle: "",
      textDecorationLine: ""
    };
  }
  changeColor(color) {
    this.setState({ color: color });
  }

  italic() {
    if (!this.state.fontStyle) {
      this.setState({ fontStyle: "italic" });
    } else {
      this.setState({ fontStyle: "" });
    }
  }

  bold() {
    if (!this.state.fontWeight) {
      this.setState({ fontWeight: "bold" });
    } else {
      this.setState({ fontWeight: "" });
    }
  }

  underline() {
    if (!this.state.textDecorationLine) {
      this.setState({ textDecorationLine: "underline" });
    } else {
      this.setState({ textDecorationLine: "" });
    }
  }

  render() {
    let stylings = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = stylings.map(style => {
      return (
        <button style={styles[style]} key={style} onClick={() => this[style]()}>
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          onClick={() => this.changeColor(color)}
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
        />
      );
    });

    return (
      <div className="App">
        <br />
        {stylingBoxes}
        <br />
        <br />
        <textarea style={this.state} />
        <br />
        {colorBoxes}
      </div>
    );
  }
}

export default App;
