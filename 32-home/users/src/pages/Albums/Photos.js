import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PhotoApi from "../../api/PhotoApi";


const PHOTO_CONTAINER_CLASS = 'container';
const PHOTO_GALLERY_CLASS = 'gallery';
const PHOTO_GALLERY_IMG_CLASS = 'gallery__img';

export default function Photos() {
    const [list, setList] = useState([]);
    let {idAlbum} = useParams();

    useEffect(() => {
        PhotoApi.getListByAlbumId(idAlbum)
            .then((list) => {
                setList(list)
            })
    }, [idAlbum])

    return (
        <>
            <div className={PHOTO_CONTAINER_CLASS}>
                <div className={PHOTO_GALLERY_CLASS}>
                    {list.map((photo) => (
                        <img key={photo.id} src={photo.url} className={PHOTO_GALLERY_IMG_CLASS}
                             alt={photo.thumbnailUrl}/>
                    ))}
                </div>
            </div>
        </>
    )
}