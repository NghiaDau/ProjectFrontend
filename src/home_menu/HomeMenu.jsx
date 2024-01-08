import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Hearder";
import Slideshow from "./Slide";
import ListProduct from "./ListProduct";
const HomeMenu = () => {
  return (
    // home memu
    <div className="home_menu">
      {/* header */}
      <Header/>
      {/* banner */}
      <Slideshow/>
      {/* <div className="item-active">
        <img src="../images/anh1.jpg" alt="" />
        <img src="../images/anh2.jpg" alt="" />
        <img src="../images/anh3.png" alt="" />
      </div> */}
      <ListProduct />
    </div>
  );
};
export default HomeMenu;
