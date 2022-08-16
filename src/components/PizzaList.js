import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzaData, setToEdit}) {

  const pizzaArr = pizzaData.map((pizza) => <Pizza key={pizza.id} pizza={pizza} setToEdit={setToEdit} />)

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          //render Pizza here
          pizzaArr
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
