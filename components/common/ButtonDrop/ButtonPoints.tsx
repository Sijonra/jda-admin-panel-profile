import style from './ButtonPoints.module.scss';

import classNames from 'classnames/bind';
import SVGPoints from '@/public/assets/ProfilePage/icons/pointshor.svg';

const cx = classNames.bind(style);

const ButtonPoints = () => {
	return (
		<button className={cx('button')}>
			<SVGPoints />
		</button>
	);
};

export default ButtonPoints;
