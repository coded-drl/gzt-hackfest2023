import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient({ defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } } }));

    return (
        <>
            <Head>
                <title>Gen Z Hackfest 2023</title>

                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="title" content="Gen Z Hackfest 2023" />
                <meta name="description" content="Gen Z Hackfest 2023 is an annual hybrid event organised by the GenZtechies Community 🚀" />

                <link rel="icon" href="https://assets.genztechies.com/icon-coloured.png" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://hackfest2023.genztechies.com/" />
                <meta property="og:title" content="Gen Z Hackfest 2023" />
                <meta property="og:description" content="Gen Z Hackfest 2023 is an annual hybrid event organised by the GenZtechies Community 🚀" />
                <meta property="og:image" content="https://hackfest2023.genztechies.com/assets/site-metaimage.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://hackfest2023.genztechies.com/" />
                <meta property="twitter:title" content="Gen Z Hackfest 2023" />
                <meta property="twitter:description" content="Gen Z Hackfest 2023 is an annual hybrid event organised by the GenZtechies Community 🚀" />
                <meta property="twitter:image" content="https://hackfest2023.genztechies.com/assets/site-metaimage.png" />
            </Head>

            <ToastContainer newestOnTop={true} pauseOnHover={false} autoClose={3000} />

            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />

                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    );
}

export default App;
