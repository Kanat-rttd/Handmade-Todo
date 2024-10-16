import { useRef, useState } from 'react';
import './Input.css';

function Input() {
    const [todo, setTodo] = useState();
    // const todoRef = useRef();

    return(
        <div className='input_and_button'>
          <input 
            placeholder='Create todo'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className='create_btn'>Create</button>
          <h1>{todo}</h1>
        </div>
    );
}

export default Input;