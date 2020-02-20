import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '../apollo';;
import ThemeProvider from 'components/ThemeProvider'

interface Props {
    apollo: any;
}

class MyApp extends App<Props> {

    render() {
        const { Component, pageProps, apollo } = this.props;
        return (
            <ApolloProvider client={apollo}>
                <ThemeProvider>
                    <Component {...pageProps} />
                </ThemeProvider>
            </ApolloProvider>
        );
    }
}

export default withApollo(MyApp);