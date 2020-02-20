// @generated: @expo/next-adapter@2.0.5
import { getInitialProps } from '@expo/next-adapter/document';
import { ServerStyleSheet } from 'styled-components';
import Document, { Head, Main, NextScript, DocumentContext, } from 'next/document';
import React from 'react';


const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <html style={{ height: '100%' }}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <body style={{ height: '100%', overflow: 'hidden' }}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}