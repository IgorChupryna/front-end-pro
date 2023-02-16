import {useEffect, useState} from 'react'
import UserApi from '../../api/UserApi'
import {useNavigate} from 'react-router-dom'

const USER_TABLE_CLASS = 'listUser';
const ALBUM_BTN_CLASS = 'updateBtn';
const USER_BTN_CLASS = 'btnUser';

export default function List() {
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        UserApi.getList()
            .then((list) => {
                setList(list)
            })
    }, [])

    function onAlbumsBtnClick(user) {
        navigate(`/users/${user.id}/albums`)
    }

    return (
        <>
            <table className={USER_TABLE_CLASS}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Albums</th>
                </tr>
                </thead>
                <tbody>
                {list.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td className={USER_BTN_CLASS}>
                            <button className={ALBUM_BTN_CLASS} onClick={() => onAlbumsBtnClick(user)}>[Albums]</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
