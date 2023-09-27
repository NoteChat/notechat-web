import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import Logo from './logo.png'
import { ExtraContent } from './components/navbar'
import Head from './components/head'
import { Footer } from './components/footer'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – NoteChat'
    }
  },
  logo: <span><Image alt="logo" src={Logo} height={42} style={{borderRadius: '3px'}}/></span>,
  project: {
    link: 'https://github.com/notechat/notechat-web'
  },
  head: Head,
  search: {
    placeholder: 'Search',
  },
  navbar: {
    extraContent: <ExtraContent />,
  },
  footer: {
    text: <div className="w-full">
      <Footer />
      <div className='text-center mt-5'>NoteChat © 2023 Prettify, LLC.</div>
    </div>
  },
  i18n: [
    { locale: 'zh', text: '中文' },
    { locale: 'en', text: 'English' },
  ]
}

export default config

