import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Btn = () => {
	const showAlert = () => {
		MySwal.fire({
			title: '標題',
			text: '訊息',
			icon: 'info', // 圖示
			showCloseButton: true,
			showCancelButton: true,
			focusConfirm: false,
			cancelButtonText: '取消', // 按下確定可以關閉視窗
			confirmButtonText: '確定', //取消按鈕
			reverseButtons: true,
			footer: '<a href="#">這裡是一個點的連結</a>',
		});
	};

	return (
		<button onClick={showAlert} style={{ padding: '10px 20px', fontSize: '16px' }}>
			顯示彈跳式視窗
		</button>
	);
};

export default Btn;

// 更多資訊和範例演示: https://sweetalert2.github.io/
