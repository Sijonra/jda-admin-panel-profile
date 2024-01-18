'use client';

import React, { FC, useEffect } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import PNG_Logo from '@/public/assets/headerImg/logo.png';
import WEBP_AVATAR from '@/public/assets/headerImg/avatar.webp';
import useTheme from '@/hooks/useTheme';
import useSidebar from '@/hooks/useSidebar';
import SVGSearch from '@/public/assets/common/search.svg';

const cx = classNames.bind(styles);

const Header: FC = () => {
	const theme = useTheme((state) => state.theme);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	const onThemeChange = useTheme((state) => state.changeTheme);
	const toggleSideBar = useSidebar((state) => state.toggleSideBar);

	return (
		<header className={cx('header')}>
			<div className={cx('header-logo')}>
				<span onClick={toggleSideBar} className={cx('header-burger')}>
					<span className={cx('header-burger__item')}></span>
				</span>
				<Image
					src={PNG_Logo}
					className={cx('header-logo__img')}
					alt='logo'
					width={27}
					height={27}
				/>
				<h5 className={cx('header-logo__title')}>phoenix</h5>
			</div>
			<div className={cx('header-search')}>
				<input type='text' placeholder='Search...' />
				<SVGSearch />
			</div>
			<ul className={cx('header-icons')}>
				<li
					onClick={onThemeChange}
					className={cx('header-icons__item', 'header-icons__theme')}>
					<div>
						{theme === 'dark' ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16px'
								height='16px'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16px'
								height='16px'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<circle cx='12' cy='12' r='5'></circle>
								<line x1='12' y1='1' x2='12' y2='3'></line>
								<line x1='12' y1='21' x2='12' y2='23'></line>
								<line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
								<line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
								<line x1='1' y1='12' x2='3' y2='12'></line>
								<line x1='21' y1='12' x2='23' y2='12'></line>
								<line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
								<line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
							</svg>
						)}
					</div>
				</li>
				<li className={cx('header-icons__item', 'header-icons__ring')}>
					<a href='/#'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16px'
							height='16px'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<path d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'></path>
							<path d='M13.73 21a2 2 0 0 1-3.46 0'></path>
						</svg>
					</a>
				</li>
				<li className={cx('header-icons__item')}>
					<a href='/#'>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<circle cx='2' cy='2' r='2' fill='currentColor'></circle>
							<circle cx='2' cy='8' r='2' fill='currentColor'></circle>
							<circle cx='2' cy='14' r='2' fill='currentColor'></circle>
							<circle cx='8' cy='8' r='2' fill='currentColor'></circle>
							<circle cx='8' cy='14' r='2' fill='currentColor'></circle>
							<circle cx='14' cy='8' r='2' fill='currentColor'></circle>
							<circle cx='14' cy='14' r='2' fill='currentColor'></circle>
							<circle cx='8' cy='2' r='2' fill='currentColor'></circle>
							<circle cx='14' cy='2' r='2' fill='currentColor'></circle>
						</svg>
					</a>
				</li>
				<li className={cx('header-icons__item', 'header-icons__avatar')}>
					<Image src={WEBP_AVATAR} width={50} height={50} alt='avatar' />
				</li>
			</ul>
		</header>
	);
};

export default Header;
