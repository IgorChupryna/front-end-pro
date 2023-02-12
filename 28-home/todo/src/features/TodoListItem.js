import {useState} from "react";

const DELETE_BTN_CLASS = 'deleteBtn';
const UPDATE_BTN_CLASS = 'updateBtn';
const TODO_BTN_CLASS = 'btnTodo';

export default function TodoListItem({todo, onTodoRemove, onTodoEdit, onStatusEdit}) {
    const [isChecked, setChecked] = useState(todo.done);

    function onRemoveBtnClick() {
        onTodoRemove(todo.id);
    }

    function onEditBtnClick() {
        onTodoEdit(todo);
    }

    function onStatusClick() {
        setChecked(!isChecked);
        onStatusEdit(todo);
    }

    return (
        <tr>
            <td className={isChecked?'todoComplete':'todoNew'} onClick={onStatusClick}>
            </td>
            <td>
                {todo.text}
            </td>
            <td className={TODO_BTN_CLASS}>
                <button className={UPDATE_BTN_CLASS} onClick={onEditBtnClick}>Edit</button>
            </td>
            <td className={TODO_BTN_CLASS}>
                <button className={DELETE_BTN_CLASS} onClick={onRemoveBtnClick}>Remove</button>
            </td>
        </tr>
    );
}
