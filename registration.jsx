import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";
import Button from "./button";
import Login from "./login";
import { Link } from "react-router-dom";
class Registration extends Component {
    state = {
        account: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
        errors: {}
    };
    schema = {
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    };
    handleInputField = event => {
        const account = {};
        const errors = {};
        const { name, value } = event.currentTarget;
        // account[event.currentTarget.name] = event.currentTarget.value;
        account[name] = value;
        this.setState({ account });
        //validation
        const obj = { [name]: value };
        const sch = { [name]: this.schema[name] };
        console.log(obj);
        console.log(sch);
        console.log(Joi.validate(obj, sch));
        const result = Joi.validate(obj, sch);
        if (result.error !== null) {
            errors[name] = result.error.details[0].message;
            this.setState({ errors });
        } else {
            this.setState({ errors });
            //alert("you have registered successfully");
            //this.props.history.replace("/login");
        }
    };
    handleFormSubmit = event => {
        event.preventDefault();
        const errors = {};
        alert("registration success!");
        this.props.history.replace("/login");
        const account = this.state.account;
        const options = { abortEarly: false };
        const result = Joi.validate(account, this.schema, options);
        console.log(result);
        console.log(result.log.details);
        for (let item of result.error.details) {
            console.log(item);
            console.log(item.path[0]);
            console.log(item.message);
            errors[item.path[0]] = item.message;
            this.setState({ errors });
        }
    };

    render() {
        return (
            <div>
                <form className="w-50 mx-auto mt-5 pt-0 border border-primary bg-light">
                    <div className="form-group">
                        <h2 className="bg-primary text-center">Registration</h2>
                        <Input
                            inputName="firstName"
                            value={this.state.account.firstName}
                            type="text"
                            label="FirstName"
                            handleInputField={this.handleInputField}
                            error={this.state.errors.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            inputName="lastName"
                            value={this.state.account.lastName}
                            type="text"
                            label="LastName"
                            handleInputField={this.handleInputField}
                            error={this.state.errors.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            inputName="email"
                            value={this.state.account.email}
                            type="text"
                            label="Email"
                            handleInputField={this.handleInputField}
                            error={this.state.errors.email}
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            inputName="password"
                            value={this.state.account.password}
                            type="password"
                            label="Password"
                            handleInputField={this.handleInputField}
                            error={this.state.errors.password}
                        />
                    </div>
                    <Button type="submit" className="btn btn-secondary btn-block p-3">
                        Register
          </Button>
                </form>
            </div>
        );
    }
}

export default Registration;
