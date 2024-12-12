import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/header';
import Suggest from '@/components/news/suggest';
import Footer from '@/components/footer';
import styles from '@/styles/newsDetail.module.scss';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function NewsDetail(props) {
	const router = useRouter();
	const { id } = router.query;
	const [news, setNews] = useState(null); // 設為 null 以便進行加載判斷
	const [product, setProducts] = useState([]); // 存放 product 資料
	const [lessons, setLessons] = useState([]); // 存放 lesson 資料

	// 抓取單一文章資料
	useEffect(() => {
		console.log('Current news ID:', id);
		if (id) {
			axios
				.get(`http://localhost:3005/api/news/${id}`)
				.then((res) => {
					setNews(res.data);
				})
				.catch((error) => console.error('拿不到新聞資料', error));
		}
	}, [id]);

	// 移除 content 中的 <p></p> 標籤
	// const cleanContent = (content) => {
	// 	const tempDiv = document.createElement('div');
	// 	tempDiv.innerHTML = content; // 將 HTML 字串插入虛擬的 DOM 元素中
	// 	return tempDiv.textContent || tempDiv.innerText || ''; // 獲取純文字內容
	// };
	const sanitizeContent = (content) => {
		const sanitizedContent = content.replace();
		return sanitizedContent;
	};

	return (
		<>
			<Header />
			{news ? (
				<>
					<div className="container">
						<div className="d-flex align-content-start">
							{/* 標題 */}
							<div className={`${styles['LYT-newsDetailAll']}`}>
								<div className={`${styles['LYT-ceated']}`}>
									<h2 className="fw-bold">{news.title}</h2>
									<h4 className="d-flex justify-content-center">
										by 甜覓小編 {news.createdAt}
									</h4>
								</div>

								{/* 圖片 */}

								{news.img_path && (
									<Image
										src={`/photos/articles/${news.img_path}`} // 確保這是完整路徑
										width={800}
										height={500}
										style={{ objectFit: 'contain' }}
										alt={news.title || 'News Image'}
										className={styles['image']}
										priority // 優先加載
									/>
								)}
								{/* 文字區 */}
								<div
									className={`${styles['LYT-newsDetail-content']}`}
									dangerouslySetInnerHTML={{
										__html: sanitizeContent(news.content),
									}}
								/>
							</div>
						</div>
					</div>

					<div className={`${styles['LYT-detail-bg']} m-0`}>
						<Footer />
					</div>
				</>
			) : (
				<h1>載入中...</h1>
			)}
		</>
	);
}
