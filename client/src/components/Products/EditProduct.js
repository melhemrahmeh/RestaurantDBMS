import React, { Fragment, useState } from "react";

const EditTodo = ({ customer }) => {
    const [pname, setpname] = useState(customer.pname);
    const [ingrediants, setingrediants] = useState(customer.ingrediants);
    const [category, setcategory] = useState(customer.category);
    const [price, setprice] = useState(customer.price)

    const updateRestaurant = async e => {
        e.preventDefault();
        try {
            const body = { pname, ingrediants, category, price };
            const response = await fetch(
                `http://localhost:5001/products/${customer.pid}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );

            window.location = "/products";
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
                data-target={`#id${customer.pid}`}
            >
                Edit
            </button>
            <div
                class="modal"
                id={`id${customer.pid}`}
                onClick={() => setpname(customer.pname)}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Edit Product</h4>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                onClick={() => setpname(customer.pname)}
                            >
                                &times;
                            </button>
                        </div>

                        <div class="modal-body">
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Product Name: </label>
                                        <input
                                            type="text"
                                            className="form-control mx-sm-3 mb-2"
                                            value={pname}
                                            onChange={e => setpname(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Ingrediants</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={ingrediants}
                                            onChange={e => setingrediants(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Category: </label>
                                        <input
                                            type="text"
                                            className="form-control mx-sm-3 mb-2"
                                            value={category}
                                            onChange={e => setcategory(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Price</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={price}
                                            onChange={e => setprice(e.target.value)}
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
