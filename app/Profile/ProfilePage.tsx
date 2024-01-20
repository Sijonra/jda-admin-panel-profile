import style from './ProfilePage.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Profile = () => {
	return <div className={cx('profile-page')}></div>;
};

export default Profile;
