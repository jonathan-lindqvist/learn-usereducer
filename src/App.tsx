import React, {useReducer, useState} from 'react';
import './App.css';

interface ITodo {
  text: string,
  completed: boolean
}

interface IState {
  todos: [ITodo]|[]|any, //CANT MAP OVER EMPTY ARRAY??!?!?!?!?!?!? TOOD: FIX.........
  todoCount:number,
}

interface IAction {
  type: string,
  payload: string | number,
}


const reducer = (state:IState, action:IAction) => {
  switch(action.type){
    case 'add-todo':
      return {
        todos: [...state.todos, {text: action.payload, completed: false}],
        todoCount: state.todoCount + 1
      }
    case 'toggle-todo':
      return {
        todos: state.todos.map((t:ITodo, index:number) => (
          index === action.payload ? {...t, completed: !t.completed} : t
        )), 
        todoCount: state.todoCount
      }
    default:
      return state
  }
}

const App: React.FC = () => {
  const [{todos, todoCount}, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0
  })
  const [text, setText] = useState()

  return (
    <div className="App">
      <h1>Hello world</h1>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch({type: 'add-todo', payload: text})
        setText("")
      }}>
        <input value={text} onChange={e => setText(e.target.value)}/>
      </form>
    <div>number of todos: {todoCount}</div>
      {todos.map((t:ITodo, index:number) => (
        <div 
          key={index} 
          onClick={() => dispatch({type: 'toggle-todo', payload: index})}
          style={{
            textDecoration: t.completed ? "line-through" : ""
          }}
          >{t.text}</div>
      ))}
    </div>
  );
}

export default App;
