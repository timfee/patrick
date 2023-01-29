import PlausibleProvider from "next-plausible"
import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider
      domain="patrickalanstudio.com"
      trackOutboundLinks
      trackFileDownloads
      trackLocalhost
    >
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default MyApp
