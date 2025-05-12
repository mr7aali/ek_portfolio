import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* <Head /> */}
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      {/* page-template page-template-templates page-template-inner-page page-template-templatesinner-page-php page page-id-1510 page-loaded has-menu-opened */}
      <body className="page-id-1510 page-loaded">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
