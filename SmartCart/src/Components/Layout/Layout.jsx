import ShopingPage from "../../pages/ShopingPage/ShopingPage";
import css from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={css.container}>
      <a className={css.logo} href="../../../index.html">
        {/* <img src="../../img/Logo.png" alt="logo cart" /> */}
        SmartCart
      </a>
      <ShopingPage></ShopingPage>
    </div>
  );
}
