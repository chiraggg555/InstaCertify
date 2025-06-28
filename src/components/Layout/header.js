import { useEffect, useState } from "react";

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); 
    const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 230);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div class="absolute top-0 left-0 w-screen h-full bg-opacity-80 hidden video-iframe bg-[#0b0b0b] z-[999999]">
                <div class="mx-auto video w-1/2">
                    <div class="flex justify-end">
                        <button class="text-white close-video text-[20px]" type="button" title="Close (Esc)">x</button>
                    </div>
                    <iframe class="aspect-video w-full" src="https://www.youtube.com/embed/oRI37cOPBQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class={`overlay ${menuOpen ? "show":""} `} ></div>
            <header className={`h-auto full-width relative py-[15px] lg:py-[26px] ${isSticky ? "sticky-header" : ""}`} >
                <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 flex items-center justify-between mx-auto relative !mt-0 max-w-[1320px]">
                    <a className="flex" href="/">
                        <img
                            className="logo z-50 w-[90px] md:w-[101px] lg:w-[122px] xl:w-[138px]"
                            src="./assets/images/logo.svg"
                            alt="logo image"
                        />
                    </a>
                    <nav className="z-50 absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:block">
                        <ul className="navbar flex flex-col justify-center font-chivo gap-[34px] lg:flex-row">
                            <li className="flex items-center group">
                                <a
                                    className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                                    href="/"
                                >
                                    Home
                                </a>
                                <i>
                                    <img
                                        className="icon-caret group-hover:filter-green"
                                        src="./assets/images/icons/icon-caret.svg"
                                        alt="caret"
                                    />
                                </i>
                                <ul className="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-2 w-[340px]">
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="hp1"
                                    >
                                        <a className="flex items-center text-[14px]" href="/">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-home.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Homepage 01</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="hp2"
                                    >
                                        <a className="flex items-center text-[14px]" href="/home-2.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-home.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Homepage 02</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="hp3"
                                    >
                                        <a className="flex items-center text-[14px]" href="/home-3.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-home.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Homepage 03</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="hp4"
                                    >
                                        <a className="flex items-center text-[14px]" href="/home-4.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-home.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Homepage 04</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="hp5"
                                    >
                                        <a className="flex items-center text-[14px]" href="/home-5.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-home.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Homepage 05</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="hp6"
                                    >
                                        <a className="flex items-center text-[14px]" href="/home-6.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-home.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Homepage 06</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="hp7"
                                    >
                                        <a className="flex items-center text-[14px]" href="/home-7.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-home.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Homepage 07</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="hp8"
                                    >
                                        <a className="flex items-center text-[14px]" href="/home-8.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-home.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Homepage 08</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="flex items-center group">
                                <a
                                    className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                                    href="/"
                                >
                                    About
                                </a>
                                <i>
                                    <img
                                        className="icon-caret group-hover:filter-green"
                                        src="./assets/images/icons/icon-caret.svg"
                                        alt="caret"
                                    />
                                </i>
                                <ul className="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="ab1"
                                    >
                                        <a className="flex items-center text-[14px]" href="/about-1.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-star-header.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">About 01</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="ab2"
                                    >
                                        <a className="flex items-center text-[14px]" href="/about-2.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-star-header.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">About 02</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="ab3"
                                    >
                                        <a className="flex items-center text-[14px]" href="/about-3.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-star-header.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">About 03</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="flex items-center group">
                                <a
                                    className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                                    href="/"
                                >
                                    Company
                                </a>
                                <i>
                                    <img
                                        className="icon-caret group-hover:filter-green"
                                        src="./assets/images/icons/icon-caret.svg"
                                        alt="caret"
                                    />
                                </i>
                                <ul className="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="sv1"
                                    >
                                        <a
                                            className="flex items-center text-[14px]"
                                            href="/services-1.html"
                                        >
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-gem.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Services 01</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="sv2"
                                    >
                                        <a
                                            className="flex items-center text-[14px]"
                                            href="/services-2.html"
                                        >
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-gem.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Services 02</span>
                                        </a>
                                    </li>
                                    <li className="hr px-[22px]">
                                        {" "}
                                        <span className="block bg-gray-100 w-full h-[1px] my-[5px]" />
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="p1"
                                    >
                                        <a
                                            className="flex items-center text-[14px]"
                                            href="/pricing-1.html"
                                        >
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-database.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Pricing 01</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="p2"
                                    >
                                        <a
                                            className="flex items-center text-[14px]"
                                            href="/pricing-2.html"
                                        >
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-database.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Pricing 02</span>
                                        </a>
                                    </li>
                                    <li className="hr px-[22px]">
                                        {" "}
                                        <span className="block bg-gray-100 w-full h-[1px] my-[5px]" />
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="faqs1"
                                    >
                                        <a className="flex items-center text-[14px]" href="/faqs-1.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-headset.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">FAQS 01</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="faqs2"
                                    >
                                        <a className="flex items-center text-[14px]" href="/faqs-2.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-headset.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">FAQS 02</span>
                                        </a>
                                    </li>
                                    <li className="hr px-[22px]">
                                        {" "}
                                        <span className="block bg-gray-100 w-full h-[1px] my-[5px]" />
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="career"
                                    >
                                        <a className="flex items-center text-[14px]" href="/career.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-briefcase.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Career</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="career-details"
                                    >
                                        <a
                                            className="flex items-center text-[14px]"
                                            href="/career-details.html"
                                        >
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-briefcase.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Career Detials</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="flex items-center group">
                                <a
                                    className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                                    href="/"
                                >
                                    Pages
                                </a>
                                <i>
                                    <img
                                        className="icon-caret group-hover:filter-green"
                                        src="./assets/images/icons/icon-caret.svg"
                                        alt="caret"
                                    />
                                </i>
                                <ul className="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="contact"
                                    >
                                        <a className="flex items-center text-[14px]" href="/contact.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-plane-header.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Contact</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="singup"
                                    >
                                        <a className="flex items-center text-[14px]" href="/signup.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-user-add.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Sign Up</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="login"
                                    >
                                        <a className="flex items-center text-[14px]" href="/login.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-fingerprint.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Log In</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="rp"
                                    >
                                        <a
                                            className="flex items-center text-[14px]"
                                            href="/reset-password.html"
                                        >
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-settings.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Reset Password</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="error404"
                                    >
                                        <a
                                            className="flex items-center text-[14px]"
                                            href="/error-404.html"
                                        >
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-exclamation.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Error 404</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="flex items-center group">
                                <a
                                    className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                                    href="/"
                                >
                                    Blog
                                </a>
                                <i>
                                    <img
                                        className="icon-caret group-hover:filter-green"
                                        src="./assets/images/icons/icon-caret.svg"
                                        alt="caret"
                                    />
                                </i>
                                <ul className="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="b1"
                                    >
                                        <a className="flex items-center text-[14px]" href="/blog-1.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-edit.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Blog 01</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="b2"
                                    >
                                        <a className="flex items-center text-[14px]" href="/blog-2.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-edit.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Blog 02</span>
                                        </a>
                                    </li>
                                    <li className="hr px-[22px]">
                                        {" "}
                                        <span className="block bg-gray-100 w-full h-[1px] my-[5px]" />
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="single"
                                    >
                                        <a className="flex items-center text-[14px]" href="/single.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-document-signed.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Blog Single</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="flex items-center group">
                                <a
                                    className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                                    href="/"
                                >
                                    Shop
                                </a>
                                <i>
                                    <img
                                        className="icon-caret group-hover:filter-green"
                                        src="./assets/images/icons/icon-caret.svg"
                                        alt="caret"
                                    />
                                </i>
                                <ul className="menu-child translate-y-4 opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="s1"
                                    >
                                        <a className="flex items-center text-[14px]" href="/shop-1.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-edit.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Shop 01</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="s2"
                                    >
                                        <a className="flex items-center text-[14px]" href="/shop-2.html">
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-edit.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Shop 02</span>
                                        </a>
                                    </li>
                                    <li
                                        className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                        data-menu="product"
                                    >
                                        <a
                                            className="flex items-center text-[14px]"
                                            href="/single-product.html"
                                        >
                                            <img
                                                className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                                src="./assets/images/icons/icon-edit.svg"
                                                alt=""
                                            />
                                            <span className="whitespace-nowrap">Product Details</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="hidden xl:block">
                        <button type="button">
                            {" "}
                            <a
                                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] hidden lg:flex"
                                href="#"
                            >
                                <span className="block text-inherit w-full h-full rounded-[50px] text-heading-6 font-bold font-chivo">
                                    Learn more
                                </span>
                                <i>
                                    {" "}
                                    <img
                                        className="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                                        src="./assets/images/icons/icon-right.svg"
                                        alt="arrow right icon"
                                    />
                                </i>
                            </a>
                        </button>
                    </div>
                </div>
                <div
                    // className="burger-icon burger-icon-white menu__icon burder-close "
                    className={`burger-icon burger-icon-white menu__icon cursor-pointer ${menuOpen ? "burger-close" : ""}`}
                    onClick={toggleMenu}
                >
                    <span className="burger-icon-top" />
                    <span className="burger-icon-mid"> </span>
                    <span className="burger-icon-bottom" />
                </div>
                <nav className={`fixed top-0 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll nav-mobile transition-all duration-200 w-[380px] z-[100] ${menuOpen ? "":"opacity-0 pointer-events-none"}  `}>
                    <div className="flex items-center border-b p-[15px] lg:p-[26px] gap-[10px] border-[#F2F4F7]">
                        <img
                            className="max-w-[50px]"
                            src="./assets/images/avatar-9.png"
                            alt="avatar"
                        />
                        <div>
                            <p className="font-bold">Hi! Steven</p>
                            <p className="text-sm font-chivo text-gray-500">
                                You have 5 new messages
                            </p>
                        </div>
                    </div>
                    <div className="p-[30px]">
                        <ul className="font-chivo font-medium text-[16px] leading-[16px]">
                            <li className={`group menu-mobile-item py-[13px] ${expanded && "expand"}`} onClick={toggleExpand}>
                                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                    <p>Home</p>
                                    <img
                                        className="w-[18px] h-[18px]"
                                        src="./assets/images/icons/icon-angle-down-fill.svg"
                                        alt="angle icon"
                                    />
                                </div>
                                <ul className="pl-5 menu-child hidden pt-[10px]">
                                    <li className="text-md py-[10px]" id="hp1">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/"
                                        >
                                            Homepage 01
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="hp2">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/home-2.html"
                                        >
                                            Homepage 02
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="hp3">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/home-3.html"
                                        >
                                            Homepage 03
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="hp4">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/home-4.html"
                                        >
                                            Homepage 04
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="hp5">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/home-5.html"
                                        >
                                            Homepage 05
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="hp6">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/home-6.html"
                                        >
                                            Homepage 06
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="hp7">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/home-7.html"
                                        >
                                            Homepage 07
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="hp8">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/home-8.html"
                                        >
                                            Homepage 08
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="group menu-mobile-item py-[13px]">
                                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                    <p>About</p>
                                    <img
                                        className="w-[18px] h-[18px]"
                                        src="./assets/images/icons/icon-angle-down-fill.svg"
                                        alt="angle icon"
                                    />
                                </div>
                                <ul className="pl-5 menu-child hidden pt-[10px]">
                                    <li className="text-md py-[10px]" id="ab1">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/about-1.html"
                                        >
                                            About 01
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="ab2">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/about-2.html"
                                        >
                                            About 02
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="ab3">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/about-3.html"
                                        >
                                            About 03
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="group menu-mobile-item py-[13px]">
                                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                    <p>Services</p>
                                    <img
                                        className="w-[18px] h-[18px]"
                                        src="./assets/images/icons/icon-angle-down-fill.svg"
                                        alt="angle icon"
                                    />
                                </div>
                                <ul className="pl-5 menu-child hidden pt-[10px]">
                                    <li className="text-md py-[10px]" id="sv1">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/services-1.html"
                                        >
                                            Services 01
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="sv2">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/services-2.html"
                                        >
                                            Services 02
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="p1">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/pricing-1.html"
                                        >
                                            Pricing 01
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="p2">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/pricing-2.html"
                                        >
                                            Pricing 02
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="faqs1">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/faqs-1.html"
                                        >
                                            FAQS 01
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="faqs2">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/faqs-2.html"
                                        >
                                            FAQS 02
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="career">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/career.html"
                                        >
                                            Career
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="career-details">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/career-details.html"
                                        >
                                            Career Detials
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="group menu-mobile-item py-[13px]">
                                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                    <p>Pages</p>
                                    <img
                                        className="w-[18px] h-[18px]"
                                        src="./assets/images/icons/icon-angle-down-fill.svg"
                                        alt="angle icon"
                                    />
                                </div>
                                <ul className="pl-5 menu-child hidden pt-[10px]">
                                    <li className="text-md py-[10px]" id="contact">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/contact.html"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="singup">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/signup.html"
                                        >
                                            Sign Up
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="login">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/login.html"
                                        >
                                            Log In
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="rp">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/reset-password.html"
                                        >
                                            Reset Password
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="error404">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/error-404.html"
                                        >
                                            Error 404
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="group menu-mobile-item py-[13px]">
                                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                    <p>Blog</p>
                                    <img
                                        className="w-[18px] h-[18px]"
                                        src="./assets/images/icons/icon-angle-down-fill.svg"
                                        alt="angle icon"
                                    />
                                </div>
                                <ul className="pl-5 menu-child hidden pt-[10px]">
                                    <li className="text-md py-[10px]" id="b1">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/blog-1.html"
                                        >
                                            Blog 01
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="b2">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/blog-2.html"
                                        >
                                            Blog 02
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="single">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/single.html"
                                        >
                                            Blog Single
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="group menu-mobile-item py-[13px]">
                                <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                    <p>Shop</p>
                                    <img
                                        className="w-[18px] h-[18px]"
                                        src="./assets/images/icons/icon-angle-down-fill.svg"
                                        alt="angle icon"
                                    />
                                </div>
                                <ul className="pl-5 menu-child hidden pt-[10px]">
                                    <li className="text-md py-[10px]" id="s1">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/shop-1.html"
                                        >
                                            Shop 01
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="s2">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/shop-2.html"
                                        >
                                            Shop 02
                                        </a>
                                    </li>
                                    <li className="text-md py-[10px]" id="product">
                                        <a
                                            className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                            href="/single-product.html"
                                        >
                                            Product Details
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="mt-5 border-t border-b border-gray-100 pb-5 mb-[25px] pt-[30px]">
                            <p className="font-bold text-heading-6 mb-[10px]">Your Account</p>
                            <ul className="text-[15px]">
                                <li className="py-[13px]">
                                    <a
                                        className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                        href="/"
                                    >
                                        Profile
                                    </a>
                                </li>
                                <li className="py-[13px]">
                                    <a
                                        className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                        href="/"
                                    >
                                        Work Preferences
                                    </a>
                                </li>
                                <li className="py-[13px]">
                                    <a
                                        className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                        href="/"
                                    >
                                        My Boosted Shots
                                    </a>
                                </li>
                                <li className="py-[13px]">
                                    <a
                                        className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                        href="/"
                                    >
                                        My Collections
                                    </a>
                                </li>
                                <li className="py-[13px]">
                                    <a
                                        className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                        href="/"
                                    >
                                        Account Settings
                                    </a>
                                </li>
                                <li className="py-[13px]">
                                    <a
                                        className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                        href="/"
                                    >
                                        Go Pro
                                    </a>
                                </li>
                                <li className="py-[13px]">
                                    <a
                                        className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                        href="/"
                                    >
                                        Sign Out
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-gray-400 font-chivo text-[13px]">
                            Copyright 2022 © Agon - Agency Template.
                            <br />
                            <span>Designed by</span>
                            <a className="text-green-900" href="http://alithemes.com">
                                &nbsp;AliThemes
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;