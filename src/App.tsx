import React, {useReducer} from 'react';
import './App.css';


const reducer = (state:number, action:any) => {
  switch(action.type){
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    default:
      return state
  }
}

const App: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div className="App">
      <h1>Hello world</h1>
      <div>Count: {count}</div>
      <button onClick={() => dispatch({type: 'INC'})}>Increment</button>
      <button onClick={() => dispatch({type: 'DEC'})}>Decrement</button>
    </div>
  );
}

export default App;
