import InputCustomer from "../Customers/InputCustomer";
import ListCustomers from "../Customers/ListCustomers";
import React, { Fragment } from "react";
import Navbar from "../Navbar";

function MainPage() {
    return (
        <Fragment>
            <Navbar />
            <div className="container">
                <InputCustomer />
                <ListCustomers /> 
            </div>
        </Fragment>
    );
}

export default MainPage