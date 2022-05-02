import React, { Fragment, useState } from "react";

const EditTodo = ({ restaurant }) => {
    const [orderDate, setorderDate] = useState(restaurant.orderdate);
    const [totalPrice, settotalPrice] = useState(restaurant.totalprice);
    const [isTable, setisTable] = useState(restaurant.istable);
    const [isTakeAway, setisTakeAway] = useState(restaurant.istakeaway);
    const [isDelivery, setisDelivery] = useState(restaurant.isdelivery);
    const [Table_Nb, setTable_Nb] = useState(restaurant.table_nb);
    const [address, setaddress] = useState(restaurant.address);

    //edit description function

    const updateRestaurant = async e => {
        e.preventDefault();
        try {
            const body = { orderDate, totalPrice, isTable, isTakeAway, isDelivery, Table_Nb, address };
            const response = await fetch(
                `http://localhost:5001/orders/${restaurant.rid}`,
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
                onClick={() => setaddress(restaurant.brancheNumber)}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Edit Todo</h4>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                onClick={() => setaddress(restaurant.brancheNumber)}
                            >
                                &times;
                            </button>
                        </div>

                        <div class="modal-body">
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Order Date: </label>
                                        <input
                                            type="text"
                                            className="form-control mx-sm-3 mb-2"
                                            value={orderDate}
                                            onChange={e => setorderDate(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">totalPrice</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={totalPrice}
                                            onChange={e => settotalPrice(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">isTable</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={isTable}
                                            onChange={e => setisTable(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">isTakeAway</label>
                                        <input
                                            type="text"
                                            className="form-control mx-sm-3 mb-2"
                                            value={isTakeAway}
                                            onChange={e => setisTakeAway(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">isDelivery</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={isDelivery}
                                            onChange={e => setisDelivery(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Table Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={Table_Nb}
                                            onChange={e => setTable_Nb(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Address</label>
                                        <input
                                            type="text"
                                            className="form-control mx-sm-3 mb-2"
                                            value={address}
                                            onChange={e => setaddress(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
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
