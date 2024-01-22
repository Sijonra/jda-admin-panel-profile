import ProfileIcon from '@/components/common/ProfileIcon/ProfileIcon';
import style from './ProfileCard.module.scss';

import classNames from 'classnames/bind';

import IMGAnsolo from '@/public/assets/ProfilesIcons/asolo.webp';
import IMGCardHeaderBg from '@/public/assets/ProfilePage/ProfileCard/profileBackground.png';
import Image from 'next/image';
import SVGFollowers from '@/public/assets/ProfilePage/icons/followers.svg';
import SVGFollowing from '@/public/assets/ProfilePage/icons/following.svg';
import SVGPencil from '@/public/assets/ProfilePage/icons/pencil.svg';

const cx = classNames.bind(style);

const ProfileCard = () => {
	return (
		<div className={cx('card')}>
			<div className={cx('card__header')}>
				<div className={cx('card__bg')}>
					<Image
						src={IMGCardHeaderBg}
						alt='background'
						width={3200}
						height={3200}
					/>
				</div>
				<div className={cx('card__avatar')}>
					<ProfileIcon src={IMGAnsolo} alt='avatar' width={88} height={88} />
				</div>
			</div>
			<div className={cx('card__body')}>
				<div className={cx('card__title')}>
					<p>Ansolo Lazinatov</p>
					<span>u/hansolo</span>
				</div>
				<div className={cx('subtitle')}>
					<div className={cx('subtitle__followers')}>
						<SVGFollowers /> 1297 Followers
					</div>
					<div className={cx('subtitle__following')}>
						<SVGFollowing /> 3971 Following
					</div>
				</div>
				<div className={cx('content')}>
					<div className={cx('content__title')}>
						About me <SVGPencil />
					</div>
					<p className={cx('content__text')}>
						“Le capitalisme exploite. Et le capitalisme exploite les gens de
						couleur. Comme il exploite les hommes. Ou comme il exploite les
						femmes.”
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
