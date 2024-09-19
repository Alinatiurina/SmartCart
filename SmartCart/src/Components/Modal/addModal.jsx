import css from "./addModal.module.css";
import { useState } from "react";

export default function AddModal({ onClose, onAddGood }) {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [unit, setUnit] = useState("шт");
  const [cost, setCost] = useState("0");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { title, quantity, unit, cost };
    onAddGood(formData);
  };

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button onClick={onClose} className={css.closeBtn}>
          &times;
        </button>
        <h2 className={css.title}>Додай товар</h2>
        <form onSubmit={handleSubmit} className={css.form}>
          <label className={css.label} htmlFor="title">
            Назва:
          </label>
          <input
            className={css.input}
            type="text"
            id="title"
            placeholder="Хліб"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label className={css.label} htmlFor="quantity">
            Кількість:
          </label>
          <input
            className={css.input}
            type="number"
            id="quantity"
            placeholder="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />

          <label className={css.label} htmlFor="unit">
            Одиниці виміру:
          </label>
          <select
            className={css.input}
            id="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            required
          >
            <option value="шт">шт</option>
            <option value="л">л</option>
            <option value="кг">кг</option>
            <option value="м">м</option>
          </select>

          <label className={css.label} htmlFor="cost">
            Вартість:
          </label>
          <input
            className={css.input}
            type="number"
            id="cost"
            placeholder="10.00"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
           
          />

          <button type="submit" className={css.addBtn}>
            Додати
          </button>
        </form>
      </div>
    </div>
  );
}
