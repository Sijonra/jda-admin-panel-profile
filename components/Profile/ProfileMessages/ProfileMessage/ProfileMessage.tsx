import style from './ProfileMessage.module.scss';

import classNames from 'classnames/bind';

import PNGStanly from '@/public/assets/ProfilesIcons/stanly.webp';
import ProfileIcon from '@/components/common/ProfileIcon/ProfileIcon';

const cx = classNames.bind(style);

const ProfileMessage = () => {
	return (
		<div className={cx('message')}>
			<div className={cx('message__photo')}>
				<ProfileIcon src={PNGStanly} height={32} width={32} isOnline />
			</div>
			<div className={cx('message__content')}>
				<p className={cx('message__author')}>Stanly Drinkwater</p>
				<p className={cx('message__text')}>
					When you gonna pay me back, don’t leave me hanging
				</p>
			</div>
		</div>
	);
};

export default ProfileMessage;
