import {useEffect, useState} from 'react'
import AlbumApi from '../../api/AlbumApi'
import {useNavigate, useParams} from "react-router-dom";

const USER_TABLE_CLASS = 'listUser';
const ALBUM_BTN_CLASS = 'updateBtn';
const USER_BTN_CLASS = 'btnUser';

export default function List() {
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    let {idUser} = useParams();

    useEffect(() => {
        AlbumApi.getList(idUser)
            .then((list) => {
                setList(list)
            })
    }, [idUser])

    function onPhotosBtnClick(album) {
        navigate(`/users/${album.userId}/albums/${album.id}`)
    }

    return (
        <>
            <table className={USER_TABLE_CLASS}>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Photo</th>
                </tr>
                </thead>
                <tbody>
                {list.map((album) => (
                    <tr key={album.id}>
                        <td>{album.title}</td>
                        <td className={USER_BTN_CLASS}>
                            <button  className={ALBUM_BTN_CLASS} onClick={() => onPhotosBtnClick(album)}>[Photos]</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
