import { Inter } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';

import type { Metadata, Viewport } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const name = 'next.js-template';
const description =
	'A Next.js 16 starter with TypeScript, Bun, Tailwind CSS, shadcn, Zod, Motion, react-icons, and three.js.';

export const metadata: Metadata = {
	applicationName: name,
	authors: [{ name: 'sarcasterXO', url: 'https://github.com/sarcasterXO' }],
	creator: 'sarcasterXO',
	description,
	openGraph: {
		description,
		locale: 'en_US',
		siteName: name,
		title: name,
		type: 'website',
	},
	title: {
		default: name,
		template: `%s | ${name}`,
	},
	twitter: {
		card: 'summary',
		description,
		title: name,
	},
	keywords: ['next.js', 'template', 'shadcn', 'tailwind', 'typescript', 'bun', 'three.js', 'react-icons', 'motion'],
	metadataBase: new URL('https://next.js-template.com'),
};

export const viewport: Viewport = {
	colorScheme: 'light',
	themeColor: '#e5ecf3',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={cn('font-sans', inter.variable)} lang="en">
			<body>{children}</body>
		</html>
	);
}
