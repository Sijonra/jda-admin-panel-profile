'use client';

import React, { FC, useEffect, useState } from 'react';
import styles from './SideBarSubItem.module.scss';
import classNames from 'classnames/bind';
import LabelNew from '../common/LabelNew';
import LabelActive from '../common/LabelActive';

const cx = classNames.bind(styles);

interface ISideBarSubItem {
	title: string;
	withArrow: boolean;
	content?: string[];
	labelActive?: boolean;
	labelNew?: boolean;
}

const SideBarSubItem: FC<ISideBarSubItem> = ({
	title,
	withArrow,
	content,
	labelActive,
	labelNew,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleActive = () => setIsOpen(!isOpen);
	return (
		<>
			<div className={cx('sub-item')} onClick={handleActive}>
				{withArrow && (
					<svg
						aria-hidden='true'
						focusable='false'
						data-prefix='fas'
						data-icon='caret-right'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 256 512'
						data-fa-i2svg=''
						className={cx('sub-item__arrow')}>
						<path
							fill='currentColor'
							d='M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z'></path>
					</svg>
				)}
				<div className={cx('sub-item__title')}>{title}</div>
				{labelNew && <LabelNew />}
				{labelActive && <LabelActive />}
			</div>
			{isOpen && (
				<div className={cx('sub-item__sub-items')}>
					{content &&
						content.map((item, index) => {
							return (
								<p className={cx('sub-item__sub-item')} key={index}>
									{item}
								</p>
							);
						})}
				</div>
			)}
		</>
	);
};

export default SideBarSubItem;
