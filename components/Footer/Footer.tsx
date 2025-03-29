'use client';

import { Layout, Row, Col, Divider, Typography, Space } from 'antd';
import {
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
    YoutubeOutlined,
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import './Footer.scss';

const { Footer: AntFooter } = Layout;
const { Text, Title } = Typography;

const Footer = () => {
    return (
        <AntFooter className="app-footer">
            <div className="container mx-auto px-4">
                <Row gutter={[24, 24]}>
                    {/* Về AgriMarket */}
                    <Col xs={24} sm={12} md={6}>
                        <Title level={5} className="footer-title">Về AgriMarket</Title>
                        <Text className="footer-text">
                            AgriMarket là nền tảng kết nối người tiêu dùng với nông sản chất lượng từ khắp mọi miền đất nước.
                        </Text>
                        <Space size="middle" className="footer-social">
                            <a href="#"><FacebookOutlined /></a>
                            <a href="#"><TwitterOutlined /></a>
                            <a href="#"><InstagramOutlined /></a>
                            <a href="#"><YoutubeOutlined /></a>
                        </Space>
                    </Col>

                    {/* Liên kết nhanh */}
                    <Col xs={24} sm={12} md={6}>
                        <Title level={5} className="footer-title">Liên kết nhanh</Title>
                        <ul className="footer-links">
                            <li><Link href="/">Trang chủ</Link></li>
                            <li><Link href="/products/fruits">Trái cây</Link></li>
                            <li><Link href="/products/vegetables">Rau củ</Link></li>
                            <li><Link href="/products/grains">Ngũ cốc</Link></li>
                            <li><Link href="/about">Về chúng tôi</Link></li>
                            <li><Link href="/contact">Liên hệ</Link></li>
                        </ul>
                    </Col>

                    {/* Thông tin liên hệ */}
                    <Col xs={24} sm={12} md={6}>
                        <Title level={5} className="footer-title">Liên hệ</Title>
                        <div className="footer-contact">
                            <p><EnvironmentOutlined /> 123 Đường Nông Sản, Quận 1, TP.HCM</p>
                            <p><PhoneOutlined /> 0901 234 567</p>
                            <p><MailOutlined /> info@agrimarket.vn</p>
                            <p><ClockCircleOutlined /> 8:00 - 18:00 (T2 - CN)</p>
                        </div>
                    </Col>

                    {/* Đăng ký nhận tin */}
                    <Col xs={24} sm={12} md={6}>
                        <Title level={5} className="footer-title">Đăng ký nhận tin</Title>
                        <Text className="footer-text">
                            Nhận thông tin khuyến mãi và sản phẩm mới nhất qua email
                        </Text>
                        <div className="footer-newsletter">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="newsletter-input"
                            />
                            <button className="newsletter-button">Đăng ký</button>
                        </div>
                    </Col>
                </Row>

                <Divider className="footer-divider" />

                <Row justify="space-between" align="middle">
                    <Col>
                        <Text className="footer-copyright">
                            © {new Date().getFullYear()} AgriMarket. Bảo lưu mọi quyền.
                        </Text>
                    </Col>
                    <Col>
                        <Space size="middle">
                            <Link href="/privacy">Chính sách bảo mật</Link>
                            <Link href="/terms">Điều khoản sử dụng</Link>
                            <Link href="/faq">FAQ</Link>
                        </Space>
                    </Col>
                </Row>
            </div>
        </AntFooter>
    );
};

export default Footer;