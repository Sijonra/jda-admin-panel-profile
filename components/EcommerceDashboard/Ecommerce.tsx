'use client';

import React, { FC } from 'react';
import styles from './Ecommerce.module.scss';
import classNames from 'classnames/bind';
import EcommerceSells from './EcommerceSells/EcommerceSells';
import EcommerceCharts from './EcommerceCharts/EcommerceCharts';

const cx = classNames.bind(styles);

const Ecommerce: FC = () => {
	return (
		<section className={cx('ecommerce')}>
			<EcommerceSells />
			<EcommerceCharts />
		</section>
	);
};

export default Ecommerce;
