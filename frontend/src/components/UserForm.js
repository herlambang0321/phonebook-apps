import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCircleCheck, faBan } from '@fortawesome/free-solid-svg-icons'

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
            <div className="py-3">
                {/* <div>
                        <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faPlus} /> add</button>
                    </div> */}
                <div className="card mb-3">
                    <div className="card-header">
                        <h6>Adding Form</h6>
                    </div>
                    <form className="m-3" onSubmit={this.handleSubmit}>
                        <div className="d-flex justify-content me-5">
                            <div className="d-flex align-items-center">
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="d-flex col-sm-2">
                                <input type="text" className="form-control" id="name" name="name" placeholder="name"
                                    onChange={this.handleInputChange} value={this.state.name} />
                            </div>
                            <div className="d-flex align-items-center">
                                <label htmlFor="phone">Phone</label>
                            </div>
                            <div className="d-flex col-sm-2">
                                <input type="text" className="form-control" id="phone" name="phone" placeholder="phone"
                                    onChange={this.handleInputChange} value={this.state.phone} />
                            </div>
                            <button type="submit" className="btn btn-success"><FontAwesomeIcon icon={faCircleCheck} /> save</button>
                            <button className="btn btn-warning text-white"><FontAwesomeIcon icon={faBan} style={{ transform: 'rotate(90deg' }} /> cancel</button>
                        </div>
                    </form>
                </div>

                <div className="card mb-3">
                    <div className="card-header">
                        <h6>Search Form</h6>
                    </div>
                    <form className="m-3" onSubmit={this.handleSubmit}>
                        <div className="d-flex justify-content me-5">
                            <div className="d-flex align-items-center">
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="d-flex col-sm-2">
                                <input type="text" className="form-control" id="name" name="name" placeholder="name"
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="d-flex align-items-center">
                                <label htmlFor="phone">Phone</label>
                            </div>
                            <div className="d-flex col-sm-2">
                                <input type="text" className="form-control" id="phone" name="phone" placeholder="phone"
                                    onChange={this.handleInputChange} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}