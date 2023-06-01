import {useState, React } from 'react';
import { FaPlusCircle } from "react-icons/fa"

function InputTodo({addTodoItem}) {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input 
        type='text'
        value={title}
        placeholder='add todo'
        onChange={handleChange}
        className="input-text"
        />
        <button  className="input-submit">
          <FaPlusCircle 
            color="#5e5e5e"
            size="20px"
            className="submit-icon"
          />
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>

  )
}

export default InputTodo;