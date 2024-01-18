import React, { FC } from 'react';
import styles from './Labels.module.scss';
import classNames from 'classnames/bind';
import useSideBarCollapse from '@/hooks/useSidebarCollapse';

const cx = classNames.bind(styles);

interface ILabelNew {}

const LabelNew: FC<ILabelNew> = ({}) => {
	const collapseOpen = useSideBarCollapse((state) => state.isOpen);

	return (
		<span className={cx('label-new', !collapseOpen && 'label-new--collapse')}>
			new
		</span>
	);
};

export default LabelNew;
