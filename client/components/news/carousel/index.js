import React, { useEffect } from 'react';
import styles from './index.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carousel() {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap.bundle.min.js');
	}, []);

	return (
		<div id="carouselSlideOnly" className="carousel carousel-fade" data-bs-ride="carousel">
			<div class="carousel-inner m-0 p-0">
				<div
					className={`${styles['carouselSize']} carousel-item active `}
					data-bs-interval="3000"
				>
					<img src="/photos/articles/dessert_life.jpg" />
				</div>
				<div className={`${styles['carouselSize']} carousel-item`} data-bs-interval="3000">
					<img src="/photos/articles/eatDessertTime.jpg" />
				</div>
				<div className={`${styles['carouselSize']} carousel-item`} data-bs-interval="3000">
					<img src="/photos/articles/BerryUP.jpg" />
				</div>
			</div>

			{/* 手動控制按鈕 */}
			<button
				className={`${styles['carouselBtnLeft']} carousel-control-prev`}
				type="button"
				data-bs-target="#carouselSlideOnly"
				data-bs-slide="prev"
			>
				<span
					className={`${styles['carouselIcon']} carousel-control-prev-icon`}
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className={`${styles['carouselBtnRight']} carousel-control-next`}
				type="button"
				data-bs-target="#carouselSlideOnly"
				data-bs-slide="next"
			>
				<span
					className={`${styles['carouselIcon']} carousel-control-next-icon`}
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}
