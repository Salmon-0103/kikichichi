import React, { useState, useEffect } from 'react';
import Styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import MenuButton from '../menuButton';
import { useCart } from '@/context/cartContext';
import { useUser } from '@/context/userContext';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FiLogOut } from 'react-icons/fi';

export default function Header(props) {
	const [navOpen, setNavOpen] = useState(false);
	const { cart, handleCart } = useCart();
	const { user, logout } = useUser();
	const router = useRouter();

	const handleAccountClick = (e) => {
		e.preventDefault();
		if (user) {
			// 直接使用 context 中的 user
			router.push('/user/account/profile');
		} else {
			router.push('/login');
		}
	};

	const handleCartClick = (e) => {
		e.preventDefault();
		if (user) {
			// 直接使用 context 中的 user
			router.push('/cart');
		} else {
			router.push('/login');
		}
	};

	// 處理登出
	const handleLogout = async () => {
		await logout(); // 使用 context 中的 logout 函數
		router.push('/');
	};

	return (
		<>
			<header className={`${Styles['header']}`}>
				{/* <div className={`${Styles['centerLine']}`}> 檢查對齊用 </div> */}
				<div className={`${Styles['leftArea']} ps-sm-4 ps-lg-5 pe-lg-5`}></div>

				{/* -----------------手機板------------------ */}
				<Link href={'/'} className={`${Styles['smallLink']} ${Styles['mobileLogo']}`}>
					{/* <Image src={'/icon/sweet_time_logo1.png'} alt="" width={74} height={40} /> */}
				</Link>
				<MenuButton
					className={`${Styles['menuButton']}`}
					navOpen={navOpen}
					setNavOpen={setNavOpen}
					onClick={() => {
						setNavOpen(!navOpen);
					}}
				/>

				<div className={`${navOpen ? Styles['navMobile'] : Styles['navMobileClosed']}`}>
					<ul className={Styles['navList']}>
						<li
							className={`${
								navOpen ? Styles['navOption'] : Styles['navOptionClosed']
							}`}
						>
							<Link href={'/news'} className={Styles['linkText']}>
								News
							</Link>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
}
