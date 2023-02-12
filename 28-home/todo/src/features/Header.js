import { useEffect, useState } from 'react'

const FORM_INPUT_CLASS = 'formInput';
const LABEL_INPUT_CLASS = 'labelTodo';

export default function Header({ onTodoSubmit, todo }) {
  const [text, setText] = useState(todo?.text ?? '');

  useEffect(() => {
      setText(todo.text);
  }, [todo])

  function onFormSubmit (e) {
    e.preventDefault();

    const newTodo = {
      ...todo,
      text,
    };
    onTodoSubmit(newTodo);
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
