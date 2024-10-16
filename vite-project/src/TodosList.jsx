import { useState } from 'react';
import Todo from './Todo';
import './TodosList.css';

function TodosList() {
    const [todoName, setTodoName] = useState('');

    const [finishBy, setFinishBy] = useState('');

    const [todosList, setTodosList] = useState([
        {
            todo_name: "Do homework",
            isActive: true,
            isEditing: false,
            finishBy: "2024-31-12",
        }
    ]);


    const handleCreation = () => {
        if (todoName) {
            setTodosList(prevList => [...prevList, {todo_name: todoName, isActive: true, isEditing: false, finishBy: finishBy}]);
            setTodoName('');
            setFinishBy('');
        }
    };

    const handleDeletion = (todo) => {
        setTodosList(todosList.filter( (item) => item !== todo ));
    }

    const handleChecking = (todo) => {
        const updatedTodos = todosList.map((item) => item === todo ? {...item, isActive: !item.isActive} : item);
        setTodosList(updatedTodos);
    }

    const handleEditing = (todo) => {
        const updatedTodos = todosList.map((item) => item === todo ? {...item, isEditing: !item.isEditing} : item);
        setTodosList(updatedTodos);
    }

    const handleEditSubmit = (todo, newTodo) => {
        const updatedTodos = todosList.map((item) => item === todo ? {...item, todo_name: newTodo, isEditing: false} : item);
        setTodosList(updatedTodos)
    }

    return (
        <div className="todos_list">

            <div className='input_and_button'>
                <input
                    placeholder='Create todo'
                    value={todoName}
                    onChange={(e) => setTodoName(e.target.value)}
                />

                <input
                    placeholder='Finish by: yyyy-mm-dd'
                    value={finishBy}
                    onChange={(e) => setFinishBy(e.target.value)}
                 />
                <button onClick={handleCreation} className='create_btn'>Create</button>
            </div>

                {todosList.length === 0 ? 
                    <p>No Todos yet...</p> 
                : (
                    todosList.map((todo, index) => (
                        <Todo
                            key={index} 
                            todo={todo} 
                            onDelete={handleDeletion} 
                            onCheck={handleChecking} 
                            onEdit={handleEditing} 
                            onEditSubmit={handleEditSubmit}
                        />
                    ))
                  )
                }
        </div>
    )
}

export default TodosList;