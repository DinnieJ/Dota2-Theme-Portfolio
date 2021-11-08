import React, { useState } from "react"
import "./AbilityList.scss"

const AbilityList = () => {
  const [isHovered, setIsHovered] = useState(false)
  const list = [
    { img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/windrunner_windrun.png", title: "run liek the wind" },
    { img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/queenofpain_blink.png", title: "Rush in" },
    { img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_blink.png", title: "Rush out" },
    { img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/tinker_keen_teleport.png", title: "Home sweet home" },
  ]
  return (
    <div className={"ability-list animation-up relative lg:absolute flex lg:bottom-32 lg:right-40 flex-col justify-center items-center z-50"}>
      <h1 className={`uppercase text-shadow text-lg text-white`}>Abilities</h1>
      <div className={`flex flex-row my-2 py-3 justify-center items-center relative`}>
        {list.map((item, i) => (
          <div className={`relative`} key={i}>
            <div key={i} className="lg:w-24 lg:h-24 mx-2.5 skill transition-transform cursor-pointer">
              <img src={item.img} />
            </div>
            <div className={`skill-title text-white absolute w-60 h-20 bg-gray-500 flex flex-col justify-center items-center`}>
              <h1 className={`uppercase text-gray-200 text-xl`}>{item.title}</h1>
              <p>Click here for more detail</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AbilityList
