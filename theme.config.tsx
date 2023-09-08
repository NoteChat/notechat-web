import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import Logo from './logo.png'
import { ExtraContent } from './components/navbar'


const config: DocsThemeConfig = {
  logo: <span><Image alt="logo" src={Logo} height={42} style={{borderRadius: '3px'}}/></span>,
  search: {
    placeholder: 'Search',
  },
  navbar: {
    extraContent: <ExtraContent />,
  },
  footer: {
    text: 'NoteChat © 2023',
  },
  i18n: [
    { locale: 'zh', text: '中文' },
    { locale: 'en', text: 'English' },
  ]
}

export default config
