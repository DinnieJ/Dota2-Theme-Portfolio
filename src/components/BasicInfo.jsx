import React from "react"
import AbilityList from "./AbilityList"
import "./BasicInfo.scss"

const BasicInfo = () => {

  return (
    <div id="basic-info-dota" className={`info relative w-full pl-10 pt-14 lg:pl-36 pr-10 overflow-hidden`}>
      <div className={`relative w-full lg:w-1/3 slide-left z-40 h-full mt-40`}>
        <p className={`text-3xl text-white font-light uppercase`}>Da Pusseh</p>
        <h1 className={`reaver font-bold text-7xl uppercase text-white py-2`}>Thuần ngu</h1>
        <h4 className={`text-xl uppercase text-blue-300`}>Weak and useless in teamfight</h4>
        <p className={`text-3xl text-white font-light py-2`}>
          Easily escape battle with double blink, with his muscle he can fight hand-to-hand to Techies and almost win. For every escape, he gain the
          <span className={"font-bold"}> Pusseh Point</span>, increasing his blink cooldown and movement speed of Run Like The Wind
        </p>
      </div>
      <div className={`portrait w-full lg:w-1/2 slide-right absolute right-0 h-full flex items-center justify-center -top-1/4 lg:top-0 overflow-hidden z-20`}>
        <img src={"../public/ava.png"} className={`opacity-60 lg:opacity-100`} />
      </div>
      <div className={`large-name absolute z-auto top-60 left-80 opacity-30 hidden lg:block`}>
        <h1 className={`text-ultra font-light italic uppercase left-40 tracking-tighter text-white whitespace-nowrap`}>Pusseh</h1>
      </div>
      <div className={`big-ass-sword transform -rotate-40 h-96 hidden xl:block absolute left-1/4 bottom-32 bg-transparent z-0`}>
        <div className={`bg-black h-full rolling-sword opacity-50`}></div>
      </div>
      <AbilityList />
    </div>
  )
}

export default BasicInfo
