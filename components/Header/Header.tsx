'use client';

import Link from 'next/link';
import Button from '@/components/core/Button/Button';
import './Header.scss';
const Header = () => {
    //   const { data: session } = useSession();

    return (
        <header className="header">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <Link href="/" className="logo text-2xl font-bold text-primary">
                        AgriMarket
                    </Link>

                    {/* <div className="search-bar flex-grow mx-8">
            <SearchBar />
          </div> */}

                    <nav className="flex items-center space-x-4">
                        {/* {session ? (
                            <>
                                <Link href="/cart" className="text-gray-700 hover:text-primary">
                                    Giỏ hàng
                                </Link>
                                <Link href="/dashboard" className="text-gray-700 hover:text-primary">
                                    Dashboard
                                </Link>
                                <Button onClick={() => signOut()} variant="outline">
                                    Đăng xuất
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link href="/auth/login" className="text-gray-700 hover:text-primary">
                                    Đăng nhập
                                </Link>
                                <Link href="/auth/register">
                                    <Button variant="primary">Đăng ký</Button>
                                </Link>
                            </>
                        )} */}
                        <Link href="/cart" className="text-gray-700 hover:text-primary">
                            Giỏ hàng
                        </Link>
                        <Link href="/dashboard" className="text-gray-700 hover:text-primary">
                            Dashboard
                        </Link>
                        <Button
                            // onClick={() => signOut()}
                            customVariant="outline">
                            Đăng xuất
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;