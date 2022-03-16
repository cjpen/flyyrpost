import { useNavigate } from "react-router-dom";
import { deleteFlyyr } from "../../utilities/flyyrs-api";


export default function DeleteConfirmation({id, flyyr, setShowDeleteConf}) {
    const navigate = useNavigate();
    async function handleDelete(id) {
        const delFlr = await deleteFlyyr(id);
        console.log(delFlr);
        navigate('/');
    }
    return(
    <div>
        <h4>Do you want to delete this flyyr for {flyyr.eventTitle}?</h4>
        <button onClick={() => handleDelete(id)}>DELETE</button><button onClick={() => setShowDeleteConf(false)}>Cancel</button>
    </div>
    );
}