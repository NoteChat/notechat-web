import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import Logo from './logo.png'
import { ExtraContent } from './components/navbar'
import Head from './components/head'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – NoteChat'
    }
  },
  logo: <span><Image alt="logo" src={Logo} height={42} style={{borderRadius: '3px'}}/></span>,
  head: Head,
  search: {
    placeholder: 'Search',
  },
  navbar: {
    extraContent: <ExtraContent />,
  },
  footer: {
    text: 'NoteChat © 2023 Prettify, LLC.',
  },
  i18n: [
    { locale: 'zh', text: '中文' },
    { locale: 'en', text: 'English' },
  ]
}

export default config

