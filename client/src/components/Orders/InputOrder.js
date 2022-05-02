import React, { Fragment, useState } from "react";

const InputTodo = () => {
    const [orderDate, setorderDate] = useState("");
    const [totalPrice, settotalPrice] = useState("");
    const [isTable, setisTable] = useState("");
    const [isTakeAway, setisTakeAway] = useState("");
    const [isDelivery, setisDelivery] = useState("");
    const [Table_Nb, setTable_Nb] = useState("");
    const [address, setaddress] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { orderDate, totalPrice, isTable, isTakeAway, isDelivery, Table_Nb, address };
            const response = await fetch("http://localhost:5001/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className="text-center mt-5">Orders</h1>
            <br />
            <br />
            <form onSubmit={onSubmitForm}>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Order Date: </label>
                            <input
                                type="date"
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
                <div class="col-md-12 text-center">
                    <button className="btn btn-success center">Add Restaurant</button>
                </div>
            </form>
        </Fragment>
    );
};

export default InputTodo;