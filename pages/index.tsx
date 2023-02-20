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
        <div className="text-center font-bold font-intro uppercase pb-8">
          <Link href="/sewer">Go to Mint</Link>
        </div>
        <Footer />
      </main>
    </>
  )
}
