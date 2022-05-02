import React, { Fragment, useState } from "react";

const EditTodo = ({ customer }) => {
    const [phone_customer, setphone_customer] = useState(customer.phone_customer);
    const [cname, setcname] = useState(customer.cname);
    //edit description function

    const updateRestaurant = async e => {
        e.preventDefault();
        try {
            const body = { cname, phone_customer };
            const response = await fetch(
                `http://localhost:5001/customers/${customer.csid}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );

            window.location = "/customers";
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
                data-target={`#id${customer.csid}`}
            >
                Edit
            </button>
            <div
                class="modal"
                id={`id${customer.csid}`}
                onClick={() => setcname(customer.cname)}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Edit Todo</h4>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                onClick={() => setcname(customer.brancheNumber)}
                            >
                                &times;
                            </button>
                        </div>

                        <div class="modal-body">
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Customer Name: </label>
                                        <input
                                            type="text"
                                            className="form-control mx-sm-3 mb-2"
                                            value={cname}
                                            onChange={e => setcname(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Phone Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={phone_customer}
                                            onChange={e => setphone_customer(e.target.value)}
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
