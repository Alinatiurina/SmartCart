import { LiaPenSolid } from "react-icons/lia";
import { AiOutlineDelete } from "react-icons/ai";
import css from "./ShoppingItem.module.css";

export default function ShoppingItem() {
  return (
    <div className={css.container}>
      <input
        className={css.input}
        type="checkbox"
        name="titleProduct"
        id="titleProduct"
      />
      <label className={css.label} htmlFor="titleProduct">
        Хліб
      </label>
        <div className={css.textContainer}>
          <p className={css.text}>1 шт</p>
          <p className={css.price}>20 грн.</p>
        </div>
      
      <div className={css.btnContainer}>
        <button className={css.btn}>
          <LiaPenSolid />
        </button>
        <button className={css.btn}>
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}
