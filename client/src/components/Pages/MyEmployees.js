import ListEmployees from "../Employees/ListEmployees";
import React, { Fragment } from "react";
import Navbar from "../Navbar";

function MainPage() {
    return (
        <Fragment>
            <Navbar />
            <div className="container">
                <ListEmployees />
            </div>
        </Fragment>
    );
}

export default MainPage