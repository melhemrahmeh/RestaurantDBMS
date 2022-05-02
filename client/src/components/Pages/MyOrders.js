import InputOrder from "../Orders/InputOrder";
import ListOrders from "../Orders/ListOrders";
import React, { Fragment } from "react";
import Navbar from "../Navbar";

function MainPage() {
    return (
        <Fragment>
            <Navbar />
            <div className="container">
                <InputOrder />
                <ListOrders />
            </div>
        </Fragment>
    );
}

export default MainPage