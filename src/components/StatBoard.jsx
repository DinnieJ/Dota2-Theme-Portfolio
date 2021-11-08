import React, { useEffect, useState } from "react"
import "./StatBoard.scss"

const StatBoard = () => {
  const [showDetail, setShowDetail] = useState(false)

  const checkScroll = () => {
    if (showDetail) return
    if (window.scrollY >= 10) {
      setShowDetail(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScroll)
    return () => {
      window.removeEventListener("scroll", checkScroll)
    }
  })

  return (
    <React.Fragment>
      <div className="stat relative">
        <div
          className={`stat-main${
            showDetail ? "-header" : ""
          } relative bg-gradient-to-bl w-full h-full py-3 justify-evenly items-center from-gray-900 to-gray-800 shadow-2xl flex flex-col lg:flex-row`}
        >
          <div
            className={`stat-block lg:border-r border-white border-opacity-80 flex flex-col lg:flex-col-reverse justify-center items-center h-full w-4/5 lg:px-3 box-border`}
          >
            <h1 className={`uppercase text-gray-300 text-xl my-2.5 text-shadow font-extralight`}>Information</h1>
            <div className={`inline-flex flex-col lg:flex-row gap-5 lg:gap-10 justify-center items-center overflow-hidden ${showDetail ? "hide-info" : "lg:h-36"}`}>
              <div className={`flex flex-col justify-center items-center lg:w-1/3`}>
                <img
                  src={"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dragon_knight.png"}
                  className={`ava w-full transition-transform`}
                />
                <div className={`bg-gradient-to-r from-green-900 to-green-400 w-full text-shadow text-white flex justify-center h-1/6`}>
                  datnn288@gmail.com
                </div>
                <div className={`bg-gradient-to-r from-blue-900 to-blue-400 w-full text-shadow text-white flex justify-center h-1/6`}>
                  +84913323534
                </div>
              </div>
              <div>
                <h1 className={`contact text-white text-lg font-light uppercase`}>Name: Nguyen Ngoc Dat</h1>
                <h1 className={`contact text-white text-lg font-light uppercase`}>Birthday: 28/08/1999</h1>
                <h1 className={`contact text-white text-lg font-light uppercase`}>Address: Viet Tri, Phu Tho</h1>
              </div>
            </div>
          </div>
          <div
            className={`stat-block lg:border-r border-white border-opacity-80 flex flex-col sm:flex-col-reverse justify-center items-center h-full w-4/5 lg:px-3 box-border`}
          >
            <h1 className={`uppercase text-gray-300 text-xl my-2.5 text-shadow font-extralight`}>ROLES</h1>
            <div className={` inline-flex gap-3 flex-col justify-center items-center overflow-hidden ${showDetail ? "hide-info" : "lg:h-36"}`}>
              <div className={`text-3xl font-light uppercase text-white`}>Web developer</div>
            </div>
          </div>
          <div
            className={`stat-block lg:border-r border-white border-opacity-80 flex flex-col sm:flex-col-reverse justify-center items-center h-full w-4/5 lg:px-3 box-border`}
          >
            <h1 className={`uppercase text-gray-300 text-xl my-2.5 text-shadow font-extralight`}>Education</h1>
            <div className={` inline-flex gap-3 flex-col justify-center items-center overflow-hidden ${showDetail ? "hide-info" : "lg:h-36"}`}>
              <div className={`text-2xl font-light uppercase text-white`}>Software Engineering at FPT University</div>
              <div className={`text-2xl font-light uppercase text-white`}>GPA: 3.14/4.0</div>
            </div>
          </div>
        </div>
        <div className={`overflow-hidden w-full bg-green-500 ${showDetail ? "detail-info-open" : ""} top-28`}></div>
        <div  className={`h-screen bg-gray-400 w-full`}></div>
      </div>

    </React.Fragment>
  )
}

export default StatBoard
