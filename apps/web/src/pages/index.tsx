/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { NextPage } from 'next'
import CountUp from 'react-countup'
import { Text, GridLine } from '@shared/components'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import { Compass, Telescope, Radar } from '@src/components/features'
import { NextSeo } from 'next-seo'
import { useTheme } from 'next-themes'
import MobileGraphic from '../../public/assets/img/mobile_graphic.png'
import WebGraphic from '../../public/assets/img/web_graphic.png'
import AppStoreGraphic from '../../public/assets/img/app_store.svg'
import GooglePlayGraphic from '../../public/assets/img/google_play.svg'

const Home: NextPage = () => {
  const isLarge = useMediaQuery({
    query: '(min-width: 768px)',
  })

  const { theme } = useTheme()

  return (
    <>
      <NextSeo
        title="Debate Land"
        description="Data and rankings for high school debate."
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
      />
      <GridLine position={20} outer />
      <GridLine position={35} />
      <GridLine position={50} />
      <GridLine position={65} />
      <GridLine position={80} outer />
      <div id="dark-background" className="fixed top-0 left-0 h-screen w-full dark:bg-stone-900 -z-40" />
      <div
        id="slanted-hero-top"
        className="absolute -z-10 -top-[30%] w-full h-[60%] bg-gradient-to-r from-sky-400 via-purple-500 to-red-400 -skew-y-12 2xl:-skew-y-6"
      />
      <section id="hero" className="w-full min-h-screen flex flex-col justify-start md:justify-around">
        <div className="flex flex-col md:flex-row justify-center items-center z-30 mt-20 md:mt-10">
          <div id="hero-left" className="max-w-[600px] md:ml-5 lg:mr-20">
            <h1 className="dark:text-white font-bold text-8xl text-center md:text-left md:text-[7rem] lg:text-[8rem] xl:text-[9rem] 2xl:text-[10rem]">
              DEBATE LAND
            </h1>
            <h4 className="w-full text-center md:text-left mt-2 md:mt-0 text-indigo-300 font-bold text-2xl md:text-3xl lg:text-4xl md:pl-1 xl:pl-2">
              Data for all things debate.
            </h4>
          </div>
          <div id="hero-right" className="overflow-hidden">
            {isLarge && (
              <div className="w-[750px] h-auto">
                <Image src={WebGraphic} layout="responsive" draggable={false} placeholder="blur" priority alt="Leaderboard Graphic" />
              </div>
            )}
          </div>
        </div>
        <section
          id="stats"
          className="w-full flex flex-col-reverse md:space-x-4 md:flex-row sm:justify-center xl:justify-start xl:space-x-0 mt-32 md:mt-0"
        >
          <div className="flex flex-col items-center xl:items-start xl:ml-[20%] xl:w-[15%] xl:border-l-[1px] xl:hover:border-l-4 transition-all pl-4 border-indigo-400 z-10 my-2 md:my-0">
            <CountUp className="text-6xl md:text-5xl lg:text-[3vw]" start={950} end={1000} separator="," />
            <Text className="!text-gray-400">Tournaments</Text>
          </div>
          <div className="flex flex-col items-center xl:items-start xl:w-[15%] xl:border-l-[1px] xl:hover:border-l-4 transition-all pl-4 border-indigo-400 z-10 my-2 md:my-0">
            <CountUp className="text-6xl md:text-5xl lg:text-[3vw]" start={9500} end={10000} separator="," />
            <Text className="!text-gray-400 pb-4 sm:pb-0">Competitors</Text>
          </div>
          <div className="flex flex-col items-center xl:items-start xl:w-[15%] xl:border-l-[1px] xl:hover:border-l-4 transition-all pl-4 border-indigo-400 z-10 my-2 md:my-0">
            <CountUp className="text-6xl md:text-5xl lg:text-[3vw]" start={95000} end={100000} separator="," />
            <Text className="!text-gray-400 pb-4 sm:pb-0">Rounds</Text>
          </div>
          <div className="flex flex-col items-center xl:items-start xl:w-[15%] xl:border-l-[1px] xl:hover:border-l-4 transition-all pl-4 border-indigo-400 z-10 my-2 md:my-0">
            <CountUp className="text-6xl md:text-5xl lg:text-[3vw]" start={950000} end={1000000} separator="," />
            <Text className="!text-gray-400 pb-4 sm:pb-0">Queries</Text>
          </div>
        </section>
      </section>
      <section className="pt-20 mt-20 xl:mt-0 relative" id="query-tools">
        <span
          className="absolute w-full h-[70%] top-0 right-0 -z-10 bg-gradient-to-t from-sky-200 dark:from-gray-900 via-sky-100 dark:via-gray-900 to-white/40"
          style={{
            zIndex: -1,
          }}
        />
        <span className="absolute w-full h-[50%] -bottom-5 right-0 -skew-y-6 bg-sky-200 dark:bg-gray-900 -z-10" />
        <div className="flex flex-col justify-center w-full pb-32">
          <h2 className="text-5xl text-center">
            Meet your new{' '}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600">
              superpowers
            </span>
            .
          </h2>
          <div className="px-5 md:w-[80%] mx-auto xl:w-full flex flex-col lg:flex-row items-center justify-between mt-12 xl:mt-8 2xl:max-w-[2000px]">
            <div className="lg:mr-10 lg:max-w-[40%] xl:ml-[10%] xl:max-w-[25%]">
              <h3 className="text-3xl">Search our datasets with ease</h3>
              <div className="text-xl text-gray-500 dark:text-gray-400 mt-3">
                <p>
                  <span className="text-indigo-400">Compass</span> lets you easily select a debate event, circuit, and
                  year to query.
                </p>
                <p className="mt-2">
                  Then, you can easily search for specific teams, or choose between one of our precompiled mass result
                  sets, such as the leaderboard.
                </p>
              </div>
            </div>
            <div className="flex w-full">
              <Compass />
            </div>
          </div>
          <div className="px-5 md:w-[80%] mx-auto xl:w-full flex flex-col lg:flex-row-reverse items-center justify-between mt-16 2xl:max-w-[2000px]">
            <div className="xl:mr-[10%] lg:ml-10 lg:max-w-[40%] xl:max-w-[25%]">
              <h3 className="text-3xl">Tailored scouting reports</h3>
              <div className="text-xl text-gray-500 dark:text-gray-400 mt-3">
                <p>
                  You can use <span className="text-indigo-400">Radar</span> to generate a scouting report for any
                  Tabroom tournament.
                </p>
                <p className="mt-2">
                  Simply enter the URL to the entries page and let us work our magic. In seconds, you'll be able to see
                  the records of exactly who's competing, including a predictive leaderboard.
                </p>
              </div>
            </div>
            <div className="flex w-full">
              <Radar />
            </div>
          </div>
          <div className="px-5 md:w-[80%] mx-auto xl:w-full flex flex-col xl:flex-row items-center justify-between mt-16 2xl:max-w-[2000px]">
            <div className="xl:ml-[10%] xl:mr-5 xl:max-w-[25%]">
              <h3 className="text-3xl">Detailed judge analytics</h3>
              <div className="text-xl text-gray-500 dark:text-gray-400 mt-3">
                <p>
                  No matter what you're debating, knowing your audience is key to success. That's why{' '}
                  <span className="text-indigo-400">Telescope</span> provides detailed information about your judges.
                </p>
                <p className="mt-2">
                  Just enter a judge's name and get bias, squirrel, and experience scores over any period of time.
                  Remember, these are stats, not necessarily a reflection of judge quality.
                </p>
              </div>
            </div>
            <div className="flex w-full">
              <Telescope />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-32 mb-32 relative h-[70rem] md:h-[50rem] flex flex-col justify-center" id="faq">
        <span className="absolute w-full h-full top-0 right-0 -z-20 -skew-y-6 bg-slate-800" />
        <div>
          <h2 className="mb-10 text-5xl text-center text-white" id="about">
            The{' '}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600">
              best
            </span>{' '}
            in the game.
          </h2>
          <div className="flex flex-col 2xl:flex-row 2xl:items-start items-center justify-center xl:justify-start 2xl:flex-none w-full mt-5 md:space-y-6 2xl:space-y-0 px-8 xl:px-0">
            <div className="flex flex-col md:flex-row justify-center xl:justify-start w-full">
              <div className="h-full rounded-xl p-3 xl:p-0 bg-transparent xl:rounded-none min-w-[200px] md:w-[300px] xl:min-w-[30%] xl:items-start xl:ml-[20%] 2xl:ml-[40%]">
                <h3 className="mr-2 text-indigo-400 xl:text-white text-2xl xl:border-l-[1px] xl:hover:border-l-4 transition-all xl:pl-4 xl:py-0 border-indigo-400 z-10">
                  For debaters, by debaters.
                </h3>
                <p className="text-gray-400 mt-1 xl:px-5 xl:max-w-[500px]">
                  We built Debate Land because we were frustrated with the lack of centralized data for debate. Now,
                  over ten thousand people use it.
                </p>
              </div>

              <div className="h-full rounded-xl p-3 xl:p-0 bg-transparent xl:rounded-none min-w-[200px] md:w-[300px] xl:min-w-[30%] xl:items-start 2xl:ml-0">
                <h3 className="mr-2 text-sky-600 xl:text-white text-2xl xl:border-l-[1px] xl:hover:border-l-4 transition-all xl:pl-4 xl:py-0 border-indigo-400 z-10">
                  Intuitive, as it should be.
                </h3>
                <p className="text-gray-400 mt-1 xl:px-5 xl:max-w-[500px]">
                  Debate Land is designed to be accessible. It's as easy as choosing a dataset and searching it for
                  anything you'd like to know, just how it should be.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-center xl:justify-start w-full">
              <div className="h-full rounded-xl p-3 xl:p-0 bg-transparent xl:rounded-none min-w-[200px] md:w-[300px] xl:min-w-[30%] xl:items-start xl:ml-[20%] 2xl:ml-0 2xl:max-w-[15%]">
                <h3 className="mr-2 text-sky-600 xl:text-white text-2xl xl:border-l-[1px] xl:hover:border-l-4 transition-all xl:pl-4 xl:py-0 border-indigo-400 z-10">
                  A history of success.
                </h3>
                <p className="text-gray-400 mt-1 xl:px-5 xl:max-w-[500px]">
                  Formerly Tournaments.Tech, Debate Land has been the go-to data source for debate since 2019.
                </p>
              </div>
              <div className="h-full rounded-xl p-3 xl:p-0 bg-transparent xl:rounded-none min-w-[200px] md:w-[300px] xl:min-w-[30%] xl:items-start 2xl:max-w-[15%]">
                <h3 className="mr-2 text-indigo-400 xl:text-white text-2xl xl:border-l-[1px] xl:hover:border-l-4 transition-all xl:pl-4 xl:py-0 border-indigo-400 z-10">
                  Transparent, always.
                </h3>
                <p className="text-gray-400 mt-1 xl:px-5 xl:max-w-[500px]">
                  We've been open source since day one. Everything from our scrapers to our ranking methodology is
                  available on GitHub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-20 xl:mt-20 space-y-6" id="features">
        <div className="flex flex-col mx-auto xl:flex-row md:w-2/3 xl:w-full xl:space-x-[20px] 2xl:space-x-[10%] px-5 items-center justify-around xl:justify-start">
          <div className="flex flex-col md:max-w-[600px] 2xl:max-w-[35%] xl:ml-[20%] 2xl:mr-[3%]">
            <h2
              className="mb-5 text-5xl text-center xl:text-left xl:border-l-[1px] xl:hover:border-l-4 transition-all xl:pl-4 xl:-ml-3 border-indigo-400 z-10"
              id="mobile"
            >
              Debate{' '}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600">
                on the go
              </span>
              .
            </h2>
            <p className="text-md text-gray-400 pr-5 xl:ml-2">
              Our website is great, but our mobile app is just as easy to use. Get the same access to all of our tools,
              but more performant and native for your mobile device. Oh yeah, did we also mention it's completely free,
              cross-platform, and open-source?
            </p>
            <div className="flex flex-col mt-4 self-center md:self-start sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full items-center sm:justify-start sm:items-center max-w-[300px] mt-2 xl:ml-2">
              <a href="https://apps.apple.com/us/app/tournaments-tech/id1598829136" className="w-1/2">
                <Image src={AppStoreGraphic} layout="responsive" draggable={false} alt="App Store Graphic" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=dev.smrth.tech.tournaments"
                className="w-1/2 sm:scale-[1.15]"
              >
                <Image src={GooglePlayGraphic} layout="responsive" draggable={false} alt="Google Play Graphic" />
              </a>
            </div>
          </div>
          <div className="w-full mt-10 xl:mt-0 sm:w-[50%] max-w-[200px] h-auto md:hover:-translate-y-9 transition-all">
            <Image src={MobileGraphic} layout="responsive" draggable={false} placeholder="blur" alt="Mobile Graphic" />
          </div>
        </div>
        <div className="flex flex-col mx-auto xl:flex-row md:w-2/3 xl:w-full xl:space-x-[20px] 2xl:space-x-[10%] px-5 items-center justify-around xl:justify-start">
          <div className="flex flex-col md:max-w-[600px] 2xl:max-w-[35%] xl:ml-[20%]">
            <h2
              className="mb-5 text-5xl text-center xl:text-left xl:border-l-[1px] xl:hover:border-l-4 transition-all xl:pl-4 xl:-ml-3 border-indigo-400 z-10"
              id="api"
            >
              API?{' '}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-600">
                Supercharged
              </span>
              .
            </h2>
            <p className="text-md text-gray-400 pr-5 xl:ml-2">
              We love our developers. To truly unlock the power of Debate Land, we've built a robust API that allows you
              to query our data like never before. Search everything, including: judges, rounds, tournaments, and
              entries. Using the API for research? Get in touch and we might be able to give you free access.
            </p>
            <div className="flex flex-col mt-4 self-center md:self-start sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full items-center sm:justify-start sm:items-center max-w-[300px] mt-2 xl:ml-2">
              <div className="w-1/2 flex justify-center items-center border p-3 rounded-md border-sky-600 text-sky-600 hover:bg-sky-600/30 backdrop-blur-3xl transition-all">
                <a href="https://dashboard.debate.land">Dashboard</a>
              </div>
              <div className="w-1/2 flex justify-center items-center border p-3 rounded-md border-indigo-600 text-indigo-600 hover:bg-indigo-600/30 backdrop-blur-3xl transition-all">
                <a href="https://docs.debate.land">Docs</a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[600px] mt-10 xl:mt-0 h-auto md:hover:scale-[105%] transition-all overflow-hidden text-xs">
            {/* <Terminal lines={terminalLines} white={theme === 'light'} /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
