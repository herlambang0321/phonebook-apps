import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default class UserBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [
                { name: "Bambang", phone: "123456786543" },
                { name: "Azka", phone: "123456786544" }
            ]
        }
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h1 className="text-center">Phone Book Apps</h1>
                    </div>
                </div>

                <div className="py-3">
                    <button type="button" className="btn btn-primary"><FontAwesomeIcon icon={faPlus} /> add</button>
                </div>

                <div className="card mb-3">
                    <div className="card-header">
                        <h6>Search Form</h6>
                    </div>
                    <div className="card-body">
                        <form>
                            <div>
                                <label htmlFor="name">Name
                                    <input type="text" id="name" name="name" placeholder="name" /> </label>

                                <label htmlFor="phone">Phone
                                    <input type="text" id="phone" name="phone" placeholder="phone" /> </label>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="card">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <button type="button" className="btn btn-success mx-1"><FontAwesomeIcon icon={faPencil} /> edit</button>
                                            <button type="submit" className="btn btn-danger"><FontAwesomeIcon icon={faTrashCan} /> delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className="card-footer">
                        
                    </div>
                </div>
            </div>
        )
    }
}