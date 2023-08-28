import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import Logo from './logo.png'

const config: DocsThemeConfig = {
  logo: <span><Image alt="logo" src={Logo} height={42} style={{borderRadius: '3px'}}/></span>,
  project: {
    link: 'https://github.com/wewoor/textops-web',
  },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'TextOps © 2023',
  },
  i18n: [
    { locale: 'zh', text: '中文' },
    { locale: 'en', text: 'English' },
  ]
}

export default config
