import React from "react";
import styles from "./Button.module.css";

class Button extends React.Component {
  render() {
    const { children, theme, ...restProps } = this.props;
    return (
      <button
        style={{ backgroundColor: theme.background, color: theme.foreground }}
        {...restProps}
      >
        {children}
      </button>
    );
  }
}

// class Button extends React.Component {
//   componentDidMount() {
//     console.log("mount", this.props.title);
//   }
//   componentWillUnmount() {
//     console.log("unmount", this.props.title);
//   }

//   render() {
//     const { children, title, onClick } = this.props;
//     return <button onClick={onClick}>{children}</button>;
//   }
// }

// function Button({ children, onClick }) {
//   return <button onClick={onClick}>{children}</button>;
// }

export default Button;
