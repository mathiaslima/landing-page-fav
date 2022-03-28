import React from 'react'
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <link
                        href='http://fonts.googleapis.com/css?family=Roboto Condensed:400,500,700'
                        rel='stylesheet'
                    />
                    <link
                        type="image/x-icon"
                        rel="shortcut icon"
                        href="https://a3m48d207g.map.azionedge.net/custom/content/themes/base/imagens/yc-favicon.ico?aaaa"
                    />
                </Head>


                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
}