import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import UserForm from "./UserForm";
import UserList from "./UserList";

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
                        <UserForm />
                    </div>
                </div>

                <div className="card">
                    <UserList data={this.state.users} />
                    <div className="card-footer">

                    </div>
                </div>
            </div>
        )
    }
}