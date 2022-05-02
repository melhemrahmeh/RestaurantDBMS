import React, { Fragment, useState } from "react";

const InputTodo = () => {
    const [cname, setcname] = useState("");
    const [phone_customer, setphone_customer] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { cname, phone_customer };
            const response = await fetch("http://localhost:5001/customers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/customers";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className="text-center mt-5">Customers</h1>
            <br />
            <br />
            <form onSubmit={onSubmitForm}>
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
                <div class="col-md-12 text-center">
                    <button className="btn btn-success center">Add Customer</button>
                </div>
            </form>
        </Fragment>
    );
};

export default InputTodo;