import React, { Fragment, useEffect, useState } from "react";

import EditProduct from "./EditProduct";

const ListTodos = () => {
    const [restaurants, setrestaurants] = useState([]);

    //delete todo function

    const deleteRestaurant = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:5001/products/${id}`, {
                method: "DELETE"
            });

            setrestaurants(restaurants.filter(restaurants => restaurants.rid !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getRestaurants = async () => {
        try {
            const response = await fetch("http://localhost:5001/products");
            const jsonData = await response.json();

            setrestaurants(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getRestaurants();
    }, []);

    return (
        <Fragment>
            {" "}
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
                    {restaurants.map(restaurant => (
                        <tr key={restaurant.pid}>
                            <td>{restaurant.pname}</td>
                            <td>
                                <EditProduct customer={restaurant} />
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteRestaurant(restaurant.pid)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListTodos;
