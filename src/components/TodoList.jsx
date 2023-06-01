import React from 'react';
import TodoItems from './TodoItems';

function TodoList( { todosProp, handleChange, delTodo, setUpdate } ) {
  return (
    <ul>
        {todosProp.map((todo) => (
            <TodoItems 
            key={todo.id}
            itemProp={todo}
            handleChange={handleChange}
            delTodo={delTodo}
            setUpdate={setUpdate}
            />
        ))}
    </ul>
  )
}

export default TodoList;