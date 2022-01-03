import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import { useState, useRef } from "react";

function App() {
  const [ todoList, setTodoList ] = useState([]);
  const [ desc , setDesc ] = useState("");
  const idNum = useRef(1);

  function onChange(e) {
    const inputValue = e.target.value;
    setDesc(inputValue);
  }

  const GlobalStyle = createGlobalStyle`
    body {
      background: #e9ecef;
    }
  `;
  return (
    <div className="App">
      <div><h1>안녕하세요</h1></div>
      <GlobalStyle/>
      <TodoTemplate>
        <TodoHeader />
        <TodoList />
        <TodoInsert />
      </TodoTemplate>
    </div>
  );
}

export default App;
