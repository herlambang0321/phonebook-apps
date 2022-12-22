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
            console.error(error)
        }
    }

    addUser = async (name, phone) => {
        const id = Date.now()
        this.setState((state) => {
            return {
                users: [
                    ...state.users,
                    {
                        id,
                        name,
                        phone,
                        sent: true
                    }
                ]
            };
        });
        try {
            const { data } = await request.post('phonebooks', { name, phone })
            if (data.success) {
                this.setState((state) => ({
                    users: state.users.map(item => {
                        if (item.id === id) {
                            return { ...data.data, sent: true }
                        }
                        return item
                    })
                }))
            } else {
                console.log(data.data)
            }
        } catch (error) {
            console.error(error)
            this.setState((state) => ({
                users: state.users.map(item => {
                    if (item.id === id) {
                        item.sent = false
                    }
                    return item
                })
            }))
        }
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