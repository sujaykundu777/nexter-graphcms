import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document{
    render(){
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Nexter is nextjs starter" />
                    <meta name="keywords" content="next react seo mern javascript nextjs" />
                    <meta name="author" content="Sujay Kundu"/>

                    <link rel="stylesheet" href="/custom.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
export default MyDocument;