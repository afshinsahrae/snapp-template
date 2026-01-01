"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="w-full border-b bg-white dark:bg-bg_dark1">
      {/* //header */}
      <header className="w-full bg-white h-[70px] md:h-[90px] mx-auto flex justify-center items-center  z-50 fixed top-0 dark:bg-bg_dark1 ">
        <div className="flex md:hidden justify-between w-full flex-nowrap px-5">
          <svg
            id="hamber_menu"
            onClick={() => setOpenMenu(!openMenu)}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-list cursor-pointer dark:stroke-white dark:rounded-sm "
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
          <img src="/img/snappTextLogo.svg" className="absolute  left-20" />
        </div>

        <div className="w-4/5 flex justify-start mr-24">
          <img src="/img/snappTextLogo.svg" className="md:flex hidden" />

          <ul className="text-clamp list-none dark:text-white justify-start items-center font-iran_Light h-[55px] md:flex hidden w-4/5 ">
            <li className="flex items-center relative cursor-default group/item hover:text-green_snap mx-10">
              سوپر اپ اسنپ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-chevron-down mx-2"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.323l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
              <ul className="group-hover/item:flex hidden w-[170px] absolute top-6 list-none text-text_nav bg-white border border-1 flex-col justify-start items-start font-iran_Light rounded-lg leading-9 dark:bg-bg_dark2 dark:text-white ">
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  درخواست تاکسی
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  پیک موتوری
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  رزرو بلیط هواپیما
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  قروشگاه اسنپ
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  اسنپ بیمه
                </li>
              </ul>
            </li>
            <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
              ثبت نام راننده اسنپ
            </li>
            <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
              باشگاه رانندگان
            </li>
            <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
              پنل سازمانی
            </li>
            <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
              بلاگ
            </li>
            <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap group/item-about z-50">
              درباره اسنپ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-chevron-down mx-2"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
              <ul className="group-hover/item-about:flex hidden w-[170px] absolute top-14 list-none text-text_nav bg-white border border-1 flex-col justify-start items-start font-iran_Light rounded-lg leading-9 dark:bg-bg_dark2 dark:text-white ">
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  فرصت های شغلی
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  درباره ما
                </li>
                <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                  تماس با ما
                </li>
              </ul>
            </li>
          </ul>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="dark:text-white absolute left-10 top-7 "
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-sun"
                viewBox="0 0 16 16"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-moon-stars"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* //header */}
      {/* //hamber-responsive */}
      {openMenu && (
        <div
          id="nav_res"
          className=" w-full bg-bg_nav_res lg:bg-transparent text-xs fixed z-50 h-full "
        >
          <div className="sm:w-1/2 w-full bg-white dark:bg-bg_dark1 border border-l-1 h-screen sm:flex md:hidden ">
            <ul className="list-none flex flex-col justify-start items-start dark:text-white font-iran_Light mx-7 w-[4/5vw] sm:w-full">
              <li className="flex flex-col group/item items-center cursor-default w-full my-4 font-iran_Bold">
                <div className="flex justify-between items-center w-full">
                  <span>سوپر اسنپ</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-chevron-down mx-4 "
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </div>
                <ul className="group-hover/item:flex hidden w-full   list-none text-text_nav bg-white flex-col justify-start items-start font-iran_Light rounded-lg leading-9 dark:bg-bg_dark2 dark:text-white ">
                  <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                    درخواست تاکسی
                  </li>
                  <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                    پیک موتوری
                  </li>
                  <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                    رزرو بلیط هواپیما
                  </li>
                  <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                    قروشگاه اسنپ
                  </li>
                  <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                    اسنپ بیمه
                  </li>
                </ul>
              </li>
              <li className="flex items-center cursor-pointer my-4 hover:text-green_snap w-full">
                ثبت نام راننده اسنپ
                <span className="text-green_snap text:sm mx-2">
                  (سواری, موتور و وانت)
                </span>
              </li>
              <li className="flex items-center cursor-pointer my-4 hover:text-green_snap w-full">
                درخواست تاکسی
              </li>
              <li className="flex items-center cursor-pointer my-4 hover:text-green_snap w-full">
                باشگاه رانندگان
              </li>

              <li className="flex flex-col group/item-about items-center cursor-default w-full my-4 font-iran_Bold">
                <div className="flex justify-between items-center w-full">
                  <span>درباره ما</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-chevron-down mx-4 "
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </div>
                <ul className="group-hover/item-about:flex hidden w-full   list-none text-text_nav bg-white flex-col justify-start items-start font-iran_Light rounded-lg leading-9 dark:bg-bg_dark2 dark:text-white ">
                  <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                    فرصت های شغلی
                  </li>
                  <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                    درباره ما
                  </li>
                  <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                    تماس با ما
                  </li>
                </ul>
              </li>

              <hr className="divide-solid w-full my-2" />

              <li className="flex flex-col group/item-about items-center cursor-default w-full my-4 font-iran_Bold">
                <div className="flex justify-between items-center w-full text-green_snap">
                  <span>اپلیکیشن اسنپ</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-chevron-down mx-4 "
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </div>
                <ul className="group-hover/item-about:flex hidden w-full   list-none text-text_nav bg-white flex-col justify-start items-start font-iran_Light rounded-lg leading-9 dark:bg-bg_dark2 dark:text-white ">
                  <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                    دانلود مستقیم
                  </li>
                  <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                    دانلود از بازر
                  </li>
                  <li className="flex items-center cursor-pointer px-4 py-1 hover:text-green_snap">
                    دانلود از مایکت
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}
      {/* //hamber-responsive */}
      {/* //introo */}
      <div className="flex w-full  mt-[70px] md:mt-[90px]">
        <div className="w-full bg-green_snap  md:w-2/3 lg:w-1/2 flex justify-center items-end flex-col text-white px-7 py-2">
          <div className="w-full md:w-3/4">
            <h1 className="text-clamp_intro font-iran_Bold md:leading-[60px] lg:leading-[50px] ">
              تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!
            </h1>
            <p className="font-iran_Light text-clamp_des leading-10 my-5">
              از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط
              سفر، رزرو هتل و... را میتوانید با اسنپ انجام دهید.
            </p>
            <div className="md:flex w-full justify-start hidden">
              <input
                type="text"
                placeholder="09xxxxxxxx"
                className="bg-transparent border-b-2 mx-3 py-1 placeholder-white outline-none"
              />
              <button className="bg-white text-green_snap cursor-pointer font-iran_Light rounded-md px-5 py-2 ">
                ارسال لینک
              </button>
            </div>

            <button className="border border-text_muted rounded-md text-text_muted px-4 py-3 font-iran_Light mt-8 mb-3 md:inline-block hover:bg-bg_muted hidden">
              ورود به وب اپلیکیشن اسنپ
            </button>
            <button className="border border-text_muted rounded-md text-black px-4 py-3 font-iran_Light mt-8 mb-3 md:hidden flex justify-center items-center w-full bg-white">
              دانلود اپلیکیشن اسنپ
            </button>
          </div>
        </div>
        <img
          src="/img/intro_desktop.jpg"
          className="hidden md:flex md:w-1/3 lg:w-1/2 -scale-x-100 object-cover"
        />
      </div>
      {/* //introo */}
      {/* //image-market */}
      <div className="hidden w-3/4 md:flex flex-wrap justify-around items-center mx-auto my-2">
        <img
          src="/img/market/app_store.svg"
          width={160}
          height={47}
          className="my-2"
        />
        <img
          src="/img/market/bazaar.png"
          width={160}
          height={47}
          className="my-2"
        />
        <img
          src="/img/market/direct-download-badge.png"
          width={160}
          height={47}
          className="my-2"
        />
        <img
          src="/img/market/myketmarket.png"
          width={160}
          height={47}
          className="my-2"
        />
        <img
          src="/img/market/snapp-pwa.png"
          width={160}
          height={47}
          className="my-2"
        />
      </div>
      {/* //image-market */}
      {/* //services... */}
      <div className="w-full bg-bg_gray dark:bg-bg_dark1 flex justify-center items-center flex-col">
        <h1 className="text-clamp_intro text-text_nav font-iran_Bold my-8 dark:text-white">
          یک اپلیکیشن، برای تمام نیازها
        </h1>
        <div className="w-3/4 flex flex-wrap justify-start items-start mx-auto">
          <div className="w-1/3 my-4">
            <div className="w-3/4 bg-white rounded-2xl flex flex-col lg:flex-row shadow py-3 px-2 items-center">
              <img
                src="/img/icons/taxi.svg"
                className="rounded-xl flex lg:justify-center"
                width={65}
                height={65}
              />
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-right">
                <h3 className="font-iran_Bold mx-3 text-center lg:text-right">
                  تاکسی اینترنتی
                </h3>
                <p className="font-iran_Light hidden md:flex text-text_nav mx-3 text-center lg:text-right">
                  درخواست آنلاین خودرو
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 my-4">
            <div className="w-3/4 bg-white rounded-2xl flex flex-col lg:flex-row shadow py-3 px-2 items-center">
              <img
                src="/img/icons/bike.svg"
                className="rounded-xl flex lg:justify-center"
                width={65}
                height={65}
              />
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-right">
                <h3 className="font-iran_Bold mx-3 text-center lg:text-right">
                  پیک موتوری
                </h3>
                <p className="font-iran_Light hidden md:flex text-text_nav mx-3 text-center lg:text-right">
                  حمل و نقل انواع بسته
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 my-4">
            <div className="w-3/4 bg-white rounded-2xl flex flex-col lg:flex-row shadow py-3 px-2 items-center">
              <img
                src="/img/icons/intflight.svg"
                className="rounded-xl flex lg:justify-center"
                width={65}
                height={65}
              />
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-right">
                <h3 className="font-iran_Bold mx-3 text-center lg:text-right">
                  بلیط هواپیما خارجی
                </h3>
                <p className="font-iran_Light hidden md:flex text-text_nav mx-3 text-center lg:text-right">
                  خرید بلیط پرواز خارجی
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 my-4">
            <div className="w-3/4 bg-white rounded-2xl flex flex-col lg:flex-row shadow py-3 px-2 items-center">
              <img
                src="/img/icons/pharmacy.svg"
                className="rounded-xl flex lg:justify-center"
                width={65}
                height={65}
              />
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-right">
                <h3 className="font-iran_Bold mx-3 text-center lg:text-right">
                  داروخانه
                </h3>
                <p className="font-iran_Light hidden md:flex text-text_nav mx-3 text-center lg:text-right">
                  داروخانه آنلاین اسنپ
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 my-4">
            <div className="w-3/4 bg-white rounded-2xl flex flex-col lg:flex-row shadow py-3 px-2 items-center">
              <img
                src="/img/icons/bus.svg"
                className="rounded-xl flex lg:justify-center"
                width={65}
                height={65}
              />
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-right">
                <h3 className="font-iran_Bold mx-3 text-center lg:text-right">
                  خرید بلیط اتوبوس
                </h3>
                <p className="font-iran_Light hidden md:flex text-text_nav mx-3 text-center lg:text-right">
                  سرویس بلیط اتوبوس اسنپ
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 my-4">
            <div className="w-3/4 bg-white rounded-2xl flex flex-col lg:flex-row shadow py-3 px-2 items-center">
              <img
                src="/img/icons/hotel.svg"
                className="rounded-xl flex lg:justify-center"
                width={65}
                height={65}
              />
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-right">
                <h3 className="font-iran_Bold mx-3 text-center lg:text-right">
                  رزرو هتل
                </h3>
                <p className="font-iran_Light hidden md:flex text-text_nav mx-3 text-center lg:text-right">
                  رزرو آنلاین هتل
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //services... */}
      {/* //slider */}
      <div className="w-11/12 md:w-3/4 relative rounded-xl overflow-hidden mx-auto my-14">
        <img
          src="/img/slider/club.jpg"
          className="w-full object-cover md:h-auto h-[200px] "
        />
        <div className="absolute bottom-4 flex justify-center backdrop-blur-sm w-full bg-[rgba(255,255,255,.5)] py-2">
          <span className="cursor-pointer size-[10px] rounded-full bg-gray-700 mx-1 "></span>
          <span className="cursor-pointer size-[10px] rounded-full bg-gray-500 mx-1 "></span>
          <span className="cursor-pointer size-[10px] rounded-full bg-gray-500 mx-1 "></span>
          <span className="cursor-pointer size-[10px] rounded-full bg-gray-500 mx-1 "></span>
        </div>
      </div>
      {/* //slider */}
      {/* //snapp */}
      <div>
        <div className="w-full flex flex-col lg:flex-row">
          <div className="w-full xl:w-1/2 xl:h-auto">
            <img
              src="/img/slider/super-app.jpg"
              className="object-cover w-full xl:h-auto h-[215px]"
            />
          </div>
          <div className="w-full xl:w-1/2 text-right flex justify-start    ">
            <div className="w-full xl:w-5/6 mt-6 px-9    ">
              <h1 className="text-clamp_intro text-text_nav font-iran_Bold dark:text-white  ">
                سوپر اپ اسنپ؛ پاسخی به تمام نیازها
              </h1>
              <p className="font-iran_Light text-text_bg text-clamp_super_des leading-7 mt-6 dark:text-white">
                اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در
                حوزه‌ی تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ
                اسنپ راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک
                اپلیکیشن می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات
                متعددی از جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از
                سوپرمارکت‌ها و فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما،
                اتوبوس، قطار)، رزرو هتل، پرداخت قبض و خرید شارژ استفاده کنید.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full xl:translate-y-[-100px] translate-y-7   ">
          <div className="flex xl:flex-nowrap flex-wrap justify-around xl:w-2/3 w-full mx-auto">
            <div className="basis-[245px] my-5   ">
              <div className="bg-bg_gray rounded-3xl   ">
                <img
                  src="/img/icons/super_app_icon/210x190-easy.png"
                  width={210}
                  height={190}
                />
              </div>
              <div className="px-4 my-3">
                <h6 className="text-right font-iran_Bold my-3 dark:text-white">
                  آسان
                </h6>
                <p className="text-right font-iran_Light text-sm dark:text-white">
                  برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد
                  اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.
                </p>
              </div>
            </div>
            <div className="basis-[245px] my-5   ">
              <div className="bg-bg_gray rounded-3xl   ">
                <img
                  src="/img/icons/super_app_icon/210x190-fast.png"
                  width={210}
                  height={190}
                />
              </div>
              <div className="px-4 my-3">
                <h6 className="text-right font-iran_Bold my-3 dark:text-white">
                  سریع
                </h6>
                <p className="text-right font-iran_Light text-sm dark:text-white">
                  قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک
                  می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست.
                </p>
              </div>
            </div>
            <div className="basis-[245px] my-5   ">
              <div className="bg-bg_gray rounded-3xl   ">
                <img
                  src="/img/icons/super_app_icon/210x190-eco.png"
                  width={210}
                  height={190}
                />
              </div>
              <div className="px-4 my-3">
                <h6 className="text-right font-iran_Bold my-3 dark:text-white">
                  به صرفه
                </h6>
                <p className="text-right font-iran_Light text-sm dark:text-white">
                  سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی
                  می‌کند تا بهترین خدمات را با قیمتی منطقی دریافت کنید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //snapp */}
      {/* //video */}
      <div className="w-full bg-bg_gray dark:bg-bg_dark1 flex justify-center items-center flex-col">
        <h1 className="text-3xl font-iran_Bold text-text_bg mt-10 text-center dark:text-white">
          در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.
        </h1>
        <p className="font-iran_Light my-5 text-center dark:text-white">
          بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را
          اینترنتی انجام دهید
        </p>
        <button className="w-auto bg-green_snap text-white font-iran_Bold flex justify-center items-center cursor-pointer py-3 px-6 rounded-md hover:bg-green-500 my-7  ">
          ثبت نام رانندگان
        </button>
        <div className="lg:w-3/4 w-11/12 rounded-lg overflow-hidden">
          <video className="w-full" controls>
            <source src="/img/jazbranandeh1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="lg:w-3/4 w-full flex mx-auto flex-wrap justify-between mb-10">
          <div className="lg:w-[48%] w-11/12 mx-auto bg-white rounded-xl flex lg:flex-row flex-col mt-7 px-9 py-10  ">
            <img
              src="/img/icons/super_app_icon/more/180x100-income.png"
              className="lg:w-[120px] lg:h-[66px] w-[80px]  "
            />
            <div>
              <h1 className="font-iran_Bold text-text_bg">
                درآمد تضمینی + پاداش‌های ماهانه و هفتگی
              </h1>
              <p className="font-iran_Light text-sm my-2">
                با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه
                در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را
                افزایش دهید.
              </p>
            </div>
          </div>
          <div className="lg:w-[48%] w-11/12 mx-auto bg-white rounded-xl flex lg:flex-row flex-col mt-7 px-9 py-10  ">
            <img
              src="/img/icons/super_app_icon/more/180x100-hour.png"
              className="lg:w-[120px] lg:h-[66px] w-[80px]  "
            />
            <div>
              <h1 className="font-iran_Bold text-text_bg">ساعت کاری دلخواه</h1>
              <p className="font-iran_Light text-sm my-2">
                فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود
                را در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان
                شخصی‌سازی کنید.
              </p>
            </div>
          </div>

          <div className="lg:w-[48%] w-11/12 mx-auto bg-white rounded-xl flex lg:flex-row flex-col mt-7 px-9 py-10  ">
            <img
              src="/img/icons/super_app_icon/more/180x100-benefits.png"
              className="lg:w-[120px] lg:h-[66px] w-[80px]  "
            />
            <div>
              <h1 className="font-iran_Bold text-text_bg">
                مزایا و خدمات باشگاه رانندگان
              </h1>
              <p className="font-iran_Light text-sm my-2">
                در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از
                جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی
                بهره‌مند شوید.
              </p>
            </div>
          </div>
          <div className="lg:w-[48%] w-11/12 mx-auto bg-white rounded-xl flex lg:flex-row flex-col mt-7 px-9 py-10  ">
            <img
              src="/img/icons/super_app_icon/more/180x100-carfix.png"
              className="lg:w-[120px] lg:h-[66px] w-[80px]  "
            />
            <div>
              <h1 className="font-iran_Bold text-text_bg">کار‌فیکس</h1>
              <p className="font-iran_Light text-sm my-2">
                باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای
                سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی
                کرده است.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* //video */}

      {/* //footer */}
      <div className="w-full flex justify-center items-center flex-col my-9">
        <ul className="flex flex-wrap w-3/4 justify-center font-iran_Light text-sm mx-auto dark:text-white">
          <li className="m-3">
            <a href="#">فرصت‌های شغلی</a>
          </li>
          <li className="m-3">
            <a href="#">بلاگ</a>
          </li>
          <li className="m-3">
            <a href="#">شرایط و قوانین</a>
          </li>
          <li className="m-3">
            <a href="#">پنل سازمانی</a>
          </li>
          <li className="m-3">
            <a href="#">سوالات متداول</a>
          </li>
          <li className="m-3">
            <a href="#">باشگاه رانندگان</a>
          </li>
          <li className="m-3">
            <a href="#">ثبت نام راننده اسنپ</a>
          </li>
          <li className="m-3">
            <a href="#">کد تخفیف اسنپ</a>
          </li>
          <li className="m-3">
            <a href="#">درباره ما</a>
          </li>
          <li className="m-3">
            <a href="#">تماس با ما</a>
          </li>
        </ul>

        <ul className="flex my-9">
          <li className="mx-2 ">
            <a href="#">
              <img
                alt="Twitter"
                loading="lazy"
                width="32"
                height="32"
                decoding="async"
                className="dark:bg-white"
                data-nimg="1"
                src="https://web-cdn.snapp.ir/snapp-website/icons/social/Twitter.svg"
              />
            </a>
          </li>
          <li className="mx-2">
            <a href="#">
              <img
                loading="lazy"
                width="32"
                height="32"
                className="dark:bg-white"
                decoding="async"
                data-nimg="1"
                src="https://web-cdn.snapp.ir/snapp-website/icons/social/Instagram.svg"
              />
            </a>
          </li>
          <li className="mx-2">
            <a href="#">
              <img
                loading="lazy"
                width="32"
                height="32"
                className="dark:bg-white"
                decoding="async"
                data-nimg="1"
                src="https://web-cdn.snapp.ir/snapp-website/icons/social/Youtube.svg"
              />
            </a>
          </li>
          <li className="mx-2">
            <a href="#">
              <img
                loading="lazy"
                width="32"
                height="32"
                className="dark:bg-white"
                decoding="async"
                data-nimg="1"
                src="	https://web-cdn.snapp.ir/snapp-website/icons/social/Linkedin.svg"
              />
            </a>
          </li>
          <li className="mx-2">
            <a href="#">
              <img
                loading="lazy"
                width="32"
                height="32"
                className="dark:bg-white"
                decoding="async"
                data-nimg="1"
                src="https://web-cdn.snapp.ir/snapp-website/icons/social/Telegram.svg"
              />
            </a>
          </li>
        </ul>

        <div className="flex dark:bg-white dark:p-4 rounded-md">
          <a href="#">
            <img
              src="/img/namad/logo.png"
              className="mx-3"
              width={130}
              height={130}
            />
          </a>
          <a href="#">
            <img
              src="/img/namad/namad.png"
              className="mx-3"
              width={130}
              height={130}
            />
          </a>
        </div>
       
      </div>
      {/* //footer */}
       <div
          dir="ltr"
          className="bg-bg_gray text-center text-gray-600 py-[10px] mt-[30px] flex items-center justify-center   "
        >
          <p className="text-[#545252] mr-[10px]  ">Afshin Sahrae</p>Tailwind CSS |
          Snapp Site Template Project &copy;
        </div>
    </main>
  );
}
