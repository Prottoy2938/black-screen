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
          <meta property="og:image" content="https://iili.io/31s0cN.jpg" />
          <meta
            property="og:description"
            content="A webapp which's screen is black"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="shortcut icon" href="https://iili.io/31s1SI.jpg" />
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
