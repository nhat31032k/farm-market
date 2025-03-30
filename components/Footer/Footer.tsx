import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Dâu Tây Đà Lạt</h3>
                        <p>Chuyên cung cấp dâu tây Đà Lạt chất lượng cao</p>
                    </div>
                    <div className="footer-section">
                        <h3>Liên hệ</h3>
                        <p>Email: info@dautaydalat.com</p>
                        <p>Điện thoại: 0123 456 789</p>
                    </div>
                    <div className="footer-section">
                        <h3>Địa chỉ</h3>
                        <p>123 Đường Dâu Tây, Đà Lạt, Lâm Đồng</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Dâu Tây Đà Lạt. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer