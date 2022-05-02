import React, { Fragment, useEffect, useState } from "react";

const ListTodos = () => {
    const [restaurants, setrestaurants] = useState([]);

    const getRestaurants = async () => {
        try {
            const response = await fetch("http://localhost:5001/employeesbyname");
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
            <h2 style={{ "textAlign": "center" }}>Employees Sorted alphabetically </h2>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
                    {restaurants.map(restaurant => (
                        <tr key={restaurant.eid}>
                            <td>{restaurant.ename}</td>
                            <td>{restaurant.address}</td>
                            <td>{restaurant.phonenumber}</td>
                            <td>{restaurant.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListTodos;
