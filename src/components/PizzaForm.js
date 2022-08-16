import React, { useEffect, useState } from "react";

function PizzaForm({ toEdit, updatePizza }) {
  const [editForm, setEditForm] = useState({
    "topping": "",
    "size": "",
    "vegetarian": false
  })

  useEffect(() => {
    if (toEdit) {
      setEditForm({
        "topping": toEdit.topping,
        "size": toEdit.size,
        "vegetarian": toEdit.vegetarian
      })
    }
  }, [toEdit])

  const handleChange = (e) => {
    const key = e.target.name
    let value = e.target.value
    if (e.target.value === 'Vegetarian'){
      value = true
    } else if (e.target.value === 'Not Vegetarian'){
      value = false
    }
    const newObj = { ...editForm, [key]:value }
    console.log(newObj)
    setEditForm(newObj)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3001/pizzas/${toEdit.id}`, {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(editForm),
    })
    .then(r => r.json())
    .then(data => {
      console.log(data)
      updatePizza(data)})
    .catch(err=>console.log(err))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={editForm.topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={editForm.size} onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={editForm.vegetarian}
              onChange={handleChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!editForm.vegetarian}
              onChange={handleChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
