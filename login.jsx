import React, { Component } from "react";
import Input from "./input";
import Button from "./button";
import { Link } from "react-router-dom";

class Login extends Component {
    // creating ref object
    username = React.createRef();

    state = {
        account: {
            username: "",
            password: ""
        },
        errors: {}
    };
    handleFormSubmit = event => {
        event.preventDefault();
        const errors = {};
        const { username, password } = this.state.account;
        console.log(username);
        console.log(password);

        if (username.trim() === "") errors.username = "Username is required";
        if (password.trim() === "") errors.password = "Password is required";

        this.setState({ errors });
        if (username === "testuser" && password === "abc@123") {
            this.props.history.replace("/home");
        } else {
            alert("enter valid credentials!");
        }
    };

    handleInputField = event => {
        const account = this.state.account;
        account[event.currentTarget.name] = event.currentTarget.value;
        this.setState({ account: account });
    };

    render() {
        return (
            <div>
                <form
                    onSubmit={this.handleFormSubmit}
                    className="w-50 mx-auto bg-light mt-5 pt-0"
                >
                    <p className="h3 bg-primary text-white text-center p-2">Login Form</p>
                    <div className="form-group">
                        <Input
                            inputName="username"
                            value={this.state.account.username}
                            type="text"
                            handleInputField={this.handleInputField}
                            label="Username"
                            error={this.state.errors.username}
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            inputName="password"
                            value={this.state.account.password}
                            type="password"
                            handleInputField={this.handleInputField}
                            label="Password"
                            error={this.state.errors.password}
                        />
                    </div>
                    <input
                        type="submit"
                        className="btn btn-primary btn-block"
                        onClick={() => this.props.setLogin(true)}
                        value="Login"
                    />
                    <p className="small text-center mt-3">
                        Don't have an account? Register <Link to="/registration">here</Link>
                    </p>
                </form>
            </div>
        );
    }
}

export default Login;