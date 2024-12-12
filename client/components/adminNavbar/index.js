import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from 'react-bootstrap';
import { AiOutlineBell, AiOutlineUser } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import styles from './admin-navbar.module.scss';
import { useRouter } from 'next/router';
import { useUser } from '@/context/userContext';

const AdminNavbar = () => {
	const { user, logout } = useUser();
	const router = useRouter();

	// 處理登出
	const handleLogout = async () => {
		await logout(); // 使用 context 中的 logout 函數
		router.push('/');
	};
	return (
		<Navbar expand="lg" className={`${styles.navbar} fixed-top`}>
			<div className="d-flex align-items-center">
				{/* Logo */}
				<Link href={'/'}>
					<div className={`${styles['logo']}`}>KiKiChiChi</div>
				</Link>
			</div>
		</Navbar>
	);
};

export default AdminNavbar;
