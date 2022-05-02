import React, { Fragment, useState } from "react";

const InputTodo = () => {
    const [pname, setpname] = useState("");
    const [ingrediants, setingrediants] = useState("");
    const [category, setcategory] = useState("");
    const [price, setprice] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { pname, ingrediants, category, price };
            const response = await fetch("http://localhost:5001/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/products";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className="text-center mt-5">Products</h1>
            <br />
            <br />
            <form onSubmit={onSubmitForm}>
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
                <div class="col-md-12 text-center">
                    <button className="btn btn-success center">Add Product</button>
                </div>
            </form>
        </Fragment>
    );
};

export default InputTodo;