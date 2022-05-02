import React, { Fragment, useState } from "react";

const InputTodo = () => {
    const [brancheNumber, setbrancheNumber] = useState("");
    const [rName, setrName] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [city, setcity] = useState("");
    const [street, setstreet] = useState("");
    const [rate, setrate] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { brancheNumber, rName, phoneNumber, city, street, rate };
            const response = await fetch("http://localhost:5001/restaurants", {
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
            <h1 className="text-center mt-5">Restaurant Branches</h1>
            <br />
            <br />
            <form onSubmit={onSubmitForm}>
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
                <div class="col-md-12 text-center">
                    <button className="btn btn-success center">Add Restaurant</button>
                </div>
            </form>
        </Fragment>
    );
};

export default InputTodo;