import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import style from './ProfileIcon.module.scss';

import classNames from 'classnames/bind';

interface IProfileIcon {
	src: StaticImageData;
	width?: number;
	height?: number;
	alt?: string;
	className?: string;
	isOnline?: boolean;
}

const cx = classNames.bind(style);

const ProfileIcon: FC<IProfileIcon> = ({
	src,
	width = 48,
	height = 48,
	alt = 'icon',
	isOnline,
	className,
}) => {
	return (
		<div className={cx('icon', className)}>
			<Image src={src} width={width} height={height} alt={alt} />
			{isOnline && <span className={cx('icon--online')}></span>}
		</div>
	);
};

export default ProfileIcon;
