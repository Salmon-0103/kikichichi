import React, { useState, useEffect } from 'react';
import Styles from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function NewsCard({
	id = 1,
	title = '美味料理食譜：經典法式甜點！檸檬萊姆塔的酸甜滋味',
	content = '偷偷告訴妳，檸檬塔的故事\n這是一道傳統且歷史久遠，並且已有多樣化演變的甜點。從名稱 Tarte au Citron 或許會直接聯想到甜點王國-法國，不過檸檬塔最早緣起和流行於地中海一帶，而法國的檸檬塔最早起源自法國南部城市-芒通 (Menton, France)。',
	img = 'dessertStomach.jpg',
	createdAt = '2024-08-16 14:50:00',
	activation = 1,
}) {
	const sanitizeContent = (content) => {
		const sanitizedContent = content.replace();
		return sanitizedContent.length > 100
			? sanitizedContent.slice(0, 78) + '...'
			: sanitizedContent;
	};
	return (
		<>
			{/* 卡片區 */}
			<div>
				<div className={`${Styles['LYT-card']}`}>
					<Image
						src={`/photos/articles/${img}`}
						width={200}
						height={200}
						className={`${Styles['LYT-news-card-img']}`}
					/>
					<div className={`${Styles['LYT-content']} mb-4`}>
						<h4>{`${title.slice(0, 25) + '...'} `}</h4>
						<p dangerouslySetInnerHTML={{ __html: sanitizeContent(content) }} />
						<p className={`${Styles['time']}`}>{`${createdAt}`}</p>
						<Link href={`/${id}`}>
							<button className="btn">
								<FaArrowRightLong size={20} />
								看更多
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
