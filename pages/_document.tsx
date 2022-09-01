import {Head, Html, Main, NextScript} from "next/document";

function MyDocument() {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Nunito+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}

export default MyDocument;