import logo from "./logo.svg";
import React, { useCallback, useState } from "react";
import "./App.css";
import "./components/Button.module.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Input from "./components/Input";
import ButtonOveride from "./components/ButtonOveride";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./todo/TodoItem";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditDialog from "./components/dialog/EditDialog";
import DeleteDialog from "./components/dialog/DeleteDialog";
import { ReactDOM } from "react";

import { ThemeContext, themes } from "./themeContext";
import ThemedButton from "./ThemedButton";
import Toolbar from "./Toolbar";

// An intermediate component that uses the ThemedButton

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <ThemedButton>Static</ThemedButton>
      </>
    );
  }
}

export default App;

// function App() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }

// function App() {
//   const [name, setName] = useState("Robert");
//   const [surname, setSurname] = useState("Rostomyan");

//   const sayHi = useCallback(() => {
//     console.log(name + " " + surname);
//   }, [name]);

//   return (
//     <>
//       <button onClick={() => setSurname("Sargsyan")}>Change surname</button>
//       <button onClick={sayHi}>Print fullname</button>
//       <button onClick={() => setName("Karen")}>Change name</button>
//       <button onClick={sayHi}>Print fullname</button>
//     </>
//   );
// }
// function App() {
//   const [value, setValue] = useState("");
//   const [items, setItems] = useState([]);
//   const [itemToDelete, setItemToDelete] = useState(null);
//   const [editedItem, setEditedItem] = useState(null);

//   const onChange = (event) => {
//     setValue(event.target.value);
//   };

//   const onAddClick = () => {
//     const newItem = { value, id: uuidv4(), completed: false };
//     setItems([...items, newItem]);
//     setValue("");
//   };

//   const onCheckChange = (id) => {
//     setItems(
//       items.map((item) => {
//         if (item.id !== id) {
//           return item;
//         }
//         return {
//           ...item,
//           completed: !item.completed,
//         };
//       })
//     );
//   };

//   const onRemove = (e, id) => {
//     e.stopPropagation();
//     setItems(items.find((item) => item.id === id));
//   };

//   const onEdit = (e, id) => {
//     e.stopPropagation();
//     setEditedItem(items.find((item) => item.id === id));
//   };

//   const handleClose = () => {
//     setEditedItem(null);
//   };

//   const handleDeleteDialogClose = () => {
//     setItemToDelete(null);
//   };

//   const handleSave = (newValue) => {
//     setItems(
//       items.map((item) => {
//         if (item.id !== editedItem.id) {
//           return item;
//         }
//         return {
//           ...item,
//           value: newValue,
//         };
//       })
//     );
//     setEditedItem(null);
//   };

//   const handleDelete = () => {
//     setItems(
//       items.filter((item) => {
//         return item.id !== itemToDelete.id;
//       })
//     );
//     setItemToDelete(null);
//   };

//   return (
//     <div className="App">
//       <div> 00 </div>
//       <div>
//         <TextField
//           label="Todo"
//           variant="outlined"
//           value={value}
//           onChange={onChange}
//         />

//         <Button onClick={onAddClick} variant="contained">
//           Add
//         </Button>
//       </div>

//       <ul>
//         {items.map((elem) => (
//           <TodoItem
//             key={elem.id}
//             data={elem}
//             onCheckChange={onCheckChange}
//             onRemove={onRemove}
//             onEdit={onEdit}
//           />
//         ))}
//       </ul>
//       {!!editedItem && (
//         <EditDialog
//           onClose={handleClose}
//           onSave={handleSave}
//           data={editedItem}
//         />
//       )}
//       {!!itemToDelete && (
//         <DeleteDialog
//           onClose={handleDeleteDialogClose}
//           onRemove={handleDelete}
//           date={itemToDelete}
//         />
//       )}
//     </div>
//   );
// }

//   render() {
//     return (
//       <div className="App">
//         <Input
//           placeholder="email"
//           value={this.state.email}
//           onChange={this.onEmailChange}
//         />
//         <Input
//           type="password"
//           placeholder="password"
//           value={this.state.password}
//           onChange={this.onPasswordChange}
//         />
//         <Button
//           disabled={
//             this.state.email.length < 2 || this.state.password.length < 2
//           }
//           onClick={() => {
//             console.log(1000);
//           }}
//           variant="primary"
//         >
//           Login
//         </Button>
//         <ButtonOveride>Logout</ButtonOveride>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   state = {
//     value: 0,
//   };

//   onIncrement = (event) => {
//     this.setState({ value: this.state.value + 1 });
//   };

//   onDecrement = (event) => {
//     this.setState({ value: this.state.value - 1 });
//   };

//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Section>
//           <Button onClick={this.onIncrement}>Plus</Button>
//           <Button onClick={this.onDecrement}>Minus</Button>
//           <span>{this.state.value}</span>
//         </Section>
//         {this.state.value === 10 && <Button>Logout</Button>}
//         {this.state.value === 5 ? <Button title="barev">Logout</Button> : null}

//         <Footer />
//       </div>
//     );
//   }
// }
