import { useEffect, useState } from "react";
import * as flyyrAPI from "../../utilities/flyyrs-api";
import PostFlyyrPage from "../PostFlyyrPage/PostFlyyrPage";
import { useParams } from "react-router-dom";
import './FlyyrDetailPage.css';

export default function FlyyrDetail({flyyrs, setFlyyrs}) {
    
    const [showEdit, setShowEdit] = useState(false);    
    const { id }=useParams();
    
    const flyyr = flyyrs.find((f) => f._id === id);

    return ( <>{
        showEdit ?
        <PostFlyyrPage flyyr={flyyr}/> :
        <>
            <h1>{flyyr.eventTitle}</h1>
            <img className="flyyr-image" src={flyyr.flyyrImage} alt={flyyr.eventTitle} />
            <button onClick={() => setShowEdit(true)}>Edit</button>
            <button >Delete</button>
            <p></p>
        </>

    }</>);
}