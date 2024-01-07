import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPeopleFill } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { FaLockOpen } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Slideshow from "./Slide";

const HomeMenu = () => {
  return (
    // home memu
    <div className="home_Menu">
      {/* logo */}
      <div className="row col-witdh-lg">
        <div className="col-lg-2 col-md-2 col-sm-2 cate-sm">
          <img src="../images/logo.png" alt="" />
        </div>

        {/* form search */}
        <div className="col-lg-3 col-md-3 col-sm-3 cate-sm">
          <form
            className="unica-search-boxtop navbar-form form-inline"
            method="GET"
            action="/search"
          >
            <input
              autoComplete="on"
              name="key"
              id="text_search"
              defaultValue=""
              type="text"
              className="form-control unica-form"
              placeholder="Tìm khóa học, giảng viên"
              required=""
            />{" "}
            <button type="submit" className="btn unica-btn-search"></button>
            <div
              className="autocomplete-search"
              style={{ zIndex: 1, display: "none" }}
            ></div>
          </form>
        </div>

        {/* active */}
        <ul className="col-lg-6 col-md- col-sm-6 cate-sm" id="db_menu">
          <div className="db-item-learn-group ">
            <i /> Kích hoạt khóa học
            <FaLockOpen style={{ margin: 8 }} />
          </div>

          <div className="db-item-learn-group ">
            <BsPeopleFill />
            <i /> Hội viên
          </div>

          <div className="db-item-learn-group ">
            <CiShoppingCart />
          </div>
          <div className="db-item-learn-group ">
            <img
              width={20}
              height="auto"
              src="../images/vietnam.png"
              alt="vi_VN"
              loading="lazy"
            />
          </div>
          <div className="db-item-learn-group ">
            <Button variant="primary">Đăng nhập</Button>{" "}
          </div>
          <div className="db-item-learn-group ">
            <Button variant="primary">Đăng kí</Button>{" "}
          </div>
        </ul>
      </div>

      {/* slide anh */}

      {/* <div className="item-active">
        <img src="../images/anh1.jpg" alt="" />
        <img src="../images/anh2.jpg" alt="" />
        <img src="../images/anh3.png" alt="" />
      </div> */}
      <Slideshow />
    </div>
  );
};
export default HomeMenu;
