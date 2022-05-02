import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><Link to={"/"}>Restaurant DBMS</Link></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><Link to={"/"}>Home</Link></a>
                        </li>
                        <li className="nav-item dropdown active">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Employees</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#"><Link to={"/myemployees"}>My Employees</Link></a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#"><Link to={"/myemployeesbysalary"}>My Employees By Salary</Link></a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#"><Link to={"/myemployeesbyname"}>My Employees By Name</Link></a>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#"> <Link to={"/products"}>Products</Link> </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#"> <Link to={"/orders"}>Orders</Link></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#"> <Link to={"/customers"}>Customers</Link></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar