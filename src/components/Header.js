import React from "react";
import Button from "./Button";
import Section from "./Section";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <Section>
        <div>
          Header<Button className="black_button">Login</Button>
        </div>
      </Section>
    );
  }
}

export default Header;
