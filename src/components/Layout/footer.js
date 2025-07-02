
import { FaXTwitter, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-[92px] lg:mt-[150px] xl:mt-[200px] mb-[30px]">
            <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
                <div className="flex flex-col items-center gap-2 mb-14 md:flex-row md:justify-between">
                    {" "}
                    <img
                        className="h-full object-cover  w-[90px] md:w-[101px] lg:w-[122px] xl:w-[139px]"
                        src="/assets/img/sad.svg"
                        alt="logo"
                    />
                    <div className="flex items-center flex-col gap-5 md:flex-row lg:gap-[30px]">
                        <p className="text-heading-6 font-chivo font-bold">
                            Ready to get started?
                        </p>
                        <button type="button">
                            {" "}
                            <a
                                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] text-white bg-gray-900 w-fit"
                                href="#"
                            >
                                <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                                    Create an Account
                                </span>
                            </a>
                        </button>
                    </div>
                </div>
                <div className="w-full bg-gray-200 h-[1px] mb-[52px]" />
                <div className="text-gray-600 grid gird-cols-1 gap-8 mb-[48px] md:grid-cols-2 lg:grid-cols-5 xl:gap-[98px]">
                    <div>
                        <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                            Contact Us
                        </h5>
                        <p className="text-text mb-5">
                            ADDRESS (CORPORATE OFFICE) <br />
                            A-34, Sector 63 A, Noida, Uttar Pradesh 201307
                        </p>
                        <p className="text-text underline">+91 9999118039</p>
                        <p className="text-text underline">Contact@instacertify.com</p>
                    </div>
                    <div>
                        <h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                            Services
                        </h5>

                        <marquee direction="up" scrollamount="2" behavior="scroll" height="200px">
                            <ul>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        BIS (ISI MARK) for Foreign Manufacturers
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        BIS (ISI Mark) for Domestic Product Certification
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        BIS (CRS Mark) for Compulsory Registration Scheme
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        EPR Plastic Waste
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        EPR E-Waste
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        EPR Battery Waste
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        EPR for Used Oil
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        EPR for Tyre
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        Peso Certification
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        NSIC of MSME
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        STQC Certification
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        FSSAI Registration
                                    </a>
                                </li>
                            </ul>
                        </marquee>
                    </div>

                    <div>
                        <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                            Industries
                        </h5>
                        <marquee direction="up" scrollamount="2" behavior="scroll" height="200px">
                            <ul>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        Electronic and Electricity
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        Chemicals
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        Foods
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        Toys
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        Metal and Alloys
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        Polymers and Plastics
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        Construction and Engineering
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        Wireless
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        Cosmetics
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        Software
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/">
                                        Environment
                                    </a>
                                </li>
                            </ul>
                        </marquee>
                    </div>
                    <div>
                        <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                            Support
                        </h5>
                        <ul>
                            <li className="mb-2">
                                <a
                                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                    href="/"
                                >
                                    Blogs
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                    href="/"
                                >
                                    About Us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                    href="/"
                                >
                                    FAQS
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                    href="/"
                                >
                                    Authors
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                            Useful links
                        </h5>
                        <ul>
                            <li className="mb-2">
                                <a
                                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                    href="/"
                                >
                                    Events
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                    href="/"
                                >
                                    Shop
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                    href="/"
                                >
                                    Patterns
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                    href="/"
                                >
                                    Themes
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full bg-gray-200 h-[1px] mb-[46px]" />
                <div className="text-gray-400 lg:flex lg:items-center lg:justify-between">
                    <div className="md:flex md:items-center md:gap-6">
                        <p className="text-lead font-bold">©Instacertify Official 2022</p>
                        <div className="flex items-center justify-between md:gap-6">
                            <a className="text-text" href="/">
                                Privacy policy
                            </a>
                            <a className="text-text" href="/">
                                Cookies
                            </a>
                            <a className="text-text" href="/">
                                Terms of service
                            </a>
                        </div>
                    </div>
                    {/* <div className="flex items-center justify-center gap-5 mt-5 lg:mt-0">
                        <a
                            href="/"
                            className="w-10 h-10 bg-[#328c91] text-white rounded-full flex items-center justify-center text-[16px] transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="/"
                            className="w-10 h-10 bg-[#328c91] text-white rounded-full flex items-center justify-center text-[16px] transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
                        >
                            <FaPinterest />
                        </a>
                        <a
                            href="/"
                            className="w-10 h-10 bg-[#328c91] text-white rounded-full flex items-center justify-center text-[16px] transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="/"
                            className="w-10 h-10 bg-[#328c91] text-white rounded-full flex items-center justify-center text-[16px] transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div> */}
                    <div className="flex items-center justify-center gap-5 mt-5 lg:mt-0">
                       <a
                            className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
                            href="/"
                        >
                            {/* <FaFacebookF className=" " /> */}
                            <img
                                className="h-full w-full object-cover"
                                src="./assets/images/icons/icon-facebook-green.svg"
                                alt="facebook icon"
                            />
                        </a>
                        <a
                            className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
                            href="/"
                        >
                            <img
                                className="h-full w-full object-cover"
                                src="./assets/images/icons/icon-instagram-green.svg"
                                alt="instagram icon"
                            />
                            {/* <FaTwitter /> */}
                        </a>
                        <a
                            className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
                            href="/"
                        >
                            <img
                                className="h-full w-full object-cover"
                                src="./assets/images/icons/icon-twitter-green.svg"
                                alt="twitter icon"
                            />
                            {/* <FaLinkedinIn /> */}
                        </a>
                        <a
                            className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1"
                            href="/"
                        >
                            <img
                                className="h-full w-full object-cover"
                                src="./assets/images/icons/icon-linkedin-green.svg"
                                alt="linkedin icon"
                            />
                            {/* <FaPinterest /> */}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;