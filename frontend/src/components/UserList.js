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
                            name={user.name}
                            phone={user.phone}
                            remove={() => props.remove(user.id)}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}