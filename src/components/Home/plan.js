

const Plan = () => {

    return (
        <div className="full-width bg-green-900 relative">
            <img
                className="absolute right-0 opacity-30 top-[-150px]"
                src="./assets/images/icons/pattern-2.svg"
                alt=""
            />
            <img
                className="absolute opacity-30 bottom-[-90px] left-[-15px]"
                src="./assets/images/icons/pattern-1.svg"
                alt=""
            />
            <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 pt-[90px] pb-[111px]">
                <div className="text-center text-white mb-[56px]">
                    <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-white mb-5 md:mb-[30px] max-w-[725px]">
                        Choose The Best Plan That’s For You
                    </h2>
                    <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p>
                </div>
                <div className="flex items-center justify-center gap-[10px] mb-[54px] text-white">
                    <p className="text-text">Bill Monthly</p>
                    <div className="flex items-center justify-center">
                        <label
                            className="flex items-center cursor-pointer"
                            htmlFor="billSwitch"
                        >
                            <div className="relative">
                                <input
                                    className="sr-only peer"
                                    id="billSwitch"
                                    type="checkbox"
                                    name=""
                                />
                                <div className="block rounded-full w-[65px] h-[30px] bg-white" />
                                <div className="dot absolute left-1 top-1 rounded-full transition h-[21px] w-[21px] bg-gray-900" />
                            </div>
                        </label>
                    </div>
                    <p className="text-text">Bill Annually</p>
                </div>
                <div className="package">
                    <div className="grid mx-auto gap-[44px] md:grid-cols-2 lg:grid-cols-3 max-w-[970px]">
                        <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] bill-monthly">
                            <div>
                                <div className="mb-[21px]">
                                    <span className="text-heading-3 font-bold font-chivo">$35</span>
                                    <span className="text-sm font-bold text-gray-400 ml-[2px]">
                                        /month
                                    </span>
                                </div>
                                <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                                    Standard
                                </h5>
                                <p className="text-sm font-bold text-gray-400 mb-[43px]">
                                    All the basics for businesses that are just getting started.
                                </p>
                                <div className="w-full bg-gray-300 h-[1px] mb-[21px]" />
                                <ul className="mb-[76px]">
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img
                                            className="tick-icon"
                                            src="./assets/images/icons/icon-tick.svg"
                                            alt="icon"
                                        />
                                        <img
                                            className="hidden tick-icon-active"
                                            src="./assets/images/icons/icon-tick-orange.svg"
                                            alt="icon"
                                        />
                                        <span className="text-md text-gray-500">
                                            Unlimited updates
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img
                                            className="tick-icon"
                                            src="./assets/images/icons/icon-tick.svg"
                                            alt="icon"
                                        />
                                        <img
                                            className="hidden tick-icon-active"
                                            src="./assets/images/icons/icon-tick-orange.svg"
                                            alt="icon"
                                        />
                                        <span className="text-md text-gray-500">
                                            Custom permissions
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img src="./assets/images/icons/icon-close.svg" alt="icon" />
                                        <span className="text-md text-gray-500">
                                            Custom designs &amp; features
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <button type="button">
                                {" "}
                                <a
                                    className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                                    href="#"
                                >
                                    <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                                        Get Started
                                    </span>
                                    <i>
                                        {" "}
                                        <img
                                            className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                                            src="./assets/images/icons/icon-right.svg"
                                            alt="arrow right icon"
                                        />
                                    </i>
                                </a>
                            </button>
                        </div>
                        <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white bill-monthly flex flex-col justify-between p-[35px]">
                            <div>
                                <div className="mb-[21px]">
                                    <span className="text-heading-3 font-bold font-chivo">$89</span>
                                    <span className="text-sm font-bold text-gray-400 ml-[2px]">
                                        /month
                                    </span>
                                </div>
                                <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                                    Essentials
                                </h5>
                                <p className="text-sm font-bold text-gray-400 mb-[43px]">
                                    All the basics for businesses that are just getting started.
                                </p>
                                <div className="w-full bg-gray-300 h-[1px] mb-[21px]" />
                                <ul className="mb-[76px]">
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img src="./assets/images/icons/icon-tick.svg" alt="icon" />
                                        <span className="text-md text-gray-500">
                                            Unlimited updates
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img src="./assets/images/icons/icon-tick.svg" alt="icon" />
                                        <span className="text-md text-gray-500">
                                            Custom permissions
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img src="./assets/images/icons/icon-close.svg" alt="icon" />
                                        <span className="text-md text-gray-500">
                                            Custom designs &amp; features
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img src="./assets/images/icons/icon-close.svg" alt="icon" />
                                        <span className="text-md text-gray-500">
                                            Custom designs &amp; features
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <button type="button">
                                {" "}
                                <a
                                    className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                                    href="#"
                                >
                                    <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                                        Get Started
                                    </span>
                                    <i>
                                        {" "}
                                        <img
                                            className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                                            src="./assets/images/icons/icon-right.svg"
                                            alt="arrow right icon"
                                        />
                                    </i>
                                </a>
                            </button>
                        </div>
                        <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] col-span-1 bill-monthly md:col-span-2 lg:col-span-1">
                            <div>
                                <div className="mb-[21px]">
                                    <span className="text-heading-3 font-bold font-chivo">
                                        $125
                                    </span>
                                    <span className="text-sm font-bold text-gray-400 ml-[2px]">
                                        /month
                                    </span>
                                </div>
                                <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                                    Premium
                                </h5>
                                <p className="text-sm font-bold text-gray-400 mb-[43px]">
                                    Avanced features for pros who need more customization.
                                </p>
                                <div className="w-full bg-gray-300 h-[1px] mb-[21px]" />
                                <ul className="mb-[76px]">
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img
                                            className="tick-icon"
                                            src="./assets/images/icons/icon-tick.svg"
                                            alt="icon"
                                        />
                                        <img
                                            className="hidden tick-icon-active"
                                            src="./assets/images/icons/icon-tick-orange.svg"
                                            alt="icon"
                                        />
                                        <span className="text-md text-gray-500">
                                            Unlimited updates
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img
                                            className="tick-icon"
                                            src="./assets/images/icons/icon-tick.svg"
                                            alt="icon"
                                        />
                                        <img
                                            className="hidden tick-icon-active"
                                            src="./assets/images/icons/icon-tick-orange.svg"
                                            alt="icon"
                                        />
                                        <span className="text-md text-gray-500">
                                            Custom permissions
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img src="./assets/images/icons/icon-close.svg" alt="icon" />
                                        <span className="text-md text-gray-500">
                                            Custom designs &amp; features
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <button type="button">
                                {" "}
                                <a
                                    className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                                    href="#"
                                >
                                    <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                                        Get Started
                                    </span>
                                    <i>
                                        {" "}
                                        <img
                                            className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                                            src="./assets/images/icons/icon-right.svg"
                                            alt="arrow right icon"
                                        />
                                    </i>
                                </a>
                            </button>
                        </div>
                        <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] bill-annually">
                            <div>
                                <div className="mb-[21px]">
                                    <span className="text-heading-3 font-bold font-chivo">
                                        $420
                                    </span>
                                    <span className="text-sm font-bold text-gray-400 ml-[2px]">
                                        /year
                                    </span>
                                </div>
                                <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                                    Standard
                                </h5>
                                <p className="text-sm font-bold text-gray-400 mb-[43px]">
                                    All the basics for businesses that are just getting started.
                                </p>
                                <div className="w-full bg-gray-300 h-[1px] mb-[21px]" />
                                <ul className="mb-[76px]">
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img
                                            className="tick-icon"
                                            src="./assets/images/icons/icon-tick.svg"
                                            alt="icon"
                                        />
                                        <img
                                            className="hidden tick-icon-active"
                                            src="./assets/images/icons/icon-tick-orange.svg"
                                            alt="icon"
                                        />
                                        <span className="text-md text-gray-500">
                                            Unlimited updates
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img
                                            className="tick-icon"
                                            src="./assets/images/icons/icon-tick.svg"
                                            alt="icon"
                                        />
                                        <img
                                            className="hidden tick-icon-active"
                                            src="./assets/images/icons/icon-tick-orange.svg"
                                            alt="icon"
                                        />
                                        <span className="text-md text-gray-500">
                                            Custom permissions
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img src="./assets/images/icons/icon-close.svg" alt="icon" />
                                        <span className="text-md text-gray-500">
                                            Custom designs &amp; features
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <button type="button">
                                {" "}
                                <a
                                    className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                                    href="#"
                                >
                                    <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                                        Get Started
                                    </span>
                                    <i>
                                        {" "}
                                        <img
                                            className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                                            src="./assets/images/icons/icon-right.svg"
                                            alt="arrow right icon"
                                        />
                                    </i>
                                </a>
                            </button>
                        </div>
                        <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white bill-annually flex flex-col justify-between p-[35px]">
                            <div>
                                <div className="mb-[21px]">
                                    <span className="text-heading-3 font-bold font-chivo">
                                        $1068
                                    </span>
                                    <span className="text-sm font-bold text-gray-400 ml-[2px]">
                                        /year
                                    </span>
                                </div>
                                <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                                    Essentials
                                </h5>
                                <p className="text-sm font-bold text-gray-400 mb-[43px]">
                                    All the basics for businesses that are just getting started.
                                </p>
                                <div className="w-full bg-gray-300 h-[1px] mb-[21px]" />
                                <ul className="mb-[76px]">
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img src="./assets/images/icons/icon-tick.svg" alt="icon" />
                                        <span className="text-md text-gray-500">
                                            Unlimited updates
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img src="./assets/images/icons/icon-tick.svg" alt="icon" />
                                        <span className="text-md text-gray-500">
                                            Custom permissions
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img src="./assets/images/icons/icon-close.svg" alt="icon" />
                                        <span className="text-md text-gray-500">
                                            Custom designs &amp; features
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img src="./assets/images/icons/icon-close.svg" alt="icon" />
                                        <span className="text-md text-gray-500">
                                            Custom designs &amp; features
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <button type="button">
                                {" "}
                                <a
                                    className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                                    href="#"
                                >
                                    <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                                        Get Started
                                    </span>
                                    <i>
                                        {" "}
                                        <img
                                            className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                                            src="./assets/images/icons/icon-right.svg"
                                            alt="arrow right icon"
                                        />
                                    </i>
                                </a>
                            </button>
                        </div>
                        <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-white flex flex-col justify-between transition-all duration-300 package-card p-[35px] col-span-1 bill-annually md:col-span-2 lg:col-span-1">
                            <div>
                                <div className="mb-[21px]">
                                    <span className="text-heading-3 font-bold font-chivo">
                                        $1500
                                    </span>
                                    <span className="text-sm font-bold text-gray-400 ml-[2px]">
                                        /year
                                    </span>
                                </div>
                                <h5 className="text-heading-5 font-chivo font-bold mb-[9px]">
                                    Premium
                                </h5>
                                <p className="text-sm font-bold text-gray-400 mb-[43px]">
                                    Avanced features for pros who need more customization.
                                </p>
                                <div className="w-full bg-gray-300 h-[1px] mb-[21px]" />
                                <ul className="mb-[76px]">
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img
                                            className="tick-icon"
                                            src="./assets/images/icons/icon-tick.svg"
                                            alt="icon"
                                        />
                                        <img
                                            className="hidden tick-icon-active"
                                            src="./assets/images/icons/icon-tick-orange.svg"
                                            alt="icon"
                                        />
                                        <span className="text-md text-gray-500">
                                            Unlimited updates
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img
                                            className="tick-icon"
                                            src="./assets/images/icons/icon-tick.svg"
                                            alt="icon"
                                        />
                                        <img
                                            className="hidden tick-icon-active"
                                            src="./assets/images/icons/icon-tick-orange.svg"
                                            alt="icon"
                                        />
                                        <span className="text-md text-gray-500">
                                            Custom permissions
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-[10px] mb-[17px]">
                                        <img src="./assets/images/icons/icon-close.svg" alt="icon" />
                                        <span className="text-md text-gray-500">
                                            Custom designs &amp; features
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <button type="button">
                                {" "}
                                <a
                                    className="flex items-center inline-block z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] border-[2px] border-[#171B24]"
                                    href="#"
                                >
                                    <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                                        Get Started
                                    </span>
                                    <i>
                                        {" "}
                                        <img
                                            className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                                            src="./assets/images/icons/icon-right.svg"
                                            alt="arrow right icon"
                                        />
                                    </i>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Plan;