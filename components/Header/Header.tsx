import Link from 'next/link'
import './Header.scss'
import Button from '../core/Button/Button'

// import { useAuth } from '@/contexts/AuthContext'

const Header = () => {
    // const { user, logout } = useAuth()

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link href="/">Dâu Tây Đà Lạt</Link>
                </div>
                <nav className="navigation">
                    <ul>
                        <li><Link href="/">Trang chủ</Link></li>
                        <li><Link href="/dashboard">Thống kê</Link></li>
                        <li><Link href="/order">Đặt hàng</Link></li>
                    </ul>
                </nav>
                <div className="auth-section">
                    {/* {user ? (
                        <>
                            <span>Xin chào, {user.name}</span>
                            <Button onClick={logout} type="text">Đăng xuất</Button>
                        </>
                    ) : (
                        <Link href="/login">
                            <Button type="primary">Đăng nhập</Button>
                        </Link>
                    )} */}
                    <Link href="/login">
                        <Button type="primary">Đăng nhập</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header