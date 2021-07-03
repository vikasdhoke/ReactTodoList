import React, { useState } from 'react';
import Todolist from './Todolist';

const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value)
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]

    });
    setInputList("");

  }

  const deleteItem = (id) => {
    console.log("item deleted")
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input type="text" placeholder="add a item" 
            value={inputList}
            onChange={itemEvent}            
             />
          <button onClick={listOfItems} >+</button>
          <ol>
            {/* <li>{inputList}</li> */}

            {items.map((itemval, index) => {
              return <Todolist
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItem}
              />
            })
            }
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;