import './TodosList.css';
import { useState } from 'react';
import { faCheck, faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Todo({todo, onDelete, onCheck, onEdit, onEditSubmit}) {
    const [date, setDate] = useState(() => {
        const date = new Date();
        const month = (date.getMonth()+1).toString();
        const day = date.getDate().toString();
        return `${date.getFullYear()}-${month.length === 2 ? month : `0${month}` }-${day.length === 2 ? day : `0${day}`}`
    });

    const [editForm, setEditForm] = useState(todo.todo_name);

    return (
        <div className={todo.isActive === false ? "todo_finished" : "todo"}>
            <div className='todo_name'>
                {todo.isEditing === false ? 
                    <p><span>Task: {todo.todo_name}</span></p>
                 : <div className='edit_form'>
                    <input value={editForm} onChange={(e) => setEditForm(e.target.value)}/>
                    <button onClick={() => onEditSubmit(todo, editForm)}>Change</button>
                   </div>
                }

                {todo.isActive === false ? 
                    <p>Finished</p>
                : <div className='dates'>
                    <p>Created at: {date} </p>
                    <p>Finish by: {todo.finishBy}</p>
                </div>
                }
            </div>

            <div className='icons'>
                <FontAwesomeIcon icon={faTrashCan} onClick={ () => onDelete(todo)} className='trash'/>
                <FontAwesomeIcon icon={faEdit} onClick={ () => onEdit(todo)} className={todo.isActive === true ? "edit" : "edit disabled"}/>
                <FontAwesomeIcon icon={faCheck} onClick={ () => onCheck(todo)} className={todo.isEditing === false ? "checked" : "checked disabled"}/>
            </div>
        </div>
    )
}

export default Todo;