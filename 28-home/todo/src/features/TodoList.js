import TodoListItem from './TodoListItem'

const TODO_TABLE_CLASS = 'listTodo';

export default function TodoList({list, onTodoRemove, onTodoEdit, onStatusEdit}) {
    return (
        <table className={TODO_TABLE_CLASS}>
            <thead>
            <tr>
                <th>DONE</th>
                <th>TEXT</th>
                <th>UPDATE</th>
                <th>DELETE</th>
            </tr>
            </thead>
            <tbody>
            {list.map(todo => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onTodoRemove={onTodoRemove}
                    onTodoEdit={onTodoEdit}
                    onStatusEdit={onStatusEdit}
                />
            ))}
            </tbody>
        </table>
    );
}
