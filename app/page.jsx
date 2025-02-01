'use client';
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { setTimeout } from "timers";


export default function Home() {

  useEffect(()=>{
          if(window.innerHeight > window.innerWidth){
              alert("The game isnt designed for the mobile Devices and is unplayable please try refraining from playing")
          }
      },[])


  async function handleRouting(params) {
    await setInterval(1000,router.push('/playerSelect'))
  }

  const router = useRouter();
  const [modeIndex, setMode] = useState(4)
  const modeIndexRef = useRef(4)
  const change = useRef(false);
  const Selection = useRef(false);

  const modes = useRef([
    {
      name: "Local Multiplayer",
      route: '/Local'
    },
    {
      name: "Online Multiplayer",
      route: "/Online"
    },
    {
      name: "Single Player",
      route: "/Single"
    },
    {
      name: "Practice Mode",
      route: "/Practice"
    }
    ,
    {
      name: "Local Multiplayer",
      route: '/Local'
    },
    {
      name: "Online Multiplayer",
      route: "/Online"
    },
    {
      name: "Single Player",
      route: "/Single"
    },
    {
      name: "Practice Mode",
      route: "/Practice"
    }
    ,
    {
      name: "Local Multiplayer",
      route: '/Local'
    },
    {
      name: "Online Multiplayer",
      route: "/Online"
    },
    {
      name: "Single Player",
      route: "/Single"
    },
    {
      name: "Practice Mode",
      route: "/Practice"
    }

  ])

  var newIndex = 0

  const handleKeyDown = (event) => {
    if (event.keyCode == 87) { //w
      change.current.currentTime = 0;
      change.current.play()
      newIndex = ((modeIndexRef.current - 1) % 4) + 4
      modeIndexRef.current = newIndex
    }

    if (event.keyCode == 83) { //s
      change.current.currentTime = 0;
      change.current.play()
      newIndex = ((modeIndexRef.current + 1) % 4) + 4
      modeIndexRef.current = newIndex
    }

    if (event.keyCode == 13) {
      Selection.current.play()
      if(modeIndexRef.current == 4){
        localStorage.setItem("mode",'lc')
        setTimeout(()=>{router.push('/playerSelect');},800)
      }
      if(modeIndexRef.current == 5){
        localStorage.setItem("mode",'ol')
        setTimeout(()=>{router.push('/playerSelect');},800)
      }
      if(modeIndexRef.current == 6){
        localStorage.setItem("mode",'sp')
        setTimeout(()=>{router.push('/playerSelect');},800)
      }
      if(modeIndexRef.current == 7){
        localStorage.setItem("mode",'pr')
        setTimeout(()=>{router.push('/playerSelect');},800)
      }
      
    }
    setMode(modeIndexRef.current)
  }




  useEffect(() => {
    localStorage.removeItem("mode")
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])


  return (
    <div className="w-screen h-screen bg-zinc-950 flex justify-center">
      <img src="/ModeSelect/Logo_Bg.jpg" className="fixed w-[1000px] flex" />
      <img src="/ModeSelect/Logo.png" className="h-[200px] z-[10] fixed top-[300px]" />
      { /*<div className=" w-[60%] h-[10%] top-[32%] fixed mx-auto text-right text-6xl font-extrabold italic bg-gradient-to-t flex justify-center from-orange-500 to-orange-300 bg-clip-text text-transparent z-[200]">
        Bharuwa Fighters
      </div> */ }
      <div className="w-full h-[15%] fixed bottom-[15%] left-[0px] z-[10]  ">
        {
          modes.current.map((item, index) => {
            if ((index >= modeIndexRef.current - 1) && (index <= modeIndexRef.current + 1)) {
              if (index == modeIndexRef.current) {
                return ( <div> <div className="h-[8px] bg-gradient-to-r from-[#ffffff11] via-white to-[#ffffff11] w-[70%] mx-auto"></div> <div key={index} className="bg-gradient-to-r from-transparent via-zinc-100 to-transparent w-[70%] mx-auto  "><div className="z-[100] text-center text-5xl font-bold m-auto text-rose-600">{item.name}</div></div> <div className="h-[8px] bg-gradient-to-r from-[#ffffff11] via-white to-[#ffffff11] w-[70%] mx-auto"></div> </div>)
              }
              else {
                return (<div className="z-[100] text-center text-3xl font-bold opacity-[70%] m-auto text-orange-600" key={index}>{item.name}</div>)
              }

            }

          })
        }
      </div>
      
      <audio ref={change} src={'/ModeSelect/Change.mp3'} />
      <audio ref={Selection} src={'/ModeSelect/Selected.mp3'} />
    </div>
  );
}
