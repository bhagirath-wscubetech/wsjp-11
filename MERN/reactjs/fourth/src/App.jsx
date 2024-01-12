import React, { useEffect, useState } from 'react';
import Input from './Input';
import Display from './Display';

const App = () => {
  const [items, setItem] = useState([]);
  const itemHandler = (data) => {
    const newArr = [
      ...items,
      data
    ]
    setItem(newArr);
  }

  const removeHandler = (index) => {
    if (items.length == 1) {
      localStorage.removeItem("items");
    }
    const newData = items.filter(
      (d, i) => {
        if (i == index) return false;
        else return true;
      }
    )
    setItem(newData); // state change -> componenet re-render
  }
  // ["Task1","Task2"]
  useEffect(
    () => {
      if (items.length != 0) {
        const data = JSON.stringify(items);
        localStorage.setItem("items", data);
      }
    },
    [items]
  )
  // first render and items change

  useEffect(
    () => {
      // ls to state
      const lsItems = localStorage.getItem("items");
      if (lsItems != null) {
        const data = JSON.parse(lsItems);
        setItem(data);
      }
    },
    []
  )

  return (
    <div className='container'>
      <Input handler={itemHandler} />
      <Display items={items} removeHandler={removeHandler} />
    </div>
  );
}

export default App;

