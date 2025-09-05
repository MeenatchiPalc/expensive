import { useState } from "react";
import "./index.css"
function FormComponent({ formData, setFormData }) {


const [category,setCategory]=useState("")
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [payment, setPayment] = useState("");
  const categories = [
    { category: "Food" },
    { category: "Travel" },
    { category: "Bills" },
    { category: "Health" },
    { category: "Shopping" },
    { category: "Entertainment" }
  ];

const onSubmit=(e)=>{
 e.preventDefault();
setFormData([
      ...formData,
      { category, title, description, amount, payment }
    ]);

}


  return (
    <div className="form-field">
  <form onSubmit={onSubmit}>
  <div className="field">
    <label htmlFor="categories">Categories</label>
    <select id="categories" value={category} onChange={(e) => setCategory(e.target.value)}>
      {categories.map((item) => (
        <option key={item.category} value={item.category}>
          {item.category}
        </option>
      ))}
    </select>
  </div>

  <div className="field">
    <label htmlFor="title">Title</label>
    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
  </div>

  <div className="field">
    <label htmlFor="description">Description</label>
    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
  </div>

  <div className="field">
    <label htmlFor="amount">Amount</label>
    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
  </div>

  <div className="field">
    <label>
      <input
        type="radio"
        name="payment"
        value="cash"
        checked={payment === "cash"}
        onChange={(e) => setPayment(e.target.value)}
      />
      Cash
    </label>
    <label>
      <input
        type="radio"
        name="payment"
        value="card"
        checked={payment === "card"}
        onChange={(e) => setPayment(e.target.value)}
      />
      Card
    </label>
  </div>

  <button type="submit">Add</button>
</form>

 

    </div>
  );
}

export default FormComponent;
