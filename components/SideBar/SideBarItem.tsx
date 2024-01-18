'use client';

import React, { FC, useState } from 'react';
import styles from './SideBarItem.module.scss';
import classNames from 'classnames/bind';
import SideBarSubItem from './SideBarSubItem';
import { TSubItem } from '@/types/types';
import Image from 'next/image';
import LabelActive from '../common/LabelActive';
import LabelNew from '../common/LabelNew';
import useSideBarCollapse from '@/hooks/useSidebarCollapse';

const cx = classNames.bind(styles);

interface ISideBarItem {
	title: string;
	withArrow: boolean;
	icon: any;
	subItems: any;
	labelActive: any;
	labelNew: any;
}

const SideBarItem: FC<ISideBarItem> = ({
	title,
	withArrow,
	icon,
	subItems,
	labelActive,
	labelNew,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleActive = () => setIsOpen(!isOpen);

	const collapseOpen = useSideBarCollapse((state) => state.isOpen);

	return (
		<>
			<div
				onClick={handleActive}
				className={cx(
					'sidebar-item',
					isOpen && 'sidebar-item--active',
					!collapseOpen && 'sidebar-item--collapse'
				)}>
				<svg
					aria-hidden='true'
					focusable='false'
					data-prefix='fas'
					data-icon='caret-right'
					role='img'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 256 512'
					data-fa-i2svg=''
					className={cx(
						'sidebar-item__arrow',
						withArrow && 'sidebar-item__arrow--active'
					)}>
					<path
						fill='currentColor'
						d='M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z'></path>
				</svg>
				<div className={cx('sidebar-item__icon')}>
					<Image src={icon} width={16} height={16} alt='svg' />{' '}
				</div>
				<p className={cx('sidebar-item__title')}>{title}</p>
				{labelNew && <LabelNew />}
				{labelActive && <LabelActive />}
			</div>
			<div
				className={cx(
					'sidebar-item__content',
					'sidebar-item-content',
					isOpen ? 'sidebar-item__content--active' : ''
				)}>
				{subItems &&
					subItems.map(
						(subItem: {
							id: React.Key | null | undefined;
							title: string;
							arrow: boolean;
							content: string[] | undefined;
							labelNew: boolean | undefined;
							labelActive: boolean | undefined;
						}) => {
							return (
								<SideBarSubItem
									key={subItem.id}
									title={subItem.title}
									withArrow={subItem.arrow}
									content={subItem.content}
									labelNew={subItem.labelNew}
									labelActive={subItem.labelActive}
								/>
							);
						}
					)}
			</div>
		</>
	);
};

export default SideBarItem;
