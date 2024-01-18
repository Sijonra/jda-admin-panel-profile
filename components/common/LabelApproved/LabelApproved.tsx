import React, { FC } from 'react';
import styles from './Label.module.scss';
import classNames from 'classnames/bind';
import SVGChecked from '@/public/assets/common/checked.svg';

const cx = classNames.bind(styles);

const LabelApproved: FC = () => {
	return (
		<div className={cx('label-approved')}>
			<span>approved</span> <SVGChecked />
		</div>
	);
};

export default LabelApproved;
