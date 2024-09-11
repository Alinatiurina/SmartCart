import ShoppingItem from "../ShoppingItem/ShoppingItem";
import css from "./ShoppingList.module.css"

export default function ShoppingList() {
  return (
    <div className={css.container}>
      <ShoppingItem></ShoppingItem>
    </div>
  );
}
