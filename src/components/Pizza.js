import React from "react";

function Pizza({pizza, setToEdit}) {
  //object destructuring
  const {id, topping, size, vegetarian} = pizza

  function handleEdit (){
    setToEdit(pizza)
  }
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{`${vegetarian}`}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleEdit}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
