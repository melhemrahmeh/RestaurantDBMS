import InputRestaurant from "../Restaurants/InputRestaurant";
import ListRestaurants from  "../Restaurants/ListRestaurants";
import React, { Fragment } from "react";
import Navbar from "../Navbar";

function MainPage() {
    return (
        <Fragment>
            <Navbar />
            <div className="container">
                <InputRestaurant />
                <ListRestaurants />
            </div>
        </Fragment>
    );
}

export default MainPage