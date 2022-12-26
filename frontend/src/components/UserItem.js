import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan, faRepeat } from '@fortawesome/free-solid-svg-icons'

export default function UserItem(props) {
    return (
        <tr>
            <td>{props.no}</td>
            <td>{props.user.name}</td>
            <td>{props.user.phone}</td>
            <td>
                <button type="button" className="btn btn-success mx-1"><FontAwesomeIcon icon={faPencil} /> edit</button>
                <button type="button" className={props.user.sent ? 'btn btn-danger' : 'btn btn-warning'} onClick={props.user.sent ? props.remove : props.resend}>{
                    props.user.sent ? (
                        <>
                            <FontAwesomeIcon icon={faTrashCan} /> delete
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faRepeat} /> resend
                        </>
                    )
                }</button>
            </td>
        </tr>
    )
}