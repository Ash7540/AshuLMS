import type { AppProps } from "next/app";
import { PageProps } from './../.next/types/app/layout';
import { Component } from "react";

export default function MyApp({ Component, pageProps }: AppProps){
    return <Component {...pageProps} />
}