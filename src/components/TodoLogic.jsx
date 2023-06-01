import { useState, useEffect, React } from "react";
import TodoList from "./TodoList";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

function TodoLogic() {
  const [todos, setTodos ] = useState(getInitialTodos());

  useEffect(()=> {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos])
  
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const setUpdate = (updatedTitle, id) => {
    // update state
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  }

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleChange = (id) => {
    setTodos((prevState) => 
      prevState.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    )
  }

  return (
    <div>
        <InputTodo addTodoItem={addTodoItem}/>
        <TodoList todosProp ={todos} setUpdate={setUpdate} handleChange={handleChange} delTodo={delTodo} />
    </div>
  )
}

export default TodoLogic;