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
          <style>
            {`
              /* Define your modern styles here */
              body {
                font-family: Arial, sans-serif;
                background-color: #f8f8f8;
                color: #333;
              }

              header {
                background-color: #007bff;
                color: #fff;
                padding: 20px;
                text-align: center;
              }

              footer {
                background-color: #f0f0f0;
                padding: 40px 0;
                color: #555;
                text-align: center;
              }

              h1 {
                font-size: 24px;
                margin-bottom: 10px;
                color: #333;
              }

              p {
                font-size: 16px;
                line-height: 1.6;
                color: #555;
              }

              ul {
                list-style-type: disc;
                margin-left: 20px;
              }

              strong {
                font-weight: bold;
                color: #333;
              }
            `}
          </style>
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
