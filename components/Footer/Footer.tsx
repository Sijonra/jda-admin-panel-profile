import React, { FC } from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Footer: FC = () => {
	return (
		<footer className={cx('footer')}>
			<p className={cx('footer__text')}>
				Thank you for creating with Phoenix | 2023 ©<a href=''>Themewagon</a>
			</p>
			<p className={cx('footer__version')}>v1.13.0</p>
		</footer>
	);
};

export default Footer;
