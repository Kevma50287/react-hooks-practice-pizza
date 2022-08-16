import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaData, setPizzaData] = useState([])
  const [toEdit, setToEdit] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(r=>r.json())
    .then(data => setPizzaData(data))
  }, [])

  function updatePizza(data){
    const newPizzaData = pizzaData.map((pizza)=>{
      if (pizza.id === data.id){
        return data
      } else {
        return pizza
      }
    });
    setPizzaData(newPizzaData)
  }


  return (
    <>
      <Header />
      <PizzaForm toEdit={toEdit} updatePizza={updatePizza} />
      <PizzaList pizzaData={pizzaData} setToEdit={setToEdit} />
    </>
  );
}

export default App;
