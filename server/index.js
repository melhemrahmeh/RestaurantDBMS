const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo
app.post("/restaurants", async (req, res) => {
    try {
        const { brancheNumber, rName, phoneNumber, city, street, rate } = req.body;
        const newTodo = await pool.query(
            "insert into RESTAURANT (brancheNumber,  rName ,  phoneNumber ,  city,  street,  rate) VALUES($1 , $2  ,$3 , $4 , $5 , $6 ) RETURNING *",
            [brancheNumber, rName, phoneNumber, city, street, rate]
        );

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


//get all todos
app.get("/restaurants", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM RESTAURANT");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});


//get a todo
app.get("/restaurants/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM restaurant WHERE rID = $1", [
            id
        ]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


//update a todo
app.put("/restaurants/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { brancheNumber, rName, phoneNumber, city, street, rate } = req.body;
        await pool.query(
            "UPDATE restaurant SET brancheNumber = $1 , rName = $2 , phoneNumber = $3 , street = $4 , city = $5 , rate = $6 WHERE rID = $7",
            [brancheNumber, rName, phoneNumber, city, street, rate, id]
        );

        res.json("restaurants was updated!");
    } catch (err) {
        console.error(err.message);
    }
});


//delete a todo
app.delete("/restaurants/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM restaurant WHERE rid = $1", [
            id
        ]);
        res.json("restaurants was deleted!");
    } catch (err) {
        console.log(err.message);
    }
});
























app.post("/customers", async (req, res) => {
    try {
        const { cname, phone_customer } = req.body;
        const newTodo = await pool.query(
            "insert into customer (cname,  phone_customer) VALUES($1 , $2 ) RETURNING *",
            [cname, phone_customer]
        );

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


//get all todos
app.get("/customers", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM customer");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});


//get a todo
app.get("/customers/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM customer WHERE csid = $1", [
            id
        ]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


//update a todo
app.put("/customers/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { cname, phone_customer } = req.body;
        await pool.query(
            "UPDATE customer SET cName = $1 , phone_customer = $2  WHERE csid = $3",
            [cname, phone_customer, id]
        );

        res.json("customer was updated!");
    } catch (err) {
        console.error(err.message);
    }
});


//delete a todo
app.delete("/customers/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM customer WHERE csid = $1", [
            id
        ]);
        res.json("customer was deleted!");
    } catch (err) {
        console.log(err.message);
    }
});
























app.post("/products", async (req, res) => {
    try {
        const { pname, ingrediants, category, price } = req.body;
        const newTodo = await pool.query(
            "insert into Product (pname,  ingrediants , category , price) VALUES($1 , $2 , $3 , $4 ) RETURNING *",
            [pname, ingrediants, category, price]
        );

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


//get all todos
app.get("/products", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM Product");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});


//get a todo
app.get("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM Product WHERE pid = $1", [
            id
        ]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


//update a todo
app.put("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { pname, ingrediants, category, price } = req.body;
        await pool.query(
            "UPDATE Product SET pName = $1 , ingrediants = $2 , category  = $3  , price  = $4 WHERE pid = $5",
            [pname, ingrediants, category, price, id]
        );

        res.json("Product was updated!");
    } catch (err) {
        console.error(err.message);
    }
});


//delete a todo
app.delete("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM Product WHERE pid = $1", [
            id
        ]);
        res.json("Product was deleted!");
    } catch (err) {
        console.log(err.message);
    }
});























app.post("/orders", async (req, res) => {
    try {
        const { orderDate, totalPrice, isTable, isTakeAway, isDelivery, Table_Nb, address } = req.body;
        const newTodo = await pool.query(
            "insert into theorder (orderDate, totalPrice, isTable, isTakeAway, isDelivery, Table_Nb, address) VALUES($1 , $2 , $3 , $4 , $5 , $6 , $7) RETURNING *",
            [orderDate, totalPrice, isTable, isTakeAway, isDelivery, Table_Nb, address]
        );

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


//get all todos
app.get("/orders", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM theorder");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});


//get a todo
app.get("/orders/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM theorder WHERE orderNum = $1", [
            id
        ]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


//update a todo
app.put("/orders/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { orderDate, totalPrice, isTable, isTakeAway, isDelivery, Table_Nb, address } = req.body;
        await pool.query(
            "UPDATE theorder SET orderDate = $1 , totalPrice = $2 , isTable  = $3  , isTakeAway  = $4   , isDelivery  = $5   , Table_Nb  = $6 , address = $7  WHERE orderNum = $8",
            [orderDate, totalPrice, isTable, isTakeAway, isDelivery, Table_Nb, address, id]
        );

        res.json("Product was updated!");
    } catch (err) {
        console.error(err.message);
    }
});


//delete a todo
app.delete("/orders/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM theorder WHERE orderNum = $1", [
            id
        ]);
        res.json("theorder was deleted!");
    } catch (err) {
        console.log(err.message);
    }
});




















//get all todos
app.get("/employees", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT eID, eName, phoneNumber, address, Salary FROM employee");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});


//get all todos
app.get("/employeesbyname", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT eID, eName, phoneNumber, address, Salary FROM employee order by eName ASC");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});


//get all todos
app.get("/employeesbysalary", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT eID, eName, phoneNumber, address, Salary FROM employee ORDER by Salary ASC;");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});
































app.listen(5001, () => {
    console.log("server has started on port 5001");
});