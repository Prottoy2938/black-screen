import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            httpEquiv="Content-Type"
            content="text/html; charset=ISO-8859-1"
          />
          <meta name="description" content="A webapp which's screen is black" />

          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://i.ibb.co/r5yWC5b/black-image.jpg"
          />
          <meta
            property="og:description"
            content="A webapp which's screen is black"
          />
          <meta property="og:url" content="https://black-screen.vercel.app/" />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="shortcut icon" href="/favicon.jpg" />
          <meta property="og:title" content="Black" />
          <title>Black</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
