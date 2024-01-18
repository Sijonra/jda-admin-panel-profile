import style from './page.module.scss';
import classNames from 'classnames/bind';
import '../styles/themes.css';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SideBar from '@/components/SideBar/SideBar';
import Ecommerce from '@/components/EcommerceDashboard/Ecommerce';
import Reviews from '@/components/Reviews/Reviews';
import Regions from '@/components/Regions/Regions';
import Rates from '@/components/Rates/Rates';

const cx = classNames.bind(style);

export default function Home() {
	return (
		<div className={cx('page')}>
			<Header />
			<SideBar />
			<main className={cx('main')}>
				<Ecommerce />
				<Reviews />
				<Regions />
				<Rates />
			</main>
			<Footer />
		</div>
	);
}
