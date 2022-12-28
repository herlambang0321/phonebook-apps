import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCircleCheck, faBan, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default class UserForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            isAdd: false
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
        this.props.add({ name: this.state.name, phone: this.state.phone })
        this.setState({ name: '', phone: '' })
    }

    handleSearch = (event) => {
        event.preventDefault()
        this.props.search({ name: this.state.name, phone: this.state.phone })
        this.setState({ name: '', phone: '' })
    }

    handleAdd = () => {
        this.setState({
            isEdit: true
        });
    }

    handleCancel = () => {
        this.setState({
            isEdit: false
        });
    }

    render() {
        return (
            this.state.isEdit ?
                <div className="py-3">
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
                                <button className="btn btn-warning text-white" onClick={this.handleCancel}><FontAwesomeIcon icon={faBan} style={{ transform: 'rotate(90deg' }} /> cancel</button>
                            </div>
                        </form>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h6>Search Form</h6>
                        </div>
                        <form className="m-3" onSubmit={this.handleSearch}>
                            <div className="d-flex justify-content me-5">
                                <div className="d-flex align-items-center">
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="d-flex col-sm-2">
                                    <input type={this.props.nameType || "name"} className="form-control" id="name" name="name" placeholder="name"
                                        onChange={this.handleInputChange} />
                                </div>
                                <div className="d-flex align-items-center">
                                    <label htmlFor="phone">Phone</label>
                                </div>
                                <div className="d-flex col-sm-2">
                                    <input type={this.props.phoneType || "phone"} className="form-control" id="phone" name="phone" placeholder="phone"
                                        onChange={this.handleInputChange} />
                                </div>
                                <button type="submit" className="btn btn-info"><FontAwesomeIcon icon={faMagnifyingGlass} /> {this.props.submitLabel || 'search'}</button>
                            </div>
                        </form>
                    </div>
                </div>
                :
                <div className="py-3">
                    <div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleAdd}><FontAwesomeIcon icon={faPlus} /> add</button>
                    </div>
                    <div className="card mt-3">
                        <div className="card-header">
                            <h6>Search Form</h6>
                        </div>
                        <form className="m-3" onSubmit={this.handleSearch}>
                            <div className="d-flex justify-content me-5">
                                <div className="d-flex align-items-center">
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="d-flex col-sm-2">
                                    <input type={this.props.nameType || "name"} className="form-control" id="name" name="name" placeholder="name"
                                        onChange={this.handleInputChange} />
                                </div>
                                <div className="d-flex align-items-center">
                                    <label htmlFor="phone">Phone</label>
                                </div>
                                <div className="d-flex col-sm-2">
                                    <input type={this.props.phoneType || "phone"} className="form-control" id="phone" name="phone" placeholder="phone"
                                        onChange={this.handleInputChange} />
                                </div>
                                <button type="submit" className="btn btn-info"><FontAwesomeIcon icon={faMagnifyingGlass} /> {this.props.submitLabel || 'search'}</button>
                            </div>
                        </form>
                    </div>
                </div>
        )
    }

}