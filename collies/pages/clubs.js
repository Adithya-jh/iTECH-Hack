import React from 'react'
import {motion} from 'framer-motion'
import Image from "next/image";
import {gsap} from 'gsap'

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
<div class="container">
      <div class="header">
        <div class="header-logo">✸</div>
        <div class="header-menu-1">
          <li>Home</li>
          {/* <li>Portfolio</li> */}
          <li>Collections</li>
          <li>Blog</li>
        </div>
        <div class="header-menu-2">
          {/* <li>About us</li> */}
          <li>Dashboard</li>
          {/* <li>Shop</li> */}
          <li>Teams</li>
        </div>
        <div class="header-hamburger">
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="wrapper">
        <div class="main-title">
          {/* <div class="title-logo"><img src="images/logo.png" alt="" /></div> */}
          <div class="title">COLLIES</div>
        </div>
        <div class="divider"></div>
        <div class="hero-image">
          <div class="hero-title">
            <div>X</div>
            <div>3</div>
            <div>A</div>
            <div>G</div>
            {/* <div class="arrow-img"><img src="images/arrow.png" alt="" /></div> */}
            <div>2</div>
          </div>
          <div class="hero-copy">
            <div class="copy-left">
              <div class="btns">
                {/* <div class="btn">Portfolio Product</div> */}
                <div class="btn">CLUBS</div>
              </div>
              <div class="copy">
                Travel in discovering interesting. Build Community and Connect with likeminded people
                <br />
                Get inspired and learn about tech and world.
              </div>
            </div>
            <div class="copy-right">
              <div class="copy">
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