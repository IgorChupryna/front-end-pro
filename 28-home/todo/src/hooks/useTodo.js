import {useEffect, useState} from 'react'
import TodoApi from '../api/TodoApi'

const initialTodoState = [];
const DEFAULT_TODO = {
    text: '',
    done: false,
};

export default function useTodo() {
    const [list, setList] = useState(initialTodoState);
    const [editTodo, setEditTodo] = useState(DEFAULT_TODO);

    useEffect(() => {
        TodoApi
            .getList()
            .then((listFromServer) => {
                setList(listFromServer);
            })
    }, [])

    function onTodoSubmit(todo) {
        if (editTodo.id) {
            const newList = list.map(todoItem => todoItem.id === editTodo.id ? todo : todoItem);

            TodoApi
                .update(editTodo.id, todo)
                .then(() => {
                    setList(newList);
                    setEditTodo(DEFAULT_TODO);
                })
        } else {
            TodoApi
                .create(todo)
                .then((newTodo) => {
                    setList([...list, newTodo]);
                    setEditTodo(DEFAULT_TODO);
                })
        }
    }

    function onTodoRemove(id) {
        const newList = list.filter(todoItem => todoItem.id !== id);
        TodoApi.delete(id)
            .then(() => {
                setList(newList);
            })
    }

    function onTodoEdit(todo) {
        setEditTodo(todo);
    }

    function onStatusEdit(todo) {
        todo.done = !todo.done;
        TodoApi
            .update(todo.id, todo);
    }

    return {
        list,
        editTodo,
        onTodoSubmit,
        onTodoRemove,
        onTodoEdit,
        onStatusEdit,
    };
}