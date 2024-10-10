import React, { useEffect, useState } from "react";
import Link from "next/link";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";

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

      <div className="body-gap">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-side-button">
                <div className="phone-wrapper">
                  <div className="view-phone">
                    <img src="assets/img/iphone.png" alt="" />
                  </div>
                  <div className="phone-profile">
                    <div className="profile-image">
                      <div className="blank"></div>
                    </div>
                    <div className="profile-name">
                      <div className="name"></div>
                      <div className="email"></div>
                    </div>

                    <div className="button-area">
                      <button className="social-btn bg-black"><span><FaGithub /> <span>GitHub</span> </span><FaArrowRightLong />
                      </button>
                      <button className="social-btn bg-red"><span><IoLogoYoutube /> <span>Youtube</span> </span><FaArrowRightLong />
                      </button>
                      <button className="social-btn bg-blue"><span><CiLinkedin /> <span>Linkedin</span> </span><FaArrowRightLong />
                      </button>

                      <button className="social-btn bg-blank">
                      </button>

                      <button className="social-btn bg-blank">
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <h1>Right</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Home.layout = AppLayout;

export default Home;
