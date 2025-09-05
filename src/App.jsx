
import React, { useState } from "react";
// import Sidebar from "./Components/Slidebar";
// import Navbar from "./Components/Navbar";
// import Cards from "./Components/Cards";
// import Table from "./Components/Table";
import FormComponent from "./Components/InputForm/index.jsx";
import TableComponent from "./Components/Table/index.jsx";
import "./App.css";
 
function App() {
 const [formData, setFormData] = useState([]);
  return (
    
    <div className="app">
    
       <FormComponent setFormData={setFormData} formData={formData} />
   <TableComponent data={formData} />
    </div>
  );
}
export default App
