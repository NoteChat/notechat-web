import Script from "next/script";
import "../styles/globals.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
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
    )
}
