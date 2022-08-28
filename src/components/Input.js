import React from "react";
import "../styles/input.css";

class Input extends React.Component {
  render() {
    return (
      <input
        className='input'
        type='text'
        value={this.props.value}
        placeholder={this.props.placeholder}
        onchange={this.props.onChange}
      />
    );
  }
}

export { Input };
