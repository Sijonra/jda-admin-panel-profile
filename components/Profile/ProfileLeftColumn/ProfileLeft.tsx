import ProfileCard from '../ProfileCard/ProfileCard';
import ProfileMessages from '../ProfileMessages/ProfileMessages';
import ProfileNav from '../ProfileNav/ProfileNav';
import style from './ProfileLeft.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const ProfileLeft = () => {
	return (
		<div className={cx('profile-left')}>
			<ProfileCard />
			<ProfileNav />
			<ProfileMessages />
		</div>
	);
};

export default ProfileLeft;
