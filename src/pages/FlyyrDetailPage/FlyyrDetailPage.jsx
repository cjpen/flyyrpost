import { useState } from "react";
import * as flyyrAPI from "../../utilities/flyyrs-api";
import PostFlyyrPage from "../PostFlyyrPage/PostFlyyrPage";
import DeleteConfirmation from "../../components/DeleteConfirmation/DeleteConfirmation";
import { useParams } from "react-router-dom";
import './FlyyrDetailPage.css';

export default function FlyyrDetail({flyyrs, setFlyyrs}) {
    
    const [showEdit, setShowEdit] = useState(false);   
    const [showDeleteConf, setShowDeleteConf] = useState(false) 
    const { id }=useParams();
    
    const flyyr = flyyrs.find((f) => f._id === id);

    return ( <>{
        showEdit ?
        <PostFlyyrPage flyyr={flyyr}/> :
        showDeleteConf ? <DeleteConfirmation flyyr={flyyr} setShowDeleteConf={setShowDeleteConf} id={id}/> :
        <>
            <h1>{flyyr.eventTitle}</h1>
            <img className="flyyr-image" src={flyyr.flyyrImage} alt={flyyr.eventTitle} />
            <p></p>
            <div>
                <button onClick={() => setShowEdit(true)}>Edit</button>
                <button onClick={() => setShowDeleteConf(true)}>Delete</button>
            </div>
        </>

    }</>);
}