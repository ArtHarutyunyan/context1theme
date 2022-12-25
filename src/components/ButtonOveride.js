import React from "react";
import styles from "./ButtonOveride.module.css";

class ButtonOveride extends React.Component {
  render() {
    const { children, variant, ...restProps } = this.props;
    console.log("ButtonOveride", styles);
    return (
      <button className={styles.primary_button} {...restProps}>
        {children}
      </button>
    );
  }
}

export default ButtonOveride;
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
