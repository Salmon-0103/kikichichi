// components/AdminLayout.js
import React from 'react';
import AdminNavbar from '@/components/adminNavbar';
import AdminMainContent from '@/components/adminMainContent';
import styles from '@/styles/admin.module.scss';

const AdminLayout = ({ children, currentPage, totalPages, onPageChange }) => {
	return (
		<div className={styles.adminContainer}>
			<AdminNavbar />
			<div className={`${styles.mainBody}`}>
				<AdminMainContent
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={onPageChange}
				>
					{children}
				</AdminMainContent>
			</div>
		</div>
	);
};

export default AdminLayout;
