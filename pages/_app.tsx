import Script from "next/script";
import { useEffect } from "react";
import "../styles/globals.css";
import i18n from '../i18n';  
import { I18nextProvider } from 'react-i18next';
import { useRouter } from 'next/router'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    const { locale } = useRouter();
    i18n.changeLanguage(locale);

    useEffect(() => {
        localStorage.setItem('lang', locale)
    }, [])
    return (
        <>
            <I18nextProvider i18n={i18n}>
                <Component {...pageProps} />
            </I18nextProvider>
            <Script
                id="googleA"
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-EGNS0XPX6D"
                strategy="afterInteractive"
            ></Script>
            <Script
                id="googleA1"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || []
                        function gtag() {
                            dataLayer.push(arguments)
                        }
                        gtag('js', new Date())
                        gtag('config', 'G-EGNS0XPX6D')
                    `,
                }}
            ></Script>
        </>
    );
}
