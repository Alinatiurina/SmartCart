import ShoppingList from "../../Components/ShoppingList/ShoppingList";
import css from "./ShopingPage.module.css";
import { BsCartCheck } from "react-icons/bs";
import { BsCartDash } from "react-icons/bs";
import { BiSort } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";

export default function ShopingPage() {
  return (
    <>
      <div className={css.container}>
        <div>
          <div className={css.sortContainer}>
            <div className={css.box}>
              <p className={css.title}>Мій список</p>
              <div className={css.sortBtnContainer}>
                <button className={css.sortBtn}>
                  <BiSort />
                </button>
                <button className={css.sortBtn}>
                  <BsCartCheck />
                </button>
                <button className={css.sortBtn}>
                  <BsCartDash />
                </button>
              </div>
            </div>
            <button className={css.addBtn}>
              <CiCirclePlus className={css.addIcon} />
              Додати
            </button>
          </div>
          <ShoppingList></ShoppingList>
        </div>
        <div>
          <p className={css.text}>Загальна вартість:</p>
          <p className={css.text}>Загальна кількість:</p>
          <p className={css.text}>Залишилось купити:</p>
          <div className={css.boxBtn}>
            <button className={css.clearBtn}>Очистити список</button>
            <button className={css.addBtnButton}>Додати</button>
          </div>
        </div>
      </div>
    </>
  );
}
