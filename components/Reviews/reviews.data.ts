import { ReactElement } from 'react';

import IMG1 from '@/public/assets/Reviews/1.png';
import IMG2 from '@/public/assets/Reviews/2.png';
import IMG3 from '@/public/assets/Reviews/3.png';
import IMG4 from '@/public/assets/Reviews/4.png';
import IMG5 from '@/public/assets/Reviews/5.png';
import IMG6 from '@/public/assets/Reviews/6.png';

import Avatar6 from '@/public/assets/Reviews/avatar6.webp';
import Avatar3 from '@/public/assets/Reviews/avatar3.webp';
import Avatar2 from '@/public/assets/Reviews/avatar2.webp';
import Avatar from '@/public/assets/Reviews/avatar.webp';

export type Titem = {
	id: number;
	image: any;
	title: string;
	avatar: any;
	name: string;
	rating: 1 | 2 | 3 | 4 | 5;
	text: string;
	badge: 'approved' | 'pending';
};

export const reviewItemsData: Titem[] = [
	{
		id: 0,
		image: IMG1,
		title: 'Fitbit Sense Advanced Smartwatch with Tools fo...',
		avatar: 'R',
		name: 'Richard Dawkins',
		rating: 5,
		text: 'This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.',
		badge: 'approved',
	},
	{
		id: 1,
		image: IMG2,
		title: 'Fitbit Sense Advanced Smartwatch with Tools fo...',
		avatar: 'A',
		name: 'Ashley Garret',
		rating: 3,
		text: 'The order was delivered ahead of schedule. To give us additional time, you should leave the packaging sealed with plastic.',
		badge: 'approved',
	},
	{
		id: 2,
		image: IMG3,
		title: 'Fitbit Sense Advanced Smartwatch with Tools fo...',
		avatar: 'W',
		name: 'Woodrow Burton',
		rating: 5,
		text: `It's a Mac, after all. Once you've gone Mac, there's no going back. My first Mac lasted over nine years, and this is my second.`,
		badge: 'pending',
	},
	{
		id: 3,
		image: IMG4,
		title: 'Fitbit Sense Advanced Smartwatch with Tools fo...',
		avatar: 'E',
		name: 'Eric McGee',
		rating: 3,
		text: `Personally, I like the minimalist style, but I wouldn't choose it if I were searching for a computer that I would use frequently. It's...See more`,
		badge: 'pending',
	},
	{
		id: 4,
		image: IMG5,
		title: 'Fitbit Sense Advanced Smartwatch with Tools fo...',
		avatar: 'K',
		name: 'Kim Carroll',
		rating: 4,
		text: `It performs exactly as expected. There are three of these in the family.`,
		badge: 'pending',
	},
	{
		id: 5,
		image: IMG6,
		title: 'Fitbit Sense Advanced Smartwatch with Tools fo...',
		avatar: 'B',
		name: 'Barbara Lucas',
		rating: 4,
		text: `The controller is quite comfy for me. Despite its increased size, the controller still fits well in my hands.`,
		badge: 'approved',
	},
];
