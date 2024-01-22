import ButtonPoints from '@/components/common/ButtonDrop/ButtonPoints';
import style from './ProfileMessages.module.scss';

import classNames from 'classnames/bind';

import ProfileMessage from './ProfileMessage/ProfileMessage';

import { messages } from './messages.data';

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
			{messages.map((message) => {
				return (
					<ProfileMessage
						key={message.id}
						id={message.id}
						author={message.author}
						avatar={message.avatar}
						message={message.message}
						isOnline={message.isOnline}
					/>
				);
			})}
		</div>
	);
};

export default ProfileMessages;
