'use client';
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [modeIndex, setMode] = useState(5)
  const modeIndexRef = useRef(5)

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

  const handleKeyDown = (event: any) => {
    if (event.keyCode == 87) { //w
      newIndex = ((modeIndexRef.current - 1) % 4) + 4
      modeIndexRef.current = newIndex
    }

    if (event.keyCode == 83) { //s
      newIndex = ((modeIndexRef.current + 1) % 4) + 4
      modeIndexRef.current = newIndex
    }
    setMode(modeIndexRef.current)
  }


  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])


  return (
    <div className="w-screen h-screen bg-zinc-950 flex">
      <div className="w-full h-[15%] fixed bottom-[15%] left-[0px] z-[10]">
        {
          modes.current.map((item, index) => {
            if ((index >= modeIndexRef.current - 1) && (index <= modeIndexRef.current + 1)) {
              if (index == modeIndexRef.current) {
                return (<div key={index} className="bg-gradient-to-r from-zinc-800 via-zinc-100 to-zinc-800 border-t-[6px] border-b-[6px] border-zinc-100 "><div className="z-[100] text-center text-5xl font-bold m-auto text-rose-600">{item.name}</div></div>)
              }
              else {
                return (<div className="z-[100] text-center text-3xl font-bold opacity-[70%] m-auto text-orange-600" key={index}>{item.name}</div>)
              }

            }

          })
        }
      </div>
    </div>
  );
}
