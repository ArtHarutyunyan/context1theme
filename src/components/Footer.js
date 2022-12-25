import React from "react";
import Button from "./Button";
import Section from "./Section";

class Footer extends React.Component {
  render() {
    return (
      <Section>
        <div>
          Footer<Button variant="secondary">Logout</Button>
        </div>
      </Section>
    );
  }
}

export default Footer;
