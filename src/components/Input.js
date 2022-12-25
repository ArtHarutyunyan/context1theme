import React from "react";

class Input extends React.Component {
  render() {
    const { ...restProps } = this.props;
    return <input {...restProps} />;
  }
}

export default Input;
