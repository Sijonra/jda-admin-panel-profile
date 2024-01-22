import style from './ProfileNav.module.scss';

import classNames from 'classnames/bind';

import SVGFollowers from '@/public/assets/ProfilePage/icons/followers.svg';
import SVGCommunity from '@/public/assets/ProfilePage/icons/community.svg';
import SVGMedia from '@/public/assets/ProfilePage/icons/media.svg';
import SVGCalendar from '@/public/assets/ProfilePage/icons/calendar.svg';
import SVGGames from '@/public/assets/ProfilePage/icons/games.svg';
import SVGSettings from '@/public/assets/ProfilePage/icons/settings.svg';

const cx = classNames.bind(style);

const ProfileNav = () => {
	return (
		<nav className={cx('nav')}>
			<a href='!#' className={cx('nav__item', 'nav__followers')}>
				<SVGFollowers /> <span>Followers</span>
			</a>
			<a href='!#' className={cx('nav__item', 'nav__communities')}>
				<SVGCommunity /> <span>Communities</span>
			</a>
			<a href='!#' className={cx('nav__item', 'nav__media')}>
				<SVGMedia /> <span>Media Files</span>
			</a>
			<a href='!#' className={cx('nav__item', 'nav__events')}>
				<SVGCalendar /> <span>Events</span>
			</a>
			<a href='!#' className={cx('nav__item', 'nav__games')}>
				<SVGGames /> <span>Games</span>
			</a>
			<a href='!#' className={cx('nav__item', 'nav__settings')}>
				<SVGSettings /> <span>Settings</span>
			</a>
		</nav>
	);
};

export default ProfileNav;
