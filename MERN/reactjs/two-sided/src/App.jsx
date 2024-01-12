import { useState } from "react";
import Display from "./Display";

function App() {
  const [leftList, setLeftList] = useState(['Task1', 'Task2', 'Task3', 'Task4']);
  const [rightList, setRightList] = useState(['Task5', 'Task6']);

  const moveToLeft = (index) => {
    const data = rightList[index];
    const newRightList = [
      ...rightList
    ];
    newRightList.splice(index, 1);
    setRightList(newRightList);
    setLeftList([
      ...leftList,
      data
    ])
  }
  const moveToRight = (index) => {
    const data = leftList[index];
    const newLeftList = [
      ...leftList
    ];
    newLeftList.splice(index, 1);
    setLeftList(newLeftList);
    setRightList([
      ...rightList,
      data
    ])
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <input type="text" className="form-control" />
        </div>
        <button className="btn btn-primary col-3">Add</button>
      </div>
      <div className="row">
        <Display title="Left List" handler={moveToRight} data={leftList} color="black" />
        <Display title="Right List" handler={moveToLeft} data={rightList} color="red" />
      </div>
    </div>
  );
}

export default App;
