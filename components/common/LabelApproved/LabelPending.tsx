import React, { FC } from 'react';
import styles from './Label.module.scss';
import classNames from 'classnames/bind';
import SVGPending from '@/public/assets/common/pending.svg';

const cx = classNames.bind(styles);

const LabelPending: FC = () => {
	return (
		<div className={cx('label-pending')}>
			<span>pending</span> <SVGPending />
		</div>
	);
};

export default LabelPending;
