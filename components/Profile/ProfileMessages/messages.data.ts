import PNGStanly from '@/public/assets/ProfilesIcons/stanly.webp';
import PNGMilind from '@/public/assets/ProfilesIcons/milind.webp';
import PNGJoseph from '@/public/assets/ProfilesIcons/joseph.webp';
import PNGMartina from '@/public/assets/ProfilesIcons/asolo.webp';
import PNGMeekona from '@/public/assets/ProfilesIcons/meekona.webp';

import { StaticImageData } from 'next/image';

export interface Imessage {
	id: number;
	isOnline: boolean;
	avatar: StaticImageData;
	author: string;
	message: string;
}

export const messages: Imessage[] = [
	{
		id: 0,
		isOnline: true,
		avatar: PNGStanly,
		author: 'Stanly Drinkwater',
		message: 'When you gonna pay me back, don’t leave me hanging',
	},
	{
		id: 1,
		isOnline: true,
		avatar: PNGMilind,
		author: 'Milind Mikuja',
		message: 'But the mare fact that she said that makes',
	},
	{
		id: 2,
		isOnline: true,
		avatar: PNGJoseph,
		author: 'Josef Stravinsky',
		message: 'Oi Cult.',
	},
	{
		id: 3,
		isOnline: true,
		avatar: PNGMartina,
		author: 'Martina scorcese',
		message: 'Thanks for that. Sincerely.',
	},
	{
		id: 4,
		isOnline: true,
		avatar: PNGMeekona,
		author: 'Meekona Zikon',
		message: 'I am Outside, Come here, Lets smoke...',
	},
];
