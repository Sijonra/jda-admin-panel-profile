import ButtonPoints from '@/components/common/ButtonDrop/ButtonPoints';
import style from './ProfileMessages.module.scss';

import classNames from 'classnames/bind';

import ProfileMessage from './ProfileMessage/ProfileMessage';

const cx = classNames.bind(style);

const ProfileMessages = () => {
	return (
		<div className={cx('messages')}>
			<h4 className={cx('messages__title')}>
				<div>
					Messages <span>(97)</span>
				</div>
				<div className={cx('messages__button')}>
					<ButtonPoints />
				</div>
			</h4>
			<ProfileMessage />
		</div>
	);
};

export default ProfileMessages;
