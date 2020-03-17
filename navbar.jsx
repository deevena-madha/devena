import React from "react";
import { Link } from "react-router-dom";
const NavBar = props => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <Link className="navbar-brand" to="/">
                    MoviesApp
        </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/movies">
                                Movies <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        {props.isLoggedIn && (
                            <li className="nav-item active">
                                <Link className="nav-link" to="/employees">
                                    Employees <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                        )}
                        <li className="nav-item active justify-content-end">
                            <Link className="nav-link" to="/posts">
                                Posts <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto justify-content-end">
                        {!props.isLoggedIn && (
                            <li className="nav-item active">
                                <Link className="nav-link" to="/login">
                                    Login
                </Link>
                            </li>
                        )}
                        {props.isLoggedIn && (
                            <li className="nav-item inactive">
                                <Link
                                    onClick={() => props.setLogin(false)}
                                    className="nav-link"
                                    to="/logout"
                                >
                                    Logout
                </Link>
                            </li>
                        )}
                        <li className="nav-item active">
                            <Link className="nav-link" to="/registration">
                                Registration
              </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
