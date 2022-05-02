import ListEmployeesBySalary from "../Employees/ListEmployeesBySalary";
import React, { Fragment } from "react";
import Navbar from "../Navbar";

function MainPage() {
    return (
        <Fragment>
            <Navbar />
            <div className="container">
                <ListEmployeesBySalary />
            </div>
        </Fragment>
    );
}

export default MainPage