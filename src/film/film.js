import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Film = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get('https://backendexample.sanbercloud.com/api/student-scores')
      /*masihpakai api sanbercoder */
      .then((res) => {
        setData([...res.data])
      })
      .catch((error) => {})
  }, [])
  return (
    <>
      <div id="film" class=" pb-16 bg-slate-100">
        <div class="container">
          <div class="w-full px-4 mb-10">
            <div class="max-w-xl mx-auto text-center mb-16">
              <h4 class="font-semibold text-lg text-red-700 m-auto">
                Perhatian
              </h4>
              <h2 class="font-bold text-2xl ">Teman - Teman </h2>
              <p class="font-medium text-md text-secondary">
                Sebelum Melihat movie di bawa pastikan internet stabil ya
              </p>
            </div>
          </div>
          <div class="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            {data !== null &&
              data.map((res) => {
                return (
                  <div class="mb-12 p-4 md:w-1/2 justify-center">
                    <div class="rounded-md overflow-hidden bg-white">
                      <img
                        src="https://i.ibb.co/ctDfGMX/imange-nama.png"
                        alt="logo movie"
                        class="w-1/2"
                      />
                      <h1 class="text-base font-semibold text-dark md:text-xl lg:text-xl ">
                        {res.name}
                      </h1>
                      <h2 class="font-medium text-slate-500 mb-9 ">
                        <p>ndsklnfksnkfnsknfknskfnksnkfns</p>
                        Semongga NONTONKU ini bisa menamani hari mu 🤗
                      </h2>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Film
