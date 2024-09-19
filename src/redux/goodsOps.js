import axios from "axios";

const URL = 'https://663c890717145c4d8c36a103.mockapi.io/ShopList';

export async function  fetchGoods(){
  const response = await axios.get(URL);
  return response.data;
}

export async function addGood(newGoods) {
  
  try {
    const response = await axios.post(URL, newGoods);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const deleteGood = async (goodId) => {
  try {
    const response = await axios.delete(`${URL}/${goodId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export async function clearAllGoods(goods) {
  try {
    await Promise.all(goods.map((good) => deleteGood(good.id)));
  } catch (error) {
    throw new Error("Помилка при очищенні списку: " + error.message);
  }
}