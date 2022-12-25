import React from "react";
import "../App.css";

// class Section extends React.Component {
//   render() {
//     return <div className="Section">{this.props.children}</div>;
//   }
// }

function Section({ children }) {
  return <div className="Section">{children}</div>;
}

export default Section;
