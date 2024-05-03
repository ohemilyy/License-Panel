import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import Image from 'next/image';
import background from '/public/background.png';

export const metadata: Metadata = {
  title: 'LunarLabs',   // change this 
  description: '...', // change this 
	icons: {
		icon: "/favicon.ico",
  
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					"font-roboto"
				)}
			>
				<div className="absolute inset-0 h-screen w-screen z-0">
					<Image
						alt="background"
						src={background}
						fill
						quality={100}
						placeholder="blur"
            className="blur"
						style={{
							objectFit: 'cover',
							position: 'absolute',
							width: '100%',
							height: '100%',
							top: 0,
							left: 0,
						}}
					/>
				</div>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
						</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
