import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from "react";
import {getList} from "../../store/actions/todo";

export default function Todo () {
    const dispatch = useDispatch();
    const list = useSelector(state => state.todo.list)

    useEffect(() => {
        dispatch(getList())
    }, [dispatch])

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
