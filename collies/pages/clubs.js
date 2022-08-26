import React from 'react'
import {motion} from 'framer-motion'
import Image from "next/image";
import {gsap} from 'gsap'
import Link from "next/link";
function clubs() {
  // gsap.from(
  //   ".header > div, .main-title > div, .divider, .hero-image, .hero-title > div, .btns> div, .hero-copy > div",
  //   2,
  //   {
  //     y: "200",
  //     opacity: 0,
  //     ease: Expo.easeInOut,
  //     delay: 1,
  //     stagger: 0.08,
  //   }
  // );

  // gsap.from(".arrow-img img", 1, {
  //   scale: 0,
  //   ease: Elastic.easeOut,
  //   delay: 4,
  // });
  return (
<div className="container">
      <div className="header">
        <div className="header-logo">✸</div>
        <div className="header-menu-1">
         
          {/* <Link href="/"> <a href="/">Home</a></Link> */}
          {/* <li>Portfolio</li> */}
          <li className="hmu">Home</li>
          <li className="hmu">Collections</li>
          <li className="hmu">Blog</li>
        </div>
        <div className="header-menu-2">
          {/* <li>About us</li> */}
          <li className="hmu">Dashboard</li>
          {/* <li>Shop</li> */}
          <li className="hmu">Teams</li>
        </div>
        <div className="header-hamburger">
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="wrapper">
        <div className="main-title">
          {/* <div className="title-logo"><img src="images/logo.png" alt="" /></div> */}
          <div className="title">COLLIES</div>
        </div>
        <div className="divider"></div>
        <div className="hero-image">
          <div className="hero-title">
            <div>X</div>
            <div>3</div>
            <div>A</div>
            <div>G</div>
            {/* <div className="arrow-img"><img src="images/arrow.png" alt="" /></div> */}
            <div>2</div>
          </div>
          <div className="hero-copy">
            <div className="copy-left">
              <div className="btns">
                {/* <div className="btn">Portfolio Product</div> */}
                <div className="btn">EXPLORE CLUBS</div>
              </div>
              <div className="copy">
                Travel in discovering interesting. Build Community and Connect with likeminded people
                <br />
                Get inspired and learn about tech and world.
              </div>
            </div>
            <div className="copy-right">
              <div className="copy">
                A place of interesting people and information
                <br />
                Have fun and Learn
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default clubs