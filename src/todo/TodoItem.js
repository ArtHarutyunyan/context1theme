import React from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends React.Component {
  render() {
    const {
      data: { id, value, completed },
      onRemove,
      onCheckChange,
      onEdit,
    } = this.props;
    return (
      <li
        className={`${completed ? styles.itemCompleted : ""}`}
        onClick={(e) => onCheckChange(id)}
      >
        {value}
        <button onClick={(e) => onEdit(e, id)}>edit</button>
        <button onClick={(e) => onRemove(e, id)}>delete</button>
      </li>
    );
  }
}

export default TodoItem;
