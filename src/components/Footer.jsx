import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" bg-slate-900 pt-9">
        <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
          <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
            <div className="mt-9 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
              <div className="">
                <p className="text-deutziawhite font-inter  text-3xl font-medium leading-normal">
                  About us
                </p>
                <ul>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/"
                    >
                      About Emoha
                    </a>
                  </li>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/our-tutors"
                    >
                      Membership
                    </a>
                  </li>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/become-a-tutor"
                    >
                      Moh TV
                    </a>
                  </li>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/plans-and-pricing"
                    >
                      Media
                    </a>
                  </li>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/plans-and-pricing"
                    >
                      User stories
                    </a>
                  </li>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/plans-and-pricing"
                    >
                      Business partnership
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-9 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
              <div className="">
                <p className="text-deutziawhite font-inter text-3xl font-medium leading-normal">
                  Terms & Policies
                </p>
                <ul>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/"
                    >
                      Terms and condition
                    </a>
                  </li>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/our-tutors"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/become-a-tutor"
                    >
                      Cookies policy
                    </a>
                  </li>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/plans-and-pricing"
                    >
                      Disclaimer
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-9 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
              <div className="">
                <p className="text-deutziawhite font-inter text-3xl font-medium leading-normal">
                  Support
                </p>
                <ul>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/"
                    >
                      Emergency support
                    </a>
                  </li>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/our-tutors"
                    >
                      VAS services
                    </a>
                  </li>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/become-a-tutor"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-9 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
              <div className="mt-9 flex flex-col gap-4 sm:mt-0">
                <p className="text-deutziawhite font-inter  text-3xl font-medium">
                  Download the app
                </p>
                <div className="flex gap-4 sm:flex-col">
                  <a target="_blank" href="#">
                    <img
                      alt="facebook icon"
                      loading="lazy"
                      width={168}
                      height={50}
                      decoding="async"
                      data-nimg={1}
                      style={{ color: "transparent" }}
                      src="https://emoha.com/_next/image?url=%2Fstatic%2Fimages%2Fgoogle-play-logo.webp&w=1920&q=75"
                    />
                  </a>
                  <a target="_blank" href="#">
                    <img
                      alt="facebook icon"
                      loading="lazy"
                      width={168}
                      height={50}
                      decoding="async"
                      data-nimg={1}
                      style={{ color: "transparent" }}
                      src="https://emoha.com/_next/image?url=%2Fstatic%2Fimages%2Fapp-store-logo.webp&w=1920&q=75"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className=" hidden lg:block  text-[15px] font-normal hover:font-semibold text-center text-white">
            {" "}
            feedback email: feedback@emoha.com
          </p>
          <hr className="mt-[30px] text-white" />

          <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
            <p className="text-[15px] font-normal text-white md:text-[12px]">
              © Copyright 2023 Emoha.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
