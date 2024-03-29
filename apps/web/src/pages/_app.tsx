import '@src/styles/globals.css'
import React, { useState, useEffect } from 'react'
import { trpc } from '@src/utils/trpc'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import type { AppProps } from 'next/app'
// import { Poppins } from 'next/font/google'
import clsx from 'clsx'
import {Header, Footer} from '@src/components/layout'

// const poppins = Poppins({
//   style: ['italic', 'normal'],
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-poppins'
// })

const App = ({ Component, router, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <div
        className={clsx('flex flex-col w-full min-h-screen scroll-smooth overflow-hidden', {
          'dark:bg-coal': router.pathname !== '/',
        })}
      >
        <Header />
        <div className="mt-[3rem]"/>
        <Component {...pageProps} />
        <Footer />
      </div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-8VSXZQ5WH9" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive" defer>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8VSXZQ5WH9');
        `}
      </Script>
    </ThemeProvider>
  )
}

export default trpc.withTRPC(App);
