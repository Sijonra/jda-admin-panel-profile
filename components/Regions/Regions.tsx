'use client';

import React, { FC, useMemo } from 'react';
import styles from './Regions.module.scss';
import classNames from 'classnames/bind';
import SVGArrowRight from '@/public/assets/Reviews/arroright.svg';
import RegionTableItem from './RegionItem/RegionItem';
import { regionsData } from './regions.data';
import dynamic from 'next/dynamic';

const cx = classNames.bind(styles);

const Regions: FC = () => {
	const Map = useMemo(
		() =>
			dynamic(() => import('@/components/Regions/RegionsMap/RegionsMap'), {
				loading: () => <p>A map is loading</p>,
				ssr: false,
			}),
		[]
	);

	return (
		<section className={cx('regions')}>
			<div className={cx('regions-left')}>
				<div className={cx('regions-heading')}>
					<div className={cx('regions-heading__title')}>
						<h4>Top regions by revenue</h4>
						<p>Where you generated most of the revenue</p>
					</div>
				</div>
				<div className={cx('regions-table')}>
					<RegionTableItem
						isTableControl
						id={0}
						countryImg='COUNTRY'
						countryName=''
						users={{ value: 'USERS', percents: '' }}
						transactions={{ value: 'TRANSACTIONS', percents: '' }}
						revenue={{ value: 'REVENUE', percents: '' }}
						rate='CONV. RATE'
					/>
					<RegionTableItem
						isTotal
						id={0}
						countryImg=''
						countryName=''
						users={{ value: '377,620', percents: '' }}
						transactions={{ value: '236', percents: '' }}
						revenue={{ value: '$15,758', percents: '' }}
						rate='10.32%'
					/>
					{regionsData.map((item) => {
						return (
							<RegionTableItem
								key={item.id}
								id={item.id}
								countryImg={item.country.img}
								countryName={item.country.name}
								users={item.users}
								transactions={item.transactions}
								revenue={item.revenue}
								rate={item.rate}
							/>
						);
					})}
					<div className={cx('regions-footer')}>
						<p className={cx('regions-footer__value')}>1 to 5 Items of 10</p>
						<div className={cx('regions-footer-buttons')}>
							<div className={cx('regions-footer__button--prev')}>
								<SVGArrowRight />
								<span>Previous</span>
							</div>
							<div className={cx('regions-footer__button--next')}>
								<span>Next</span>
								<SVGArrowRight />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={cx('regions-right')}>
				<Map />
			</div>
		</section>
	);
};

export default Regions;
