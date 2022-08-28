import React from "react";
import "../styles/section.css";

class Section extends React.Component {
  render() {
    return (
      <div className='section-main'>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

export { Section };
