import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content="VgBh7FsoCnNZHG5MjTpiA_bTt6Mm8K4yIf2aBAavUyU"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lora:ital@0;1&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-PJN0G9HN9T`}
          />
          <script
            data-host="https://microanalytics.io"
            data-dnt="false"
            src="https://microanalytics.io/js/script.js"
            id="ZwSg9rf6GA"
            async
            defer
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PJN0G9HN9T', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
