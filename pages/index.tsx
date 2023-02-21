import Head from "next/head"
import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import MintSteps from "../components/MintSteps"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Sewer Society</title>
        <meta name="description" content="My Images" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
        <MintSteps />
        <div className="flex justify-center items-center sm:mr-0 mr-2 font-bold font-intro uppercase pt-9 pb-12 text-primary">
          <Link href="/inscribe" className="hover:no-underline">
            CLICK HERE TO INSCRIBE
          </Link>
        </div>
        <Footer />
      </main>
    </>
  )
}
