import Header from '@/components/Header/Header';
import style from './ProfilePage.module.scss';
import '../../styles/themes.css';

import classNames from 'classnames/bind';
import SideBar from '@/components/SideBar/SideBar';
import ProfileLeft from '@/components/Profile/ProfileLeftColumn/ProfileLeft';

const cx = classNames.bind(style);

const Profile = () => {
	return (
		<div className={cx('page')}>
			<Header />
			<SideBar />
			<main className={cx('main')}>
				<ProfileLeft />
			</main>
		</div>
	);
};

export default Profile;
