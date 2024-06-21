"use client";
import React from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";

type HeaderProps = {
  headerData: object[];
  useMode: any;
};
export const Header = ({ headerData, useMode }: HeaderProps) => {
  const { theme, setTheme, themes, hydrationError } = useMode();

  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
  //const [loginMenuOpen, setLoginMenuOpen] = React.useState<boolean>(false);

  return (
    <header className="py-10">
      <div className="container mx-auto px-5 sm:px-0">
        <div className="navbar grid grid-cols-12">
          <div className="col-span-3">
            <Link href={`/`}>GamesMysteries</Link>
          </div>
          <nav className="hidden xl:block col-span-6 font-work">
            <ul className="menu menu-horizontal w-full flex items-center justify-center gap-8">
              {headerData.map((item: any, index: number) => (
                <li tabIndex={index} key={index}>
                  {item.subMenu ? (
                    <span className="text-base flex gap-1 items-center text-base-content/80 hover:text-primary bg-transparent py-3 px-0 transition hover:duration-300 font-work">
                      {item.name}
                      {item.subMenu && (
                        <svg
                          className="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                      )}
                    </span>
                  ) : (
                    <Link
                      href={item.link}
                      className="text-base flex gap-1 items-center text-base-content/80 hover:text-primary bg-transparent py-3 px-0 transition hover:duration-300 font-work"
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.subMenu && item.subMenu.length > 0 && (
                    <SubMenu subMenu={item.subMenu} />
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-end gap-6 col-span-9 xl:col-span-3">
            {/* Search Block */}
            <div className="hidden md:block">
              {/* search dropdown section  */}
              <div className="dropdown">
                <label tabIndex={0}>
                  <svg
                    className="cursor-pointer w-5 h-5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
                      stroke="#52525B"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M10.5715 10.5716L14 14"
                      stroke="#52525B"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content min-w-[360px] shadow bg-base-100 rounded-xl mt-2 -right-12"
                >
                  <div className="p-4 md:p-6 ">
                    <div className="flex items-center justify-between">
                      <h5 className="text-base-content font-medium text-lg">
                        Search
                      </h5>
                      <div>
                        <svg
                          stroke="currentColor"
                          className="text-base-content/70 w-5 h-5 cursor-pointer"
                          fill="none"
                          strokeWidth="0"
                          viewBox="0 0 15 15"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-2">
                      <input
                        className="w-full focus:outline-none text-sm md:text-base rounded-md border border-base-content border-opacity-10  px-4 py-3 text-base-content placeholder:text-base placeholder:text-base-content placeholder:text-opacity-40"
                        type="text"
                        placeholder="Search"
                      />
                      <div className="p-4 bg-primary w-fit rounded-md">
                        <svg
                          className="cursor-pointer w-5 h-5 text-primary-content"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                          />
                          <path
                            d="M10.5715 10.5716L14 14"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mt-4">
                      {[1, 2, 3, 4, 5].map((_, index: number) => (
                        <span
                          key={index}
                          className="text-primary text-sm font-medium px-2.5 py-1 bg-primary bg-opacity-5 rounded-md"
                        >
                          #Keyword
                        </span>
                      ))}
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            {/* Theme Switcher */}
            {/*<input*/}
            {/*   type="checkbox"*/}
            {/*   className={`toggle rounded-full ${*/}
            {/*      !lightMode ? 'toggle-primary' : ''*/}
            {/*   }`}*/}
            {/*   onClick={() => {*/}
            {/*      if (theme === 'light') {*/}
            {/*         setTheme('dark')*/}
            {/*      } else {*/}
            {/*         setTheme('light')*/}
            {/*      }*/}
            {/*   }}*/}
            {/*   defaultChecked={theme === 'dark'}*/}
            {/*/>*/}

            {/*Multi themes switcher */}
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="rounded-full">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="w-7 h-7 text-base-content"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M441 336.2l-.06-.05c-9.93-9.18-22.78-11.34-32.16-12.92l-.69-.12c-9.05-1.49-10.48-2.5-14.58-6.17-2.44-2.17-5.35-5.65-5.35-9.94s2.91-7.77 5.34-9.94l30.28-26.87c25.92-22.91 40.2-53.66 40.2-86.59s-14.25-63.68-40.2-86.6c-35.89-31.59-85-49-138.37-49C223.72 48 162 71.37 116 112.11c-43.87 38.77-68 90.71-68 146.24s24.16 107.47 68 146.23c21.75 19.24 47.49 34.18 76.52 44.42a266.17 266.17 0 0086.87 15h1.81c61 0 119.09-20.57 159.39-56.4 9.7-8.56 15.15-20.83 15.34-34.56.21-14.17-5.37-27.95-14.93-36.84zM112 208a32 32 0 1132 32 32 32 0 01-32-32zm40 135a32 32 0 1132-32 32 32 0 01-32 32zm40-199a32 32 0 1132 32 32 32 0 01-32-32zm64 271a48 48 0 1148-48 48 48 0 01-48 48zm72-239a32 32 0 1132-32 32 32 0 01-32 32z"></path>
                    </svg>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="grid dropdown-content p-3 shadow-lg mt-5 bg-base-200 rounded-lg w-52 max-h-80 overflow-x-auto"
                >
                  {themes.map((item: any) => (
                    <li
                      data-theme={item}
                      key={item}
                      className={`capitalize w-full flex mb-2 rounded-md last-of-type:mb-0 justify-between items-center px-2 py-2 transition-all duration-300 cursor-pointer`}
                      onClick={() => {
                        setTheme(item);
                      }}
                    >
                      <span className="text-base-content flex items-center gap-2">
                        {hydrationError && theme === item && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-3 h-3 text-primary"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>
                        )}
                        {item}
                      </span>
                      <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                        <div className="bg-primary w-2 rounded"></div>{" "}
                        <div className="bg-secondary w-2 rounded"></div>{" "}
                        <div className="bg-accent w-2 rounded"></div>{" "}
                        <div className="bg-neutral w-2 rounded"></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Responsive Sidebar Menu */}
            <svg
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="cursor-pointer w-8 h-8 xl:hidden text-base-content"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33301 5H16.6663M3.33301 10H16.6663M3.33301 15H16.6663"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/*  Newsletters */}

            <div className="hidden md:block">
              {/* newsletter section dropdown created  */}
              <div className="dropdown">
                <label tabIndex={1}>
                  <div className="flex items-center justify-center gap-2 pb-2 border-b border-primary cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M2.96596 9.46875C2.83948 9.4699 2.71495 9.43755 2.60502 9.375C2.52439 9.32968 2.4536 9.26873 2.39681 9.19572C2.34001 9.12271 2.29835 9.03911 2.27426 8.9498C2.25016 8.8605 2.24412 8.76728 2.25649 8.67562C2.26885 8.58395 2.29937 8.49567 2.34627 8.41594C3.25002 6.9075 5.99971 3.38672 11.9997 3.38672C14.5999 3.38672 16.8803 4.06969 18.7745 5.41594C20.3336 6.52078 21.2074 7.77141 21.6236 8.37375C21.6764 8.44967 21.7135 8.53539 21.7326 8.62586C21.7518 8.71633 21.7527 8.80971 21.7352 8.90052C21.7177 8.99133 21.6823 9.07773 21.6309 9.15463C21.5795 9.23152 21.5133 9.29737 21.4361 9.34828C21.2783 9.45257 21.0862 9.49133 20.9003 9.45633C20.7144 9.42132 20.5495 9.31532 20.4405 9.16078C19.6872 8.0775 17.3903 4.78125 11.9997 4.78125C6.73799 4.78125 4.35908 7.81453 3.58424 9.11531C3.52198 9.22394 3.43185 9.31397 3.32315 9.3761C3.21446 9.43823 3.09115 9.47022 2.96596 9.46875Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.0227 23.25C14.9628 23.2507 14.9032 23.2439 14.845 23.2298C10.4927 22.1517 8.86752 17.8008 8.80143 17.6198L8.79111 17.58C8.75549 17.4544 7.88221 14.4708 9.22283 12.7233C9.83736 11.9264 10.7721 11.5177 12.0063 11.5177C13.1538 11.5177 13.9816 11.8744 14.5506 12.6127C15.0194 13.2155 15.2069 13.9589 15.3883 14.6752C15.7694 16.1667 16.0446 16.95 17.6285 17.0306C18.3241 17.0658 18.7811 16.6589 19.0403 16.3125C19.7411 15.368 19.863 13.8281 19.3347 12.4688C18.656 10.7142 16.2471 7.40625 11.9997 7.40625C10.1866 7.40625 8.52064 7.98891 7.18471 9.08391C6.07893 9.99094 5.20283 11.2716 4.78096 12.5878C3.99861 15.0384 5.02471 18.8906 5.03455 18.9258C5.05851 19.0154 5.06427 19.109 5.0515 19.2009C5.03874 19.2928 5.00769 19.3812 4.9602 19.461C4.91272 19.5407 4.84974 19.6101 4.775 19.6651C4.70026 19.7201 4.61526 19.7596 4.52502 19.7812C4.34271 19.8297 4.14865 19.8049 3.98445 19.712C3.82025 19.6191 3.69896 19.4656 3.64658 19.2844C3.59971 19.1086 2.50377 15 3.40752 12.1678C4.39189 9.09891 7.42986 6.00516 12.0011 6.00516C14.1138 6.00516 16.1097 6.72328 17.7756 8.07938C19.0656 9.13406 20.1194 10.5506 20.6706 11.9667C21.3714 13.7747 21.1835 15.8039 20.193 17.1295C19.533 18.0136 18.5931 18.4758 17.5521 18.4256C14.8399 18.2897 14.3524 16.3964 13.9971 15.0155C13.6314 13.5989 13.3975 12.9159 12.0011 12.9159C11.2342 12.9159 10.6956 13.1269 10.3605 13.5637C9.90346 14.1614 9.86783 15.0956 9.91846 15.7734C9.95169 16.2457 10.0318 16.7134 10.1575 17.1698C10.2691 17.4511 11.7217 21.0136 15.2008 21.8756C15.2907 21.8969 15.3755 21.9359 15.4503 21.9902C15.525 22.0446 15.5882 22.1133 15.6362 22.1922C15.6841 22.2712 15.7159 22.359 15.7297 22.4503C15.7435 22.5417 15.739 22.6349 15.7164 22.7245C15.674 22.8758 15.5832 23.0091 15.4579 23.1039C15.3327 23.1988 15.1798 23.2501 15.0227 23.25Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.43611 22.9284C9.33856 22.9286 9.24197 22.9092 9.15209 22.8713C9.06221 22.8333 8.9809 22.7777 8.91299 22.7077C7.17111 20.8795 6.1858 18.8353 5.81502 16.2792V16.2656C5.60689 14.5734 5.91158 12.1777 7.40455 10.5305C8.50658 9.315 10.0558 8.69719 12.0011 8.69719C14.3017 8.69719 16.1097 9.76687 17.2371 11.7858C18.055 13.2525 18.2172 14.7141 18.2214 14.7741C18.23 14.8666 18.2202 14.9599 18.1927 15.0486C18.1652 15.1373 18.1204 15.2198 18.061 15.2912C18.0015 15.3626 17.9286 15.4216 17.8463 15.4647C17.7641 15.5079 17.6741 15.5345 17.5816 15.5428C17.3949 15.5631 17.2077 15.5091 17.0605 15.3925C16.9132 15.276 16.8177 15.1062 16.7945 14.9198C16.6711 14.0429 16.3873 13.1961 15.9574 12.4219C15.0836 10.8802 13.7542 10.0964 11.996 10.0964C10.4772 10.0964 9.28893 10.5534 8.47143 11.4558C7.29299 12.7566 7.06518 14.7605 7.22689 16.0861C7.55174 18.3464 8.42033 20.1445 9.95408 21.7514C10.0181 21.818 10.0681 21.8968 10.101 21.9831C10.134 22.0694 10.1493 22.1614 10.1459 22.2537C10.1426 22.346 10.1208 22.4367 10.0817 22.5204C10.0426 22.6041 9.98709 22.6791 9.91846 22.7409C9.78628 22.8607 9.61451 22.9275 9.43611 22.9284Z"
                        fill="currentColor"
                      />
                      <path
                        d="M17.4606 20.9147C15.9372 20.9147 14.6421 20.4928 13.6056 19.6542C11.5235 17.9766 11.29 15.2442 11.2797 15.1289C11.265 14.9396 11.3262 14.7523 11.4496 14.6081C11.5731 14.4639 11.7488 14.3746 11.9381 14.3599C12.1273 14.3453 12.3147 14.4064 12.4589 14.5298C12.6031 14.6533 12.6924 14.829 12.7071 15.0183C12.7122 15.0586 12.9203 17.2936 14.5253 18.5808C15.475 19.3392 16.7444 19.6402 18.3086 19.4644C18.4956 19.4417 18.6839 19.494 18.8324 19.6097C18.981 19.7255 19.0776 19.8954 19.1013 20.0822C19.1115 20.1745 19.1033 20.2679 19.077 20.357C19.0508 20.446 19.0071 20.529 18.9484 20.601C18.8898 20.673 18.8174 20.7326 18.7355 20.7763C18.6535 20.82 18.5637 20.847 18.4713 20.8556C18.1358 20.8948 17.7984 20.9145 17.4606 20.9147Z"
                        fill="currentColor"
                      />
                      <path
                        d="M18.6644 2.28703C18.07 1.90031 15.9625 0.75 11.9997 0.75C7.84002 0.75 5.72736 2.02078 5.26002 2.34375C5.22915 2.3627 5.20026 2.38468 5.17377 2.40938C5.17097 2.41208 5.16733 2.41373 5.16346 2.41406C5.08883 2.47922 5.02895 2.55954 4.9878 2.64966C4.94666 2.73979 4.92521 2.83765 4.92486 2.93672C4.92615 3.02959 4.94574 3.12129 4.98253 3.20657C5.01931 3.29185 5.07256 3.36904 5.13923 3.4337C5.2059 3.49837 5.28467 3.54924 5.37103 3.58341C5.4574 3.61757 5.54966 3.63436 5.64252 3.63281C5.79136 3.63271 5.93661 3.58708 6.05877 3.50203C6.07893 3.48703 7.89721 2.15109 12.0011 2.15109C16.105 2.15109 17.9331 3.48234 17.9528 3.49219C18.0776 3.58473 18.2292 3.6341 18.3846 3.63281C18.4775 3.63424 18.5698 3.61729 18.6562 3.58295C18.7426 3.54861 18.8213 3.49755 18.8879 3.4327C18.9545 3.36785 19.0076 3.29049 19.0442 3.20505C19.0808 3.11962 19.1002 3.02779 19.1013 2.93484C19.1013 2.79562 19.0597 2.65956 18.9819 2.54413C18.9041 2.4287 18.7935 2.33917 18.6644 2.28703Z"
                        fill="currentColor"
                      />
                    </svg>
                    <h6 className="text-base-content/80 text-base font-sans">
                      LOGIN ?
                    </h6>
                  </div>
                </label>
                <ul
                  tabIndex={1}
                  className="menu menu-compact dropdown-content min-w-[360px] shadow bg-base-100 rounded-xl mt-2 -right-2"
                >
                  <div className="p-6 ">
                    <div className="flex items-center justify-between">
                      <h5 className="text-base-content font-medium text-lg">
                        LOGIN OR REGISTER
                      </h5>
                      <div>
                        <svg
                          //onClick={() => setLoginMenuOpen(!loginMenuOpen)}
                          stroke="currentColor"
                          className="text-base-content/70 w-5 h-5 cursor-pointer"
                          fill="none"
                          strokeWidth="0"
                          viewBox="0 0 15 15"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-2">
                      <input
                        className="w-full focus:outline-none text-sm md:text-base rounded-md border border-base-content border-opacity-10  px-4 py-3 text-base-content placeholder:text-base placeholder:text-base-content placeholder:text-opacity-40"
                        type="text"
                        placeholder="Email"
                      />
                      <div className="p-4 bg-primary w-fit rounded-md">
                        <svg
                          className="text-primary-content w-5 h-5 cursor-pointer"
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="mt-2 text-base-content/70 text-sm">
                      By continuing, you agree to our User Agreement and Privacy
                      <span className="text-base-content font-medium"></span>
                    </p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Responsive Sidebar Layout */}
        <MobileNav
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          headerData={headerData}
        />
      </div>
    </header>
  );
};

const SubMenu = ({ subMenu }: any) => {
  return (
    <ul className="p-0 w-full min-w-[180px] max-w-[230px] shadow-md bg-base-100 rounded-lg z-30 font-work">
      {subMenu.map((subItem: any, index: number) => (
        <li key={index} className={"block group relative"}>
          {subItem.subMenu ? (
            <span className="text-sm flex gap-1 justify-between items-center text-base-content/80 hover:text-primary transition hover:duration-300 whitespace-normal border-b border-base-content/10 py-3 px-4 block">
              {subItem.name}
              <svg
                className="fill-current -rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </span>
          ) : (
            <Link
              href={subItem.link}
              className="text-sm text-base-content/80 hover:text-primary transition hover:duration-300 whitespace-normal border-b border-base-content/10 py-3 px-4 block"
            >
              {subItem.name}
            </Link>
          )}
          {subItem.subMenu && <SubSubMenu subSubMenu={subItem.subMenu} />}
        </li>
      ))}
    </ul>
  );
};

const SubSubMenu = ({ subSubMenu }: any) => {
  return (
    <ul className="p-0 w-full absolute left-full top-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible min-w-[230px] shadow-md bg-base-100 rounded-lg z-30 font-work">
      {subSubMenu.map((subSubItem: any, index: number) => (
        <li key={index} className={"block group relative"}>
          {subSubItem.subMenu ? (
            <span className="text-sm flex gap-1 justify-between items-center text-base-content/80 hover:text-primary transition hover:duration-300 whitespace-normal border-b border-base-content/10 py-3 px-4 block">
              {subSubItem.name}
              <svg
                className="fill-current -rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </span>
          ) : (
            <Link
              href={subSubItem.link}
              className="text-sm text-base-content/80 hover:text-primary transition hover:duration-300 whitespace-normal border-b border-base-content/10 py-3 px-4 block"
            >
              {subSubItem.name}
            </Link>
          )}
          {subSubItem.subMenu && <SubSubMenu subSubMenu={subSubItem.subMenu} />}
        </li>
      ))}
    </ul>
  );
};
