
import Button from "react-bootstrap/Button";

const Header = () => {
    return (
        <div className="row col-witdh-lg header">
            <div className="col-lg-2 col-md-2 col-sm-2 cate-sm">
                <img src="../images/logo.png" alt="" />
            </div>

            {/* form search */}
           
            <div className="col-lg-3 col-md-3 col-sm-3 cate-sm">
                <form
                    className="unica-search-boxtop navbar-form form-inline"
                    method="GET"
                    action="/search">
                        <input
                        autoComplete="on"
                        name="key"
                        id="text_search"
                        defaultValue=""
                        type="text"
                        className="form-control unica-form"
                        placeholder="Tìm khóa học, giảng viên"
                        required=""/>{" "}
                    <button type="submit" className="btn unica-btn-search"></button>
                    <div
                    className="autocomplete-search"
                    style={{ zIndex: 1, display: "none" }}
                    ></div>
                </form>
            </div>
           
            

            {/* active 
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
            */}
            
            <ul className="col-lg-6  col-sm-6 cate-sm" id="db_menu">
                <div className="db-item-learn-group ">
                    <img
                        width={20}
                        height="auto"
                        src="../images/vietnam.png"
                        alt="vi_VN"
                        loading="lazy" 
                        /></div>
                <div className="db-item-learn-group ">
                    <Button variant="primary">Đăng nhập</Button>{" "}
                </div>
                <div className="db-item-learn-group ">
                    <Button variant="primary">Đăng kí</Button>{" "}
                </div>
            </ul>
        </div>
    )
}
export default Header;