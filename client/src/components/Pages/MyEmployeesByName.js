import ListEmployeesByName from "../Employees/ListEmployeesByName";
import React, { Fragment } from "react";
import Navbar from "../Navbar";

function MainPage() {
    return (
        <Fragment>
            <Navbar />
            <div className="container">
                <ListEmployeesByName />
            </div>
        </Fragment>
    );
}

export default MainPage