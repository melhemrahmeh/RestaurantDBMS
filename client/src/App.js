import React from "react";
import { Routes, Route } from "react-router-dom"
import MainPage from "./components/Pages/MainPage.js";
import MyEmployees from "./components/Pages/MyEmployees"
import MyCustomers from "./components/Pages/MyCustomers"
import MyOrders from "./components/Pages/MyOrders"
import MyProducts from "./components/Pages/MyProducts"
import MyEmployeesBySalary from "./components/Pages/MyEmployeesBySalary"
import MyEmployeesByName from "./components/Pages/MyEmployeesByName"

function App() {
  return (
    <div>
      <Routes>
        <Route index path="" element={<MainPage />} />
        <Route path="myemployees/" element={<MyEmployees />} /> 
        <Route path="myemployeesbysalary/" element={<MyEmployeesBySalary />} /> 
        <Route path="myemployeesbyname/" element={<MyEmployeesByName />} /> 
        <Route path="products/" element={<MyProducts />} /> 
        <Route path="orders/" element={<MyOrders />} /> 
        <Route path="customers/" element={<MyCustomers />} /> 
        {/* <Route path="about/" element={<AboutUs />} /> */}
      </Routes>
    </div>
  );
}

export default App;