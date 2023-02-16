import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'
import { useSelector } from 'react-redux'

export default function Todo () {
    const list = useSelector(state => state.todo.list)

    return (
        <div className="App">
            <Header />
            <TodoList
                list={list}
            />
            <Footer/>
        </div>
    )
}
