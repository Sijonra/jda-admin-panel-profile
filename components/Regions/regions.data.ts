import { StaticImageData } from 'next/image';

import IMGIndia from '@/public/assets/RegionsData/india.png';
import IMGChina from '@/public/assets/RegionsData/china.png';
import IMGKorea from '@/public/assets/RegionsData/south-korea.png';
import IMGUsa from '@/public/assets/RegionsData/usa.png';
import IMGVietnam from '@/public/assets/RegionsData/vietnam.png';

export interface IRegionsData {
	id: number;
	country: {
		img: StaticImageData;
		name: string;
	};
	users: {
		value: string;
		percents: string;
	};
	transactions: {
		value: string;
		percents: string;
	};
	revenue: {
		value: string;
		percents: string;
	};
	rate: string;
}

export const regionsData: IRegionsData[] = [
	{
		id: 1,
		country: {
			img: IMGIndia,
			name: 'India',
		},
		users: {
			value: '92896',
			percents: '(41.6%)',
		},
		transactions: {
			value: '67',
			percents: '(34.3%)',
		},
		revenue: {
			value: '$7560',
			percents: '(36.9%)',
		},
		rate: `14.01%`,
	},
	{
		id: 2,
		country: {
			img: IMGChina,
			name: 'China',
		},
		users: {
			value: '50496',
			percents: '(32.8%)',
		},
		transactions: {
			value: '54',
			percents: '(23.8%)',
		},
		revenue: {
			value: '$6532',
			percents: '(26.5%)',
		},
		rate: `23.56%`,
	},
	{
		id: 3,
		country: {
			img: IMGUsa,
			name: 'USA',
		},
		users: {
			value: '45679',
			percents: '(24.3%)',
		},
		transactions: {
			value: '35',
			percents: '(19.7%)',
		},
		revenue: {
			value: '$5432',
			percents: '(16.9%)',
		},
		rate: `10.23%`,
	},
	{
		id: 4,
		country: {
			img: IMGKorea,
			name: 'South Korea',
		},
		users: {
			value: '36453',
			percents: '(19.7%)',
		},
		transactions: {
			value: '22',
			percents: '(9.54%)',
		},
		revenue: {
			value: '$4673',
			percents: '(11.6%)',
		},
		rate: `8.85%`,
	},
	{
		id: 5,
		country: {
			img: IMGVietnam,
			name: 'Vietnam',
		},
		users: {
			value: '15007',
			percents: '(11.9%)',
		},
		transactions: {
			value: '17',
			percents: '(6.91%)',
		},
		revenue: {
			value: '$2456',
			percents: '(10.2%)',
		},
		rate: `6.01%`,
	},
];
