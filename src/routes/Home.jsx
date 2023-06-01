import React from 'react';
import TodoLogic from "../components/TodoLogic";


function Home() {
    return (
          <div className="todo">
            <h1 style={{
            padding: '20px 0',
            lineHeight: '1.5em',
            color: '#aeadad',
            textAlign: 'center',
          }}>Todos</h1>
            <TodoLogic />
          </div>
      );
}

export default Home