'use client';

import styles from './Reviews.module.scss';
import React from 'react';
import classNames from 'classnames/bind';
import SVGPoints from '@/public/assets/Reviews/threepoints.svg';
import SVGSearch from '@/public/assets/common/search.svg';
import SVGArrowDownUp from '@/public/assets/common/arrowUpDown.svg';
import SVGArrowRight from '@/public/assets/Reviews/arroright.svg';
import ReviewItem from './ReviewItem/ReviewItem';

import { reviewItemsData } from './reviews.data';

const cx = classNames.bind(styles);

const Reviews = () => {
	return (
		<section className={cx('section-reviews')}>
			<div className={cx('reviews-heading')}>
				<div className={cx('reviews-heading__title')}>
					<h4>Latest reviews</h4>
					<p>Payment received across all channels</p>
				</div>
				<div className={cx('reviews-heading-controls')}>
					<div className={cx('reviews-heading__search')}>
						<input type='text' placeholder='Search' />
						<SVGSearch />
					</div>
					<button
						className={cx(
							'reviews-heading__button',
							'reviews-heading__button--all'
						)}>
						All products
					</button>
					<button
						className={cx(
							'reviews-heading__button',
							'reviews-heading__button--more'
						)}>
						<SVGPoints />
					</button>
				</div>
			</div>
			<div className={cx('reviews-sorting-controls')}>
				<div className={cx('checkbox')}>
					<input type='checkbox' className={cx('checkbox__item')} />
				</div>
				<p className={cx('product')}>
					Product
					<SVGArrowDownUp />
				</p>
				<p className={cx('customer')}>
					Customer
					<SVGArrowDownUp />
				</p>
				<p className={cx('rating')}>
					Rating
					<SVGArrowDownUp />
				</p>
				<p className={cx('review')}>
					Review
					<SVGArrowDownUp />
				</p>
				<p className={cx('status')}>
					Status
					<SVGArrowDownUp />
				</p>
				<p className={'time'}>
					time
					<SVGArrowDownUp />
				</p>
			</div>
			<div className={cx('review-items')}>
				{reviewItemsData.map((item) => {
					return (
						<ReviewItem
							key={item.id}
							image={item.image}
							title={item.title}
							avatar={item.avatar}
							name={item.name}
							rating={item.rating}
							text={item.text}
							badge={item.badge}
						/>
					);
				})}
			</div>
			<div className={cx('reviews-footer')}>
				<div className={cx('reviews-footer__page')}>
					1 to 6 Items of 15
					<div className={cx('reviews-footer__button--all')}>
						<span>View all </span> <SVGArrowRight />{' '}
					</div>
				</div>
				<div className={cx('reviews-footer-buttons')}>
					<div className={cx('reviews-footer__button--prev')}>
						<SVGArrowRight />
						<span>Previous</span>
					</div>
					<div className={cx('reviews-footer__button--next')}>
						<span>Next</span>
						<SVGArrowRight />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
