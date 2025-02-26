import { useState } from 'react';
import ExpandButton from '@/components/button/expand-button';
import Link from 'next/link';

export default function Login() {
	return (
		<>
			<div>
				<Link href={'/'}>
					<ExpandButton value="回首頁" />
				</Link>
			</div>

			<div>
				<h1>Sign in</h1>
				<form>
					<input type="account" name="account" placeholder="Account" />
					<div>
						<input type="password" name="password" placeholder="Password" />
						<button type="button">顯示密碼</button>
					</div>
					<div>
						<input type="checkbox" />
						<label>記住我</label>
					</div>
					<div>
						<button>登入</button>
					</div>
				</form>
				<div>
					<button>註冊</button>
				</div>
				<h1>我要吃甜不辣現在就要</h1>
			</div>
		</>
	);
}
