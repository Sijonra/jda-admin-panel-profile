'use client';

import Customer from './Charts/Customer';
import Projection from './Charts/Projection';
import style from './Rates.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Rates = () => {
	return (
		<section className={cx('rates')}>
			<div className={cx('projection')}>
				<div className={cx('rates-heading')}>
					<div className={cx('rates-heading__title')}>
						<h4>Projection vs actual</h4>
						<p>Actual earnings vs projected earnings</p>
					</div>
				</div>
				<div className={cx('rates-chart')}>
					<Projection />
				</div>
			</div>
			<div className={cx('customer')}>
				<div className={cx('rates-heading')}>
					<div className={cx('rates-heading__title')}>
						<h4>Returning customer rate</h4>
						<p>Rate of customers returning to your shop over time</p>
					</div>
				</div>
				<div className={cx('rates-chart')}>
					<Customer />
				</div>
			</div>
		</section>
	);
};

export default Rates;
