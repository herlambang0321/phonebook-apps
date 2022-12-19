import { Component } from "react";

export default class UserForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.add(this.state.name, this.state.phone)
        this.setState({ name: '', phone: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="normal">
                    <label htmlFor="name">Name
                        <input type="text"  id="name" name="name" placeholder="name" onChange={this.handleInputChange} value={this.state.name} /> </label>

                    <label htmlFor="phone">Phone
                        <input type="text" id="phone" name="phone" placeholder="phone" onChange={this.handleInputChange} value={this.state.phone} /> </label>
                </div>
            </form>
        )
    }

}