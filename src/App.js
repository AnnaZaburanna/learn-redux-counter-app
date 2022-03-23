import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, reset, changeCount} from "./actions/action";
import {useState} from "react";

function App() {
    const [countChange, setCountChange] = useState('');
    const handleChange = (e) => {
        const {value} = e.target;
        setCountChange(parseInt(value, 0))
    }
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter</h1>
        <h3>count: {counter}</h3>
        <button onClick={() => dispatch(increment())}>INCREMENT</button>
        <button onClick={() => dispatch(decrement())}>DECREMENT</button>
        <button onClick={() => dispatch(reset())}>RESET</button>
        <br/>
        <input type="string"
               value={countChange}
               onChange={(e ) => handleChange(e)}
        />
        <button onClick={() => dispatch(changeCount(countChange))}>CHANGE COUNT</button>
    </div>
  );
}

export default App;
