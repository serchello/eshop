import React from 'react'

import Head from 'next/head'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'


export default function Master({children}) {

    return (

        <>
            <Head>
                <title>Create Next App</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="grid-container">
                <Header />
            <main>
               {children}
            </main>
                <Footer/>
            </div>
        </>
    )
}