'use client'
import { IoMoon } from "react-icons/io5";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import NextLink from "next/link";
import clsx from "clsx";
// icons
import { BiLogOutCircle } from "react-icons/bi";

import { useRouter } from 'next/navigation'; 


const siteConfig = {
    navItems: [
        { label: 'Home', href: '/dashboard' }, 
        { label: 'Licenses', href: '/licenses' },
        { label: 'Products', href: '/products' },
        { label: 'Blocklists', href: '/blocklists' },
        { label: 'Leader', href: '/leader' },
        { label: 'My Licenses', href: '/my-licenses' },
        { label: 'My Subcustomers', href: '/my-subcustomers' },
    ],
};

import { ThemeSwitch } from "@/components/theme-switch";
import {
	DiscordIcon,
	SearchIcon,
	RiLogoutCircleLine,
	
} from "@/components/icons";

export const Navbar = () => {
	const router = useRouter(); // Initialize the router

	const handleLogout = () => {
		// Add your logout functionality here
		// ...

		// Redirect to the desired page
		router.push('/');
	};

	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1 cursor-default" href="">
						<IoMoon className="size-6" /> {/* change this to an image with the logo when ready uwu */}
						<p className="font-bold text-inherit">Lunar Labs</p> {/* change this to name when ready */}
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href="" aria-label="Discord "> 		{/* replace with your Discord link uwu */}
						<DiscordIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
				<NavbarItem className="hidden md:flex">
					<Button
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						onClick={handleLogout}
						startContent={<BiLogOutCircle className="text-danger size-6" />}
						variant="flat"
					>
						Log out
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{searchInput}
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navItems.length - 1
											? "danger"
											: "foreground"
								}
								href={item.href}
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
