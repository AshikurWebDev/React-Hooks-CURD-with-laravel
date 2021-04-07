import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    Navbar
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

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-link"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-link"
                                to="/add-contact"
                            >
                                AddContact
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-link"
                                to="/edit-contact"
                            >
                                Edit Contact
                            </NavLink>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    );
}
