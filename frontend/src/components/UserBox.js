import { Component } from "react";
import axios from 'axios'
import UserForm from "./UserForm";
import UserList from "./UserList";

const request = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: { 'X-Custom-Header': 'foobar' }
});

export default class UserBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        try {
            const { data } = await request.get('phonebooks')
            if (data.success) {
                this.setState({
                    users: data.data.map(item => {
                        item.sent = true
                        return item
                    })
                })
            } else {
                alert('Failed get data')
            }
        } catch (error) {
            console.log(error)
        }
    }

    addUser = async (name, phone) => {
        this.setState((state) => {
            return {
                users: [
                    ...state.users,
                    {
                        id: Date.now(),
                        name,
                        phone
                    }
                ]
            };
        });
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header text-center">
                        <h1>Phone Book Apps</h1>
                    </div>
                </div>
                <div className="card-body">
                    <UserForm add={this.addUser} />
                </div>
                <UserList data={this.state.users} />
            </div>
        )
    }
}