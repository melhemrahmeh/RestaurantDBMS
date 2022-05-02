import React, { Fragment, useState } from "react";

const EditTodo = ({ restaurant }) => {
    const [brancheNumber, setbrancheNumber] = useState(restaurant.brancheNumber);
    const [rName, setrName] = useState(restaurant.rName);
    const [phoneNumber, setphoneNumber] = useState(restaurant.phoneNumber);
    const [city, setcity] = useState(restaurant.city);
    const [street, setstreet] = useState(restaurant.street);
    const [rate, setrate] = useState(restaurant.rate);


    //edit description function

    const updateRestaurant = async e => {
        e.preventDefault();
        try {
            const body = { brancheNumber, rName, phoneNumber, city, street, rate };
            const response = await fetch(
                `http://localhost:5001/restaurants/${restaurant.rid}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <button
                type="button"
                class="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${restaurant.rid}`}
            >
                Edit
            </button>
            <div
                class="modal"
                id={`id${restaurant.rid}`}
                onClick={() => setbrancheNumber(restaurant.brancheNumber)}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Edit Todo</h4>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                onClick={() => setbrancheNumber(restaurant.brancheNumber)}
                            >
                                &times;
                            </button>
                        </div>

                        <div class="modal-body">
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Branch Number: </label>
                                        <input
                                            type="text"
                                            className="form-control mx-sm-3 mb-2"
                                            value={brancheNumber}
                                            onChange={e => setbrancheNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Restaurant Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={rName}
                                            onChange={e => setrName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Phone Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={phoneNumber}
                                            onChange={e => setphoneNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">City</label>
                                        <input
                                            type="text"
                                            className="form-control mx-sm-3 mb-2"
                                            value={city}
                                            onChange={e => setcity(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Street</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={street}
                                            onChange={e => setstreet(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Rate</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={rate}
                                            onChange={e => setrate(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-warning"
                                data-dismiss="modal"
                                onClick={e => updateRestaurant(e)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditTodo;
