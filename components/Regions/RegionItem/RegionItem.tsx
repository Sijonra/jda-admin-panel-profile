import React, { FC } from 'react';
import styles from './RegionItem.module.scss';
import classNames from 'classnames/bind';
import SVGArrowDownUp from '@/public/assets/common/arrowUpDown.svg';
import Image, { StaticImageData } from 'next/image';

const cx = classNames.bind(styles);

interface IRegionTableItem {
	id: number;
	isTotal?: boolean;
	isTableControl?: boolean;
	countryImg: string | StaticImageData;
	countryName: string;
	users: { value: string; percents: string };
	transactions: { value: string; percents: string };
	revenue: { value: string; percents: string };
	rate: string;
}

const RegionTableItem: FC<IRegionTableItem> = ({
	isTableControl,
	isTotal,
	id,
	countryImg,
	countryName,
	users,
	transactions,
	revenue,
	rate,
}) => {
	const countryContent =
		typeof countryImg === 'string' ? (
			countryImg
		) : (
			<>
				<span className={cx('id')}>{id}.</span>
				<Image src={countryImg} width={24} height={17} alt='flag' />
				<span className={cx('country-name')}>{countryName}</span>
			</>
		);

	return (
		<div
			className={cx(
				'table-row',
				isTableControl && 'table-row-controls',
				isTotal && 'table-row-total'
			)}>
			<div className={cx('table-row__item', 'table-row__item--1')}>
				{countryContent} <SVGArrowDownUp />
			</div>
			<div className={cx('table-row__item', 'table-row__item--2')}>
				{users.value} <span className={cx('percents')}>{users.percents}</span>
				<SVGArrowDownUp />
			</div>
			<div className={cx('table-row__item', 'table-row__item--3')}>
				{transactions.value}
				<span className={cx('percents')}>{transactions.percents}</span>
				<SVGArrowDownUp />
			</div>
			<div className={cx('table-row__item', 'table-row__item--4')}>
				{revenue.value} <span className={cx('percents')}>{revenue.percents}</span>
				<SVGArrowDownUp />
			</div>
			<div className={cx('table-row__item', 'table-row__item--5')}>
				{rate} <SVGArrowDownUp />
			</div>
		</div>
	);
};

export default RegionTableItem;
