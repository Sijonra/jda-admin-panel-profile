import React, { FC } from 'react';
import styles from './ReviewItem.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import SVGStar from '@/public/assets/common/star.svg';
import SVGPoints from '@/public/assets/Reviews/threepoints.svg';
import SVGStarEmpty from '@/public/assets/common/starEmpty.svg';
import LabelApproved from '@/components/common/LabelApproved/LabelApproved';
import LabelPending from '@/components/common/LabelApproved/LabelPending';
import SVGChecked from '@/public/assets/common/checked.svg';

const cx = classNames.bind(styles);

interface IReviewItem {
	image: any;
	title: string;
	avatar: any;
	name: string;
	rating: 1 | 2 | 3 | 4 | 5;
	text: string;
	badge: 'approved' | 'pending';
}

const ReviewItem: FC<IReviewItem> = ({
	image,
	title,
	avatar,
	name,
	rating,
	text,
	badge,
}) => {
	const renderStars = () => {
		const stars = [];
		for (let i = 1; i <= rating; i++) {
			stars.push(
				<div key={i} className={cx('review-stars__star')}>
					<SVGStar />
				</div>
			);
		}
		for (let i = rating; i < 5; i++) {
			stars.push(
				<div key={i + 1} className={cx('review-stars__star')}>
					<SVGStarEmpty />
				</div>
			);
		}
		return stars;
	};
	const stars = renderStars();

	return (
		<div className={cx('review')}>
			<div className={cx('review-checkbox')}>
				<input type='checkbox' className={cx('review-checkbox__item')} />
			</div>
			<div className={cx('review__image')}>
				<Image src={image} width={53} height={53} alt='review item' />
			</div>
			<p className={cx('review__title')}>{title}</p>
			<div className={cx('review-user')}>
				<div className={cx('review-user__avatar')}>{avatar}</div>
				<div className={cx('review-user__name')}>{name}</div>
			</div>
			<div className={cx('review-stars')}>{stars}</div>
			<p className={cx('review__text')}>
				<div>{text}</div>
			</p>
			<div className={cx('review__label')}>
				{badge === 'approved' ? <LabelApproved /> : <LabelPending />}
			</div>
			<div className={cx('review-time')}>
				<div className={cx('review-time__accept')}>
					<SVGChecked />
				</div>
				<div className={cx('review-time__delete')}></div>
				<div className={cx('review-time__label')}>Just now</div>
				<div className={cx('review-time__button-points')}>
					<SVGPoints />
				</div>
			</div>
		</div>
	);
};

export default ReviewItem;
