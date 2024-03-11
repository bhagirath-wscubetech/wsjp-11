import { useSelector, useDispatch } from "react-redux";
import { inc, desc } from "./reducers/counter";
import Display from "./Display";

function App() {
  const dispatcher = useDispatch();
  const counter = useSelector(store => store.counter);
  return (
    <div className="text-center">
      <Display />
      <div> ₹ {counter.price}</div>
      <button className="p-2 border" onClick={() => dispatcher(inc())}>Inc</button>
      <button className="p-2 border" onClick={() => dispatcher(desc())}>Desc</button>
    </div>
  );
}

export default App;
