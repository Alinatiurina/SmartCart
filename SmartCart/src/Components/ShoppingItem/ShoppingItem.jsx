import { LiaPenSolid } from "react-icons/lia";
import { AiOutlineDelete } from "react-icons/ai";
import css from "./ShoppingItem.module.css";
import { fetchGoods, deleteGood } from "../../redux/goodsOps";
import { useEffect, useState } from "react";

export default function ShoppingItem({ refreshGoods, setGoods }) {
  const [localGoods, setLocalGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getGoods() {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchGoods();
      setLocalGoods(data.map(good => ({
        ...good,
        checked: JSON.parse(localStorage.getItem(good.id)) || false // Відновлення стану чекбоксу
      })));
      setGoods(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getGoods();
  }, [refreshGoods]);

  const handleDelete = async (goodId) => {
    try {
      await deleteGood(goodId);
      setLocalGoods((prevGoods) => prevGoods.filter((good) => good.id !== goodId));
      setGoods((prevGoods) => prevGoods.filter((good) => good.id !== goodId));
      localStorage.removeItem(goodId); // Видалення з localStorage
    } catch (error) {
      console.error("Error deleting good:", error);
    }
  };

  const handleCheckboxChange = (id) => {
    setLocalGoods((prevGoods) =>
      prevGoods.map((good) => {
        const isChecked = good.id === id ? !good.checked : good.checked;
        localStorage.setItem(good.id, isChecked); // Збереження стану чекбоксу в localStorage
        return { ...good, checked: isChecked };
      })
    );
  };

  return (
    <ul className={css.list}>
      {loading && <p>Завантаження...</p>}
      {error && <p>Помилка при завантаженні даних</p>}
      {localGoods.map((good) => (
        <li key={good.id} className={css.container}>
          <input
            className={css.input}
            type="checkbox"
            checked={good.checked || false}
            onChange={() => handleCheckboxChange(good.id)}
            id={`checkbox-${good.id}`} // Унікальний id для чекбоксу
          />
          <label className={css.label} htmlFor={`checkbox-${good.id}`}>
            {good.title}
          </label>
          <div className={css.textContainer}>
            <p className={css.text}>
              {good.quantity} {good.unit}
            </p>
            <p className={css.price}>{good.cost} грн.</p>
          </div>
          <div className={css.btnContainer}>
            <button className={css.btn}>
              <LiaPenSolid />
            </button>
            <button
              className={css.btn}
              onClick={() => handleDelete(good.id)}
            >
              <AiOutlineDelete />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
