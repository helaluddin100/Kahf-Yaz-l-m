import { useState, useEffect } from "react";
import Link from "next/link";
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
        </div>
        </div>
    </div>
  </header>
  
  );
}
export default Header;
