import InputProduct from "../Products/InputProduct";
import ListProducts from "../Products/ListProducts";
import React, { Fragment } from "react";
import Navbar from "../Navbar";

function MainPage() {
    return (
        <Fragment>
            <Navbar />
            <div className="container">
                <InputProduct />
                <ListProducts />
            </div>
        </Fragment>
    );
}

export default MainPage