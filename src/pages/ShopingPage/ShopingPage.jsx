import { useState, useEffect } from "react";
import css from "./ShopingPage.module.css";
// import { CiCirclePlus } from "npm i react-icons/ci";
import { addGood, clearAllGoods } from "../../redux/goodsOps";
import Modal from "../../Components/Modal/addModal";
import ShoppingList from "../../Components/ShoppingList/ShoppingList";

export default function ShopingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshGoods, setRefreshGoods] = useState(false);
  const [goods, setGoods] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [remainingQuantity, setRemainingQuantity] = useState(0);
  const [checkedQuantity, setCheckedQuantity] = useState(0);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddGood = async (formData) => {
    try {
      await addGood(formData);
      setRefreshGoods((prev) => !prev);
      handleModalClose(); 
    } catch (error) {
      console.error("Error adding good:", error);
    }
  };

  const handleClearList = async () => {
    try {
      await clearAllGoods(goods);
      setRefreshGoods((prev) => !prev);
    } catch (error) {
      console.error("Error clearing list:", error);
    }
  };


  useEffect(() => {
    const total = goods.reduce((sum, item) => sum + parseFloat(item.cost), 0);
    const quantity = goods.reduce((sum, item) => sum + parseInt(item.quantity), 0);
    const remaining = goods.filter(item => !item.checked).length; 
    const checked = goods.filter(item => item.checked).length; 

    setTotalCost(total);
    setTotalQuantity(quantity);
    setRemainingQuantity(remaining);
    setCheckedQuantity(checked);
  }, [goods]);

  return (
    <>
      <div className={css.container}>
        <div>
          <div className={css.sortContainer}>
            <div className={css.box}>
              <p className={css.title}>Мій список</p>
            </div>
            <button className={css.addBtn} onClick={handleModalOpen}>
              {/* <CiCirclePlus className={css.addIcon} /> */}
              Додати
            </button>
          </div>
          <ShoppingList refreshGoods={refreshGoods} setGoods={setGoods} />
        </div>

        <div>
          <p className={css.text}>Загальна вартість: {totalCost.toFixed(2)} грн</p>
          <p className={css.text}>Загальна кількість: {totalQuantity} шт</p>
          {/* <p className={css.text}>Залишилось купити: {remainingQuantity} шт</p> */}
          <div className={css.boxBtn}>
            <button className={css.clearBtn} onClick={handleClearList}>
              Очистити список
            </button>
            <button className={css.addBtnButton} onClick={handleModalOpen}>
              Додати
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={handleModalClose} onAddGood={handleAddGood} />
      )}
    </>
  );
}
