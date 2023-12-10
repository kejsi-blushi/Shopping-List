import React, { useState } from "react";
import "./App.css"; // Assuming you have a corresponding CSS file

function App() {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([
    "Notebook",
    "Jelly",
    "Spinach",
    "Rice",
    "Birthday cake",
    "Candles",
  ]);

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const addListAfterClick = () => {
    if (inputValue.trim() !== "") {
      setListItems((prevItems) => [...prevItems, inputValue]);
      setInputValue("");
    }
  };

  const addDeleteButton = (item, index) => {
    const deleteHandler = () => {
      setListItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems.splice(index, 1);
        return updatedItems;
      });
    };

    return (
      <button className="delete" onClick={deleteHandler}>
        Delete
      </button>
    );
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Enter Items"
          value={inputValue}
          onChange={inputChangeHandler}
        />
        <button className="button" onClick={addListAfterClick}>
          Enter
        </button>
      </div>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            {item}
            {addDeleteButton(item, index)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
