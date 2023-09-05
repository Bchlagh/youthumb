import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            data-ad-client="YOUR_ADSENSE_CLIENT_ID"
          ></script>
        </Head>
        <body>
          <header>
            {/* Your header content */}
          </header>
          <main>
            {/* Your main content */}
            <Main />
          </main>
          <footer>
            <div style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
              <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h1>About YT Thumbnail Downloader</h1>
                <p>
                  YT (You Thumbnail) YouTube thumbnail downloader allows you to
                  download YouTube thumbnails easily and quickly. It's an online
                  tool that doesn't require any app installation and is entirely
                  free for anyone to use.
                </p>
                {/* Add more content here */}
              </div>
            </div>
          </footer>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
