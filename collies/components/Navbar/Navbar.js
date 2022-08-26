import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";


const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [isActive, setIsActive] = useState(false)
    const [sideBar, setSideBar] = useState(false);
    const [signUp, setSignUp] = useState(false);




    return (
        <>
            <div>
                <OutsideClickHandler onOutsideClick={() => { setSideBar(false); setSignUp(false) }}>
                    <div id={sideBar && "mySidenav"} className="sidenav">

                        <div className="signInBar">
                            <div className="signInBarContainer">
                                <div className="signInHeader">
                                    {signUp ? <p>Sign up</p> : <p>Sign in</p>}
                                    <div className="closeButton" onClick={() => { setSideBar(false) }}><p>Close</p> <i className="fa-solid fa-xmark" ></i></div>
                                </div>
                                {!signUp && <div>
                                    <div className="signInInput">
                                        <div>
                                            <div className="floating-label-group">
                                                <input type="text" id="username" className="form-control" autoComplete="off" autoFocus required />
                                                <label className="floating-label">Username</label>
                                            </div>
                                            <div className="floating-label-group">
                                                <input type="password" id="password" className="form-control" autoComplete="off" required />
                                                <label className="floating-label">Password</label>
                                            </div>
                                        </div>
                                        <div className="rememberMe">
                                            <input type="checkbox"></input>
                                            <label>Remember me</label>
                                        </div>

                                        <a className="signInBtn">SIGN IN</a>
                                        <a className="signUpBtn" onClick={() => { setSignUp(true) }}>CREATE AN ACCOUNT</a>
                                    </div>
                                    <div className="lostPass">
                                        <a><div><span>LOST YOUR PASSWORD ?</span></div></a>
                                    </div>
                                </div>}
                                {signUp && <div>
                                    <div className="signInInput">
                                        <div>
                                            <div className="floating-label-group">
                                                <input type="text" id="username" className="form-control" autoComplete="off" autoFocus required />
                                                <label className="floating-label">Username</label>
                                            </div>
                                            <div className="floating-label-group">
                                                <input type="password" id="password" className="form-control" autoComplete="off" required />
                                                <label className="floating-label">Password</label>
                                            </div>
                                        </div>
                                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.

                                        </p>

                                        <a className="signInBtn">SIGN UP</a>
                                    </div>
                                    <div className="lostPass" onClick={() => { setSignUp(false) }}>
                                        <a><div><span>ALREADY HAS AN ACCOUNT</span></div></a>
                                    </div>
                                </div>}
                            </div>
                        </div>

                    </div>
                </OutsideClickHandler>
                <div id="mainNavbar">
                    <div className="navbar">
                        <div className="navbarContainer">
                            <div className="navbarComponent left">
                                <div className="openClose" onClick={() => { setIsActive(!isActive) }} >
                                    {isActive ? <i className="fa-solid fa-xmark" ></i> : <i className="fa-solid fa-bars" ></i>}
                                </div>

                                <span className="navbarItems">
                                    <ul>
                                        <li><a className="underlineHover" href="/">Home</a></li>
                                        <li><a className="underlineHover" href="#">About Us</a></li>
                                        <li><a className="underlineHover" href="#">Products</a></li>
                                        <li><a className="underlineHover" href="#">Services</a></li>
                                        <li><a className="underlineHover" href="/contact">Contact Us</a></li>
                                    </ul>
                                </span>
                            </div>
                            {/*<h1>VALENCE</h1>*/}
                            {/* <img src={"https://firebasestorage.googleapis.com/v0/b/valence-am.appspot.com/o/Asserts%2Flogo.png?alt=media&token=e093bed7-8127-4c0b-a60a-027546c6f659"}></img> */}
                            <div className="navbarComponent right">
                                <ul>
                                    <span className="navbarItems">
                                        <li onClick={() => { setSideBar(true) }}><span className="underlineHover">Sign in</span></li>
                                        <li className="searchBar">
                                            {toggle ?
                                                <OutsideClickHandler onOutsideClick={() => { setToggle(false) }}>
                                                    <div className="openSearchBar">
                                                        <i className="fa-solid fa-magnifying-glass" onClick={() => { setToggle(true) }}></i>
                                                        <input placeholder="Search" type="text"></input>
                                                    </div>
                                                </OutsideClickHandler> :
                                                <i className="fa-solid fa-magnifying-glass" onClick={() => { setToggle(true) }}></i>}
                                        </li>

                                        <li>
                                            <label>Language</label>
                                            <select id="languages" name="languages">
                                                <option defaultChecked value="english">EN</option>
                                                <option value="arabic">AR</option>
                                            </select>
                                        </li>
                                    </span>
                                    <li className="cart">

                                        <a href="#">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </a>
                                        <p className="cartNum"><span>0</span></p>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="mobileNavbar" id={isActive && "mobileNavbarActive"}>
                            <div className="mNavbarContainer">
                                <ul>
                                    <li className="searchBar">
                                        {toggle ?
                                            <OutsideClickHandler onOutsideClick={() => { setToggle(false) }}>
                                                <div className="openSearchBar">
                                                    <i className="fa-solid fa-magnifying-glass" onClick={() => { setToggle(true) }}></i>
                                                    <input placeholder="Search" type="text"></input>
                                                </div>
                                            </OutsideClickHandler> :
                                            <i className="fa-solid fa-magnifying-glass" onClick={() => { setToggle(true) }}></i>}
                                    </li>
                                    <li onClick={() => { setIsActive(!isActive) }}><a className="underlineHover" href="#">Home</a></li>
                                    <li onClick={() => { setIsActive(!isActive) }}><a className="underlineHover" href="#">About Us</a></li>
                                    <li onClick={() => { setIsActive(!isActive) }}><a className="underlineHover" href="#">Products</a></li>
                                    {/* <li onClick={() => { setIsActive(!isActive) }}><a className="underlineHover" href="#">Services</a></li> */}
                                    {/* <li onClick={() => { setIsActive(!isActive) }}><a className="underlineHover" href="/contact">Contact Us</a></li> */}
                                    <li onClick={() => { setIsActive(!isActive); setSideBar(true) }}><a className="underlineHover" href="#">Sign in</a></li>
                                    <li>
                                        <label>Language</label>
                                        <select id="languages" name="languages">
                                            <option defaultChecked value="english">EN</option>
                                            <option value="arabic">AR</option>
                                        </select>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Navbar;