import { useEffect, useState } from "react";
import * as flyyrAPI from "../../utilities/flyyrs-api";
import './FlyyrDetailPage.css';

export default function FlyyrDetail() {
    const [flyyr, setFlyyr] = useState({})
    useEffect(() => {
        const flyyrId = window.location.pathname.split("/")[2]
        flyyrAPI.getOne(flyyrId)
            .then(res => setFlyyr(res));
    }, []);
    
    return (
        <>
            <h1>{flyyr.eventTitle}</h1>
            <img className="flyyr-image" src={flyyr.flyyrImage} alt={flyyr.eventTitle} />
            <button>Edit</button>
            <button>Delete</button>
            <p></p>
        </>
    );
}