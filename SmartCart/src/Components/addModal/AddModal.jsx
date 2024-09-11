export function AddModal() {
  return (
    <form action="">
      <h2>Додай товар</h2>
      <button type="button" name="close"></button>
      <label for="title">Назва:</label>
      <input type="text" name="title" id="title" placeholder="Хліб" />
      <label for="quantity">Кількість:</label>
      <input type="text" name="quantity" id="quantity" placeholder="1" />
      <label for="unit">Одиниці виміру:</label>
      <select name="unit" id="unit">
        <option value="кг">кг</option>
        <option value="л">л</option>
        <option value="м">м</option>
        <option value="шт">шт</option>
      </select>
      <label for="title">Вартість:</label>
      <input type="text" name="cost" id="cost" placeholder="58.50" />
      <button name="submit"></button>
    </form>
  );
}
