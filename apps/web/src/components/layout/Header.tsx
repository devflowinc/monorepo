import React from 'react'
import Image from 'next/image'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { withRouter } from 'next/router'
import { useScrollYPosition } from 'react-use-scroll-position'
import clsx from 'clsx'
import Logo32 from '../../../public/assets/img/logo_32.png'
import { Text, Button, Link } from '@shared/components'

const Header = ({ router }: any) => {
	const { theme, setTheme } = useTheme()
	const scrollY = useScrollYPosition()
	const headerWrapperStyle = 'px-2 rounded-xl bg-gray-300/60 hover:bg-gray-300/90'
	const headerTextStyle = 'hidden sm:inline-block !text-cyan-300 hover:!text-blue-400'

	return (
		<header
			className={clsx('h-[3.35rem] fixed w-full z-40 px-2 pt-3 pb-1 flex justify-between', {
				'bg-white dark:bg-coal': router.pathname !== '/' && scrollY < 33,
				'backdrop-blur-xl': scrollY > 33,
			})}
		>
			{/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
			<a
				className="flex items-center space-x-2 min-w-[170px] bg-gradient-to-r from-sky-400 via-purple-500 to-red-400 px-2 py-1 rounded-lg relative"
				href="/"
			>
				<Image src={Logo32} draggable={false} alt="Debate Land" />
				<Text className="mt-[1px] !text-white md:text-xl font-extrabold">
					Debate Land
				</Text>
				<div className="absolute -top-2 -right-3 bg-gray-50/80 rounded-full ">
					<Text className="px-1 text-sm lowercase bg-gradient-to-r from-sky-400 via-purple-500 to-red-400 bg-clip-text text-transparent">Beta 0.2</Text>
				</div>
			</a>
			<div className="flex items-center space-x-2">
				{/* <Link primary external href="https://cutit.cards" text="Cut It" className={headerTextStyle} wrapperClassName={headerWrapperStyle} />
				<Link primary href="/#about" text="About" className={headerTextStyle} wrapperClassName={headerWrapperStyle} />
				<Link primary href="/#mobile" text="Mobile" className={headerTextStyle} wrapperClassName={headerWrapperStyle} />
				<Link primary href="/#api" text="API" className={headerTextStyle} wrapperClassName={headerWrapperStyle} /> */}
				<span className="w-2" />
				<Button
					icon={theme === 'dark' ? <FaSun /> : <FaMoon />}
					className="!bg-indigo-300"
					title="Toggle Theme"
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				/>
			</div>
		</header>
	)
}

export default withRouter(Header)
