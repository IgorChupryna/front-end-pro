import {Route, Routes} from 'react-router-dom'
import List from './List'
import Albums from '../Albums'


export default function Users() {
    return (
        <Routes>
            <Route path="/" element={<List/>}/>
            <Route path=":idUser/albums/*" element={<Albums/>}/>
        </Routes>
    )
}