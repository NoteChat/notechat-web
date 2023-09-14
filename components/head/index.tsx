import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const Head = () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://notecht.xyz' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{frontMatter.title || 'NoteChat'}</title>
        <meta name="keywords" content={frontMatter.keywords || 'NoteChat,AIGC,ChatGPT,ChatGPT-4'} />
        <link rel="icon" href="./favicon.png" type="image/png"></link>
        <meta property="og:url" content={url} />
      </>
    )
}

export default Head
