import {useEffect, useState} from "react";
import {useDispatch} from 'react-redux'
import {doneRequest, edit, removeRequest} from '../../store/actions/todo'

const DELETE_BTN_CLASS = 'deleteBtn';
const UPDATE_BTN_CLASS = 'updateBtn';
const TODO_BTN_CLASS = 'btnTodo';

export default function TodoListItem({todo}) {
    const [isChecked, setChecked] = useState(todo.done);
    const dispatch = useDispatch();

    useEffect(() => {
        setChecked(todo.done);
    }, [todo])

    function onRemoveBtnClick() {
        dispatch(removeRequest(todo.id));
    }

    function onEditBtnClick() {
        dispatch(edit(todo));
    }

    function onStatusClick() {
        let newTodo = {...todo, done: !todo.done}

        dispatch(doneRequest(newTodo));
    }

    return (
        <tr>
            <td className={isChecked ? 'todoComplete' : 'todoNew'} onClick={onStatusClick}>
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