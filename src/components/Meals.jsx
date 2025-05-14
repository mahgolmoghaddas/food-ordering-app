import { useState, useEffect } from "react";

import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.jsx";

const config ={
  method: 'GET'
}

export default function Meals() {


  const {data: loadedMeals, isLoading, error} = useHttp('http://localhost:3000/meals',config, [])

  console.log("meals", loadedMeals);

  if(!loadedMeals){
    return <p>Loading...</p>
  }

  if(error){
    return <p>{error}</p>
  }


  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
