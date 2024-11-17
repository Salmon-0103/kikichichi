import React, { useState, useEffect } from 'react';
import Styles from './footer.module.scss';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Footer({ bgColor = 'transparent' }) {
	// const router = useRouter();
	// const currentPath = router.asPath;
	const [logoSrc, setLogoSrc] = useState('/icon/sweet_time_logo1.png');
	const [BGC, setBGC] = useState(bgColor);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 768px)');
		const switchStyleRWD = () => {
			setLogoSrc(
				mediaQuery.matches
					? '/icon/sweet_time_logo1_white.png'
					: '/icon/sweet_time_logo1.png'
			);
			setBGC(mediaQuery.matches ? bgColor : 'transparent');
		};
		switchStyleRWD(); // 初次渲染時設定
		mediaQuery.addEventListener('change', switchStyleRWD);
		return () => mediaQuery.removeEventListener('change', switchStyleRWD);
	}, [bgColor]);

	return (
		<>
			<div className={`${Styles['footerContainer']}`} style={{ backgroundColor: BGC }}>
				<div className={Styles['footer']}>
					<div className={Styles['mainDiv']}>
						<div className={Styles['logoDiv']}>
							<Link href={'/'}>
								{/* <Image className={Styles['logo']} src={logoSrc} fill alt="" /> */}
							</Link>
						</div>
						<div className={Styles['centerDiv']}>
							<h4 className={`${Styles['centerText']} text-center`}>
								If you have any question, please contact:{' '}
								<span className={Styles['pink']}>sweetytime@gmail.com</span>
							</h4>
						</div>
						<div className={Styles['rightDiv']}>
							<h4>
								<Link href={''} className={Styles['link']}>
									About us
								</Link>
							</h4>
							<h4>
								<Link href={''} className={Styles['link']}>
									Contact us
								</Link>
							</h4>
							<h4>
								<Link href={''} className={Styles['link']}>
									Need some help?
								</Link>
							</h4>
						</div>
					</div>
					<div className={Styles['rights']}>
						<h5>@ 2024 KiKiChiChi</h5>
					</div>
				</div>
			</div>
		</>
	);
}
