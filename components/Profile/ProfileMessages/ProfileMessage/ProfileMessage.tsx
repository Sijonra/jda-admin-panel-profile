import style from './ProfileMessage.module.scss';

import classNames from 'classnames/bind';

import ProfileIcon from '@/components/common/ProfileIcon/ProfileIcon';
import { Imessage } from '../messages.data';
import { FC } from 'react';

const cx = classNames.bind(style);

interface IProfileMessage extends Imessage {}

const ProfileMessage: FC<IProfileMessage> = ({ author, message, avatar }) => {
	return (
		<div className={cx('message')}>
			<div className={cx('message__photo')}>
				<ProfileIcon src={avatar} height={32} width={32} isOnline />
			</div>
			<div className={cx('message__content')}>
				<p className={cx('message__author')}>{author}</p>
				<p className={cx('message__text')}>{message}</p>
			</div>
		</div>
	);
};

export default ProfileMessage;
