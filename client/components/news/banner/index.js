import React, { useState, useEffect } from 'react';
import Styles from './index.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Banner(props) {
	return (
		<>
			<div className={Styles['LYT-banner']}>
				{/* <div className={Styles['banner-left']}>
					<Image
						src={'/photos/articles/cakeForBanner.png'}
						width={250}
						height={250}
						alt=""
						className={Styles['image']}
					/>
				</div> */}
				<div className={Styles['banner-text']}>
					<div className="mt-5">本月精選文章</div>
				</div>
			</div>
		</>
	);
}
