import ShoppingItem from "../ShoppingItem/ShoppingItem";
import css from "./ShoppingList.module.css"

export default function ShoppingList({ refreshGoods, setGoods }) {
  return (
    <div className={css.container}>
      <ShoppingItem refreshGoods={refreshGoods} setGoods={setGoods} />
    </div>
  );
}
