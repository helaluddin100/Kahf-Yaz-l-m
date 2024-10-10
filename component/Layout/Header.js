import { useState, useEffect } from "react";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";


function Header() {
  return (
    <header>
      <div className="navigation">
        <div className="container">
          <div className="header-wrapper">

            <div className="logo">
              <Link href="/">
                <a>
                  <img src="assets/img/logo.png" alt="Logo" />
                  <p>devlinks</p>
                </a>


              </Link>
            </div>

            <div className="profile-link">
              <Link href="/about">
                <a className="profile-btn active"><FaLink /><span>Link</span></a>
              </Link>

              <Link href="/about">
                <a className="profile-btn"><FaRegUserCircle /><span>Profile Details</span></a>
              </Link>
            </div>


            <div className="preview">
              <Link href="/"><a className="prev-btn">Preview</a></Link>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
}
export default Header;
