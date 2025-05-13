import Button from "../elements/Button";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function MealItem({ meal }) {
  const cartContext = useContext(CartContext);

  const handleAddItem = () => {
    cartContext.addItem(meal);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddItem}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
