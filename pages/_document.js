import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="description"
            content="Download YouTube thumbnails easily and quickly with our online tool. It's free, fast, and simple to use."
          />
          <meta
            name="keywords"
            content="YouTube thumbnail downloader, download YouTube thumbnails, video cover images"
          />
          <title>About YT Thumbnail Downloader - Download YouTube Thumbnails</title>
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
            <h1>About YT Thumbnail Downloader</h1>
            <p>
              YT (You Thumbnail) YouTube thumbnail downloader allows you to
              download YouTube thumbnails easily and quickly. It's an online
              tool that doesn't require any app installation and is entirely
              free for anyone to use.
            </p>
          </header>
          <main>
            {/* Your main content */}
            <Main />
          </main>
          <footer>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <h1>Additional Information</h1>
              <p>
                YT (You Thumbnail) YouTube thumbnail downloader is a powerful
                tool that simplifies the process of obtaining YouTube video
                thumbnails. Whether you are a content creator, a designer, or
                simply looking to enhance your online presence, our tool offers
                a range of features to meet your needs.
              </p>
              <p>
                <strong>Why Choose YT Thumbnail Downloader?</strong>
              </p>
              <ul>
                <li>
                  <strong>Efficiency:</strong> Our tool provides a quick and
                  easy way to access YouTube video thumbnails without the need
                  for complex procedures.
                </li>
                <li>
                  <strong>High-Quality:</strong> We offer access to
                  high-resolution thumbnails, ensuring that your downloaded
                  images are crisp and clear.
                </li>
                <li>
                  <strong>Variety:</strong> Choose from a selection of
                  thumbnail sizes, including High-Quality, Medium Quality, and
                  full size, to suit your specific requirements.
                </li>
                <li>
                  <strong>Legal and Ethical:</strong> We promote the
                  responsible use of thumbnails and encourage users to respect
                  copyright and intellectual property rights when utilizing
                  downloaded images.
                </li>
              </ul>
              <p>
                YT Thumbnail Downloader is committed to providing a
                user-friendly and reliable service. We strive to empower content
                creators and designers by offering an accessible solution for
                enhancing their visual content. Try our thumbnail downloader
                today and discover the convenience it brings to your online
                endeavors.
              </p>
            </div>
          </footer>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
