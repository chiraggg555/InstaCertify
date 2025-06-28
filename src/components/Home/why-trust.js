
const WhyTrust = () => {

    return (
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
            <div className="text-center">
                <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
                    See why we are trusted the world over
                </h2>
                <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit laborum — semper quis lectus nulla.
                </p>
            </div>
            <div className="flex items-center gap-5 justify-center flex-wrap mx-auto w-full mt-[90px] sm:w-[80%] xl:w-full mb-[58px]">
                <p
                    className="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px] active"
                    id="branding"
                >
                    Branding
                </p>
                <p
                    className="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]"
                    id="development"
                >
                    Development
                </p>
                <p
                    className="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]"
                    id="animation"
                >
                    Animation
                </p>
                <p
                    className="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]"
                    id="user-exp"
                >
                    User Experience
                </p>
                <p
                    className="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]"
                    id="social-network"
                >
                    Social Network
                </p>
                <p
                    className="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]"
                    id="marketing"
                >
                    Marketing
                </p>
            </div>
            <div className="tab-content lg:gap-[30px] lg:flex bg-bg-2 branding">
                <div className="p-5 md:p-[60px] lg:w-1/2">
                    <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                        Optimize and scale, easy to start
                    </h2>
                    <p className="text-excerpt mb-[40px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                    </p>
                    <button type="button">
                        {" "}
                        <a
                            className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit"
                            href="#"
                        >
                            <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                                Learn More
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
                <div className="relative lg:w-1/2">
                    <img
                        className="h-full w-full object-cover"
                        src="./assets/images/thumbnail-1.png"
                        alt="Agon"
                    />
                    <img
                        className="absolute top-0 right-0"
                        src="./assets/images/icons/pattern-3.svg"
                        alt="pattern"
                    />
                    <button className="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0">
                        <img
                            src="./assets/images/icons/icon-play.svg"
                            alt="play button"
                            width={30}
                        />
                    </button>
                </div>
            </div>
            <div className="tab-content lg:gap-[30px] lg:flex bg-bg-3 development !hidden">
                <div className="p-5 md:p-[60px] lg:w-1/2">
                    <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                        Design Studios That Everyone Should Know
                    </h2>
                    <p className="text-excerpt mb-[40px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                    </p>
                    <button type="button">
                        {" "}
                        <a
                            className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit"
                            href="#"
                        >
                            <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                                Learn More
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
                <div className="relative lg:w-1/2">
                    <img
                        className="h-full w-full object-cover"
                        src="./assets/images/thumbnail-3.png"
                        alt="Agon"
                    />
                    <img
                        className="absolute top-0 right-0"
                        src="./assets/images/icons/pattern-3.svg"
                        alt="pattern"
                    />
                    <button className="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0">
                        <img
                            src="./assets/images/icons/icon-play.svg"
                            alt="play button"
                            width={30}
                        />
                    </button>
                </div>
            </div>
            <div className="tab-content lg:gap-[30px] lg:flex bg-bg-4 animation !hidden">
                <div className="p-5 md:p-[60px] lg:w-1/2">
                    <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                        We can blend colors multiple ways
                    </h2>
                    <p className="text-excerpt mb-[40px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                    </p>
                    <button type="button">
                        {" "}
                        <a
                            className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit"
                            href="#"
                        >
                            <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                                Learn More
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
                <div className="relative lg:w-1/2">
                    <img
                        className="h-full w-full object-cover"
                        src="./assets/images/thumbnail-4.png"
                        alt="Agon"
                    />
                    <img
                        className="absolute top-0 right-0"
                        src="./assets/images/icons/pattern-3.svg"
                        alt="pattern"
                    />
                    <button className="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0">
                        <img
                            src="./assets/images/icons/icon-play.svg"
                            alt="play button"
                            width={30}
                        />
                    </button>
                </div>
            </div>
            <div className="tab-content lg:gap-[30px] lg:flex bg-bg-5 user-exp !hidden">
                <div className="p-5 md:p-[60px] lg:w-1/2">
                    <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                        Choose The Best Plan That's For You
                    </h2>
                    <p className="text-excerpt mb-[40px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                    </p>
                    <button type="button">
                        {" "}
                        <a
                            className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit"
                            href="#"
                        >
                            <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                                Learn More
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
                <div className="relative lg:w-1/2">
                    <img
                        className="h-full w-full object-cover"
                        src="./assets/images/thumbnail-5.png"
                        alt="Agon"
                    />
                    <img
                        className="absolute top-0 right-0"
                        src="./assets/images/icons/pattern-3.svg"
                        alt="pattern"
                    />
                    <button className="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0">
                        <img
                            src="./assets/images/icons/icon-play.svg"
                            alt="play button"
                            width={30}
                        />
                    </button>
                </div>
            </div>
            <div className="tab-content lg:gap-[30px] lg:flex bg-bg-6 social-network !hidden">
                <div className="p-5 md:p-[60px] lg:w-1/2">
                    <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                        Subscribe our newsletter to get gift
                    </h2>
                    <p className="text-excerpt mb-[40px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                    </p>
                    <button type="button">
                        {" "}
                        <a
                            className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit"
                            href="#"
                        >
                            <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                                Learn More
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
                <div className="relative lg:w-1/2">
                    <img
                        className="h-full w-full object-cover"
                        src="./assets/images/thumbnail-19.png"
                        alt="Agon"
                    />
                    <img
                        className="absolute top-0 right-0"
                        src="./assets/images/icons/pattern-3.svg"
                        alt="pattern"
                    />
                    <button className="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0">
                        <img
                            src="./assets/images/icons/icon-play.svg"
                            alt="play button"
                            width={30}
                        />
                    </button>
                </div>
            </div>
            <div className="tab-content lg:gap-[30px] lg:flex bg-bg-7 marketing !hidden">
                <div className="p-5 md:p-[60px] lg:w-1/2">
                    <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                        Ready to get started? Create and Account
                    </h2>
                    <p className="text-excerpt mb-[40px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                    </p>
                    <button type="button">
                        {" "}
                        <a
                            className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit"
                            href="#"
                        >
                            <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                                Learn More
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
                <div className="relative lg:w-1/2">
                    <img
                        className="h-full w-full object-cover"
                        src="./assets/images/thumbnail-22.png"
                        alt="Agon"
                    />
                    <img
                        className="absolute top-0 right-0"
                        src="./assets/images/icons/pattern-3.svg"
                        alt="pattern"
                    />
                    <button className="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0">
                        <img
                            src="./assets/images/icons/icon-play.svg"
                            alt="play button"
                            width={30}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default WhyTrust;