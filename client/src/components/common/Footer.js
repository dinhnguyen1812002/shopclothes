import React from "react";

function Footer() {
    return (
        <>
            {/* 7. Gallery */}
            {/* <section className="section section-gallery">
                <div className="container-fluid">
                    <div className="row">
                        <div className="list-gallery clearfix">
                            
                        </div>
                    </div>
                </div>
            </section> */}
            <footer className="main-footer mainfooter-toolbar ">
                <div className="main-footer--bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg">
                                <div className="footer-col footer-block">
                                    <h4 className="footer-title"> SHOP 2HAND</h4>
                                    <div className="footer-content toggle-footer">
                                        <ul>
                                            <li className="item">
                                                <a
                                                    href="/pages/about-us"
                                                    title="Giới thiệu"
                                                >
                                                    Giới thiệu
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a
                                                    href="https://onapp.haravan.com/orderstrackingphone/shop/kenta"
                                                    target="_blank"
                                                    title="Kiểm tra đơn hàng"
                                                >
                                                    Kiểm tra đơn hàng
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a
                                                    href="/pages/huong-dan-chon-size"
                                                    title="Cách chọn size"
                                                >
                                                    Cách chọn size
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a
                                                    href="/pages/lien-he"
                                                    title="Thông tin liên hệ"
                                                >
                                                    Thông tin liên hệ
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a
                                                    href="/pages/cau-hoi-thuong-gap"
                                                    title="Câu hỏi thường gặp"
                                                >
                                                    Câu hỏi thường gặp
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a
                                                    href="/pages/huong-dan-bao-quan"
                                                    title="Hướng dẫn bảo quản"
                                                >
                                                    Hướng dẫn bảo quản
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg">
                                <div className="footer-col footer-link">
                                    <h4 className="footer-title">CHÍNH SÁCH</h4>
                                    <div className="footer-content toggle-footer">
                                        <ul>
                                            <li className="item">
                                                <a
                                                    href="/pages/huong-dan-mua-hang"
                                                    title="Hướng dẫn mua hàng"
                                                >
                                                    Hướng dẫn mua hàng
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a
                                                    href="/pages/khach-hang-than-thiet"
                                                    title="Khách hàng thân thiết"
                                                >
                                                    Khách hàng thân thiết
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a
                                                    href="/pages/chinh-sach-doi-hang"
                                                    title="Chính sách đổi hàng"
                                                >
                                                    Chính sách đổi hàng
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a
                                                    href="/pages/chinh-sach-bao-mat"
                                                    title="Chính sách bảo mật"
                                                >
                                                    Chính sách bảo mật
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a
                                                    href="/pages/doi-tac-san-xuat"
                                                    title="Đối tác sản xuất"
                                                >
                                                    Đối tác sản xuất
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a
                                                    href="/pages/cong-tac-vien-kenta"
                                                    title="Bán hàng liên kết (Affiliate)"
                                                >
                                                    Bán hàng liên kết
                                                    (Affiliate)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg">
                                <div className="footer-col footer-block">
                                    <h4 className="footer-title">
                                        Kết nối với SHop
                                    </h4>
                                    <div className="footer-content">
                                        <div className="social-list">
                                            <a
                                                href="https://www.facebook.com/kentavietnam"
                                                target="_blank"
                                                className="fa fa-facebook"
                                            />
                                            <a
                                                href="https://g.page/kentashop?share"
                                                target="_blank"
                                                className="fa fa-google"
                                            />
                                            <a
                                                href="https://www.instagram.com/kenta.vietnam/"
                                                target="_blank"
                                                className="fa fa-instagram"
                                            />
                                            <a
                                                href="https://www.tiktok.com/@kenta.vn"
                                                target="_blank"
                                                style={{
                                                    background:
                                                        "transparent!important",
                                                }}
                                            >
                                                <img src="//theme.hstatic.net/1000096703/1000836887/14/tiktok.png?v=241" />
                                            </a>
                                        </div>
                                        <div className="logo-footer">
                                            <a href="http://online.gov.vn/Home/WebDetails/3561">
                                                <img
                                                    src="https://file.hara.vn/1000114117/file/logo-bct_5a0bbf4fb2d34c3e88c04df41ad38dc9.png"
                                                    alt="Bộ Công Thương"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg">
                                <div className="footer-col footer-block">
                                    <h4 className="footer-title active">
                                        Thông tin cửa hàng
                                    </h4>
                                    <div
                                        className="footer-content toggle-footer"
                                        style={{ display: "block" }}
                                    >
                                        <ul className="information">
                                            <li>
                                                <img src="//theme.hstatic.net/1000096703/1000836887/14/buildings.png?v=241" />
                                                <span /> 01 Võ Văn Ngân, Linh
                                                Chiểu, Thủ Đức, Thành phố Hồ Chí
                                                Minh
                                            </li>
                                            <li>
                                                <img src="//theme.hstatic.net/1000096703/1000836887/14/communications.png?v=241" />
                                                <span>Hotline:</span> 0834505170{" "}
                                            </li>
                                            <li>
                                                <img src="//theme.hstatic.net/1000096703/1000836887/14/envelopes.png?v=241" />
                                                <span>Mail:</span>{" "}
                                                shop@gmail.com
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-footer--copyright">
                    <div className="container">
                        <div className="main-footer--border">
                            <p>
                                Copyright © 2024{" "}
                                <a href="http://localhost:3000/"> Shop quan ao</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
