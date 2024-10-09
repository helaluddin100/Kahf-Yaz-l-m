import React, { useEffect, useState } from "react";
import Link from "next/link";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>
          In Non-Fungible Token Development Services, We Are the Experts – NFT
          Constructer
        </title>

        <meta
          name="description"
          content="NFT Constructer offers highly professional website design and development services with affordable pricing plans specialized for NFT DeFi Blockchain and Web3 based projects corporate clients and startups."
        ></meta>
        <meta property="image" content="assets/img/meta/1.jpg" />
        <meta
          name="keywords"
          content="Nft minting website development NFT Website Design NFT marketplace development"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>

      <div>
        <h2>Hello BOdy</h2>
      </div>
    </>
  );
}
Home.layout = AppLayout;

export default Home;
