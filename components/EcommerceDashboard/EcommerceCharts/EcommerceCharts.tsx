'use client';

import React, { FC } from 'react';
import styles from './EcommerceCharts.module.scss';
import classNames from 'classnames/bind';
import ChardOrders from './Charts/ChartOrders';
import ChartCustomers from './Charts/ChartCustomers';
import ChartCoupons from './Charts/ChartCoupons';
import ChartPaying from './Charts/ChartPaying';

const cx = classNames.bind(styles);

const EcommerceCharts: FC = () => {
	return (
		<div className={cx('eccommerce-charts')}>
			<div className={cx('chart-orders', 'eccommerce-chart')}>
				<div className={cx('eccommerce-chart-heading')}>
					<div className={cx('eccommerce-chart-heading__text')}>
						<h5 className={cx('eccommerce-chart-heading__title')}>
							Total orders
							<div className={cx('eccommerce-chart-heading__label')}>
								-6.8%
							</div>
						</h5>
						<p className={cx('eccommerce-chart-heading__subtitle')}>
							Last 7 days
						</p>
					</div>
					<div className={cx('eccommerce-chart-heading__value')}>16,247</div>
				</div>
				<div className={cx('eccommerce-chart-chart--1')}>
					<ChardOrders />{' '}
				</div>
				<div className={cx('eccommerce-chart-footer')}>
					<div className={cx('eccommerce-chart-footer__item')}>
						<div
							className={cx(
								'eccommerce-chart-footer__label',
								'eccommerce-chart-footer__label--1'
							)}></div>
						<div className={cx('eccommerce-chart-footer__text')}>
							Completed
						</div>
						<div className={cx('eccommerce-chart-footer__value')}>52%</div>
					</div>
					<div className={cx('eccommerce-chart-footer__item')}>
						<div
							className={cx(
								'eccommerce-chart-footer__label',
								'eccommerce-chart-footer__label--2'
							)}></div>
						<div className={cx('eccommerce-chart-footer__text')}>
							Pending payment
						</div>
						<div className={cx('eccommerce-chart-footer__value')}>48%</div>
					</div>
				</div>
			</div>
			<div className={cx('chart-customers', 'eccommerce-chart')}>
				<div className={cx('eccommerce-chart-heading')}>
					<div className={cx('eccommerce-chart-heading__text')}>
						<h5 className={cx('eccommerce-chart-heading__title')}>
							New customers
							<div className={cx('eccommerce-chart-heading__label')}>
								+26.5%
							</div>
						</h5>
						<p className={cx('eccommerce-chart-heading__subtitle')}>
							Last 7 days
						</p>
					</div>
					<div className={cx('eccommerce-chart-heading__value')}>356</div>
				</div>
				<div className={cx('eccommerce-chart-chart--2')}>
					<ChartCustomers />
				</div>
			</div>
			<div className={cx('chart-coupons', 'eccommerce-chart')}>
				<div className={cx('eccommerce-chart-heading')}>
					<div className={cx('eccommerce-chart-heading__text')}>
						<h5 className={cx('eccommerce-chart-heading__title')}>
							Top coupons
						</h5>
						<p className={cx('eccommerce-chart-heading__subtitle')}>
							Last 7 days
						</p>
					</div>
				</div>
				<div className={cx('eccommerce-chart-chart--3')}>
					<ChartCoupons />
				</div>
				<div className={cx('eccommerce-chart-footer')}>
					<div className={cx('eccommerce-chart-footer__item')}>
						<div
							className={cx(
								'eccommerce-chart-footer__label',
								'eccommerce-chart-footer__label--1',
								'eccommerce-chart-footer__label--coupons1'
							)}></div>
						<div className={cx('eccommerce-chart-footer__text')}>
							Percentage discount
						</div>
						<div className={cx('eccommerce-chart-footer__value')}>72%</div>
					</div>
					<div className={cx('eccommerce-chart-footer__item')}>
						<div
							className={cx(
								'eccommerce-chart-footer__label',
								'eccommerce-chart-footer__label--2',
								'eccommerce-chart-footer__label--coupons2'
							)}></div>
						<div className={cx('eccommerce-chart-footer__text')}>
							Fixed card discount
						</div>
						<div className={cx('eccommerce-chart-footer__value')}>18%</div>
					</div>
					<div className={cx('eccommerce-chart-footer__item')}>
						<div
							className={cx(
								'eccommerce-chart-footer__label',
								'eccommerce-chart-footer__label--2',
								'eccommerce-chart-footer__label--coupons3'
							)}></div>
						<div className={cx('eccommerce-chart-footer__text')}>
							Fixed product discount
						</div>
						<div className={cx('eccommerce-chart-footer__value')}>10%</div>
					</div>
				</div>
			</div>
			<div className={cx('chart-paying', 'eccommerce-chart')}>
				<div className={cx('eccommerce-chart-heading')}>
					<div className={cx('eccommerce-chart-heading__text')}>
						<h5 className={cx('eccommerce-chart-heading__title')}>
							Paying vs non paying
						</h5>
						<p className={cx('eccommerce-chart-heading__subtitle')}>
							Last 7 days
						</p>
					</div>
				</div>
				<div className={cx('eccommerce-chart-chart--4')}>
					<ChartPaying />
				</div>
				<div className={cx('eccommerce-chart-footer')}>
					<div className={cx('eccommerce-chart-footer__item')}>
						<div
							className={cx(
								'eccommerce-chart-footer__label',
								'eccommerce-chart-footer__label--1'
							)}></div>
						<div className={cx('eccommerce-chart-footer__text')}>
							Paying customer
						</div>
						<div className={cx('eccommerce-chart-footer__value')}>30%</div>
					</div>
					<div className={cx('eccommerce-chart-footer__item')}>
						<div
							className={cx(
								'eccommerce-chart-footer__label',
								'eccommerce-chart-footer__label--2'
							)}></div>
						<div className={cx('eccommerce-chart-footer__text')}>
							Non-paying customer
						</div>
						<div className={cx('eccommerce-chart-footer__value')}>70%</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EcommerceCharts;
