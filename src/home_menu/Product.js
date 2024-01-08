
const Product = (props) =>{
    return (
        <div className="col-lg-3 col-md-3 col-sm-6 course-popover">
            <a href="/facebook-marketing-tu-a-z" className="course-box-slider pop">
                <span className="sale-off">-30%</span>{" "}
                <div className="img-course">
                    <img
                        className="img-responsive "
                        src="https://static.unica.vn/upload/images/2019/04/facebook-marketing-a-z_m_1555557477.jpg"
                        alt="Facebook Marketing từ A - Z"
                        style={{ width: "100%" }}
                        loading="lazy"
                    />
                </div>
                <div className="content-course">
                <h3 className="title-course">
                    <p>Facebook Marketing từ A - Z</p>
                </h3>
                <div className="name-gv">
                    <b style={{ float: "left" }}>Hồ Ngọc Cương</b>
                    <span className="price-b">
                    1.000.000<sup>đ</sup>
                    </span>
                </div>
                </div>
                <div className="price-course" style={{ clear: "both" }}>
                    <div className="rate-combo">
                        <p>
                            <span className="star-rate">
                                <i className="fa fa-star co-or" aria-hidden="true" />
                                <i className="fa fa-star co-or" aria-hidden="true" />
                                <i className="fa fa-star co-or" aria-hidden="true" />
                                <i className="fa fa-star co-or" aria-hidden="true" />
                                <i className="fa fa-star co-or" aria-hidden="true" /> (620){" "}
                            </span>
                        </p>
                    </div>
                    <span className="price-a">
                        699.000<sup>đ</sup>
                    </span>
                </div>
            </a>
        </div>
    )
}
export default Product;