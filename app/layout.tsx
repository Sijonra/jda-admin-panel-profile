import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Phoenix',
	description: 'jda-admin-panel',
	metadataBase: new URL('https://jda-admin-panel.vercel.app/'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html data-theme='dark' lang='en'>
			<head>
				<meta property='og:title' content='Phoenix' />
				<meta property='og:description' content='jda-admin-panel' />
				<meta property='og:image:alt' content='About Phoenix Panel' />
				<meta
					property='og:url'
					content='https://prium.github.io/phoenix/v1.13.0/index.html'
				/>

				<link
					rel='apple-touch-icon'
					sizes='120x120'
					href='./apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='./favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='./favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff' />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
