import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function UserItem(props) {

    return (
        <tr>
            <td>{props.no}</td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>
                <button type="button" className="btn btn-success mx-1"><FontAwesomeIcon icon={faPencil} /> edit</button>
                <button type="submit" className="btn btn-danger"><FontAwesomeIcon icon={faTrashCan} /> delete</button>
            </td>
        </tr>
    )
}