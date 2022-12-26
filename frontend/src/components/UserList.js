import UserItem from "./UserItem"

export default function UserList(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((user, index) => {
                    return (
                        <UserItem
                            key={user.id}
                            no={index + 1}
                            user={user}
                            // update={props.update}
                            update={(name, phone) => props.update(user.id, name, phone)}
                            remove={() => props.remove(user.id)}
                            resend={() => props.resend(user.id, user.name, user.phone)}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}