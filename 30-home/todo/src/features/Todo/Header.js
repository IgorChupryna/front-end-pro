import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { save} from '../../store/actions/todo'

const FORM_INPUT_CLASS = 'formInput';
const LABEL_INPUT_CLASS = 'labelTodo';

export default function Header() {
    const todo = useSelector(state => state.todo.editTodo)
    const dispatch = useDispatch();
    const [text, setText] = useState(todo?.text ?? '');

    useEffect(() => {
        setText(todo.text);
    }, [todo])

    function onFormSubmit(e) {
        e.preventDefault();
        if (text === '') return
        
        const newTodo = {
            ...todo,
            text,
        };
        dispatch(save(newTodo))
        setText('');
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label
                className={LABEL_INPUT_CLASS}
                htmlFor='text'>Title
            </label>
            <input
                className={FORM_INPUT_CLASS}
                type='text'
                id='text'
                value={text}
                onChange={e => setText(e.target.value)}
            />
        </form>
    );
}