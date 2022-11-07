import React from 'react'

const Hero = () => {
  return (
    <>
      <div id="hero" class="pt-36">
        <div class="container">
          <div class="flex flex-wrap">
            <div class="w-full self-center px-4 lg:w-1/2">
              <h1 class="text-base font-semibold text-red-700 md:text-xl lg:text-xl">
                Selamat datang di
                <br /> <span class="text-4xl mt-1 lg:text-5xl">NONTONKU</span>
              </h1>
              <h2 class="font-medium text-slate-500 mb-9 ">
                Semongga NONTONKU ini bisa menamani hari mu 🤗
              </h2>

              <span
                href="#"
                class="text-base font-semibold text-white bg-red-700 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-90 w-px transition duration-300 ease-in-out"
              >
                Nonton
              </span>
            </div>
            <div class="w-full px-4 self-end lg:w-1/2">
              <div class=" relative mt-10 lg:mt-9 lg:right-0">
                <img
                  src="https://i.ibb.co/ctDfGMX/imange-nama.png"
                  alt="logo movie"
                  class="max-w-full mx-auto"
                />
                <span class="absolute -bottom-20 -z-10 left-1/2 -translate-x-1/2 ">
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#B91C1C"
                      d="M56.8,-23.2C63.7,2.9,52.7,30.1,31.1,46.7C9.5,63.4,-22.7,69.5,-38.2,57.2C-53.6,44.8,-52.3,14.1,-43.2,-15C-34,-44.2,-17,-71.7,4,-73C24.9,-74.3,49.9,-49.3,56.8,-23.2Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
