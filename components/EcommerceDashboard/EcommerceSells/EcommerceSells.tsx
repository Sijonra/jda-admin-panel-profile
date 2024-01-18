'use client';

import React, { FC } from 'react';
import styles from './EcommerceSells.module.scss';
import classNames from 'classnames/bind';
import SellsChart from './SellsChart/SellsChart';

import SVGStar from '@/public/assets/DashboardImg/sellsImages/star.svg';
import SVGPause from '@/public/assets/DashboardImg/sellsImages/pause.svg';
import SVGCross from '@/public/assets/DashboardImg/sellsImages/cross.svg';

const cx = classNames.bind(styles);

const EcommerceSells: FC = () => {
	return (
		<div className={cx('ecommerce-sells')}>
			<div className={cx('ecommerce-business')}>
				<h2 className={cx('ecommerce-business__title')}>Ecommerce Dashboard</h2>
				<h4 className={cx('ecommerce-business__subtitle')}>
					Here’s what’s going on at your business right now
				</h4>
				<ul className={cx('business-list')}>
					<li>
						<div className={cx('business-list__icons')}>
							<SVGStar />
						</div>
						<div>
							<h5 className={cx('business-list__title')}>57 new orders</h5>
							<p className={cx('business-list__subtitle')}>
								Awating processing
							</p>
						</div>
					</li>
					<li>
						<div className={cx('business-list__icons')}>
							<SVGPause />
						</div>
						<div>
							<h5 className={cx('business-list__title')}>5 orders</h5>
							<p className={cx('business-list__subtitle')}>On hold</p>
						</div>
					</li>
					<li>
						<div className={cx('business-list__icons')}>
							<SVGCross />
						</div>
						<div>
							<h5 className={cx('business-list__title')}>15 products</h5>
							<p className={cx('business-list__subtitle')}>Out of stock</p>
						</div>
					</li>
				</ul>
			</div>
			<div className={cx('sells')}>
				<div className={cx('sells-heading')}>
					<div className={cx('sells-heading__text')}>
						<h2 className={cx('ecommerce-business__title', 'sells__title')}>
							Total sells
						</h2>
						<h4
							className={cx(
								'ecommerce-business__subtitle',
								'sells__subtitle'
							)}>
							Payment received across all channels
						</h4>
					</div>
					<select name='' id='' className={cx('sells-heading__select')}>
						<option value='Mar 1 - 31, 2022'>Mar 1 - 31, 2022</option>
						<option value='April 1 - 30, 2022'>April 1 - 30, 2022</option>
						<option value='May 1 - 31, 2022'>May 1 - 31, 2022</option>
					</select>
				</div>
				<div className={cx('sells-charts')}>
					<SellsChart />
				</div>
			</div>
		</div>
	);
};

export default EcommerceSells;
