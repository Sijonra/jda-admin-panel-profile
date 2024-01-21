import ProfileCard from '../ProfileCard/ProfileCard';
import style from './ProfileLeft.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const ProfileLeft = () => {
	return (
		<>
			<div className={cx('profile-left')}>
				<ProfileCard />
			</div>
		</>
	);
};

export default ProfileLeft;
