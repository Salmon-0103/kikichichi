import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/header';
import Banner from '@/components/news/banner';
import NewsCard from '@/components/news/newsCard';
import FilterBox from '@/components/news/filterBox';
import Pagination from '@/components/pagination';
import Footer from '@/components/footer';
import styles from '@/styles/news.module.scss';
import axios from 'axios';
import { FaRegCalendarAlt, FaSearch } from 'react-icons/fa';

export default function News() {
	const [showList, setShowList] = useState(false);
	const [news, setNews] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [filterBox, setFilterBox] = useState([]);

	const ITEMS_PER_PAGE = 6; // 每頁顯示的卡片數量
	const showBox = () => {
		setShowList(!showList);
	};

	// 卡片數量
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	let newsToShow = news.slice(startIndex, endIndex);
	let totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);

	// 判斷 filterBox 是否有資料
	if (filterBox == []) {
		newsToShow = news.slice(startIndex, endIndex);
	} else {
		newsToShow = filterBox.slice(startIndex, endIndex);
		totalPages = Math.ceil(filterBox.length / ITEMS_PER_PAGE);
	}
	console.log(filterBox);
	console.log(newsToShow);

	useEffect(() => {
		// 請求 news 表數據
		axios
			.get('http://localhost:3005/api/news')
			.then((response) => setNews(response.data))
			.catch((error) => console.error('Error fetching news:', error));
	}, []);

	// useEffect(() => {
	// 	fetchNews();
	// }, []);

	// const fetchNews = (searchParams) => {
	// 	axios
	// 		.get('http://localhost:3005/api/news', { params: searchParams })
	// 		.then((response) => {
	// 			setNews(response.data);
	// 			setCurrentPage(1);
	// 		})
	// 		.catch((error) => console.error('Error fetching news:', error));
	// };

	useEffect(() => {
		setFilterBox(news);
	}, [news]);

	const handleFilterBox = (data) => {
		setFilterBox(data);
	};

	return (
		<>
			<Header />
			<Banner />
			<div className="container mt-2">
				{/* 手機板 */}
				<div className="row">
					<div className="filter-zone-pc d-none d-md-block">
						<FilterBox news={news} onFilter={handleFilterBox} />
					</div>
					<div className="filter-box d-flex d-md-none justify-content-center gap-3">
						<input
							type="text"
							className={`${styles['CTH-keywords']}`}
							id="keywords"
							placeholder="搜尋更多有趣的文章"
						/>
						<button className={styles['CTH-search']}>
							<FaSearch className={styles['CTH-icon']} />
						</button>
					</div>
				</div>
				{/* 資訊欄 */}
				<div className="row justify-content-center">
					<div className="news-card-group d-flex flex-wrap col-sm-9 col-md-8 justify-content-center">
						{newsToShow
							.filter((item) => item.activation === 1)
							.map((item) => (
								<NewsCard
									key={item.id}
									id={item.id}
									img={item.img_path}
									title={item.title}
									content={item.content}
								/>
							))}
					</div>
				</div>
			</div>
			{/* 分頁 */}
			<div className="mt-5 mb-3">
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={setCurrentPage}
					changeColor="#fe6f67"
				/>
			</div>
			<Footer />
		</>
	);
}
