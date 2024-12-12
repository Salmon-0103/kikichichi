import React, { useState } from 'react';
import Styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import MenuButton from '../menuButton';
import { MdOutlineDisplaySettings } from 'react-icons/md';

export default function Header(props) {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<>
			<header className={`${Styles['header']}`}>
				{/* <div className={`${Styles['centerLine']}`}> 檢查對齊用 </div> */}
				<Link href={'/'}>
					<div className={`${Styles['logo']}`}>KiKiChiChi</div>
				</Link>
				<Link href={'/admin/News'}>
					<div className={`${Styles['admin']} me-3`}>
						<MdOutlineDisplaySettings
							size={35}
							style={{
								color: '#1c3150',
								textAlign: 'right',
								margin: '0.1rem',
								paddingBottom: '0.3rem',
							}}
						/>
						後台管理
					</div>
				</Link>

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
							<Link href={'/admin/News'} className={Styles['linkText']}>
								<MdOutlineDisplaySettings
									size={35}
									style={{
										color: '#1c3150',
										textAlign: 'right',
										margin: '0.1rem',
										paddingBottom: '0.3rem',
									}}
								/>
								後台管理
							</Link>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
}
