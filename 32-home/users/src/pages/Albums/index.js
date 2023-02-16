import {Route, Routes} from 'react-router-dom'
import List from './List'
import Photos from './Photos'


export default function Albums() {

    return (
        <Routes>
            <Route path="/" element={<List/>}/>
            <Route path="/:idAlbum" element={<Photos/>}/>
        </Routes>
    )
}