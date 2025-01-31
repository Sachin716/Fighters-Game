'use client';

import { useRouter } from "next/navigation";
import React from "react";
import { useRef, useState, useEffect } from "react";


const Local = () => {


    const P1Details = useRef({
        selectionIndex: 0,
        selected: false
    });
    const [P1DetailsState, setP1Details] = useState({ ...P1Details.current })


    const P2Details = useRef({
        selectionIndex: 4,
        selected: false
    });
    const [P2DetailsState, setP2Details] = useState({ ...P2Details.current })
    var newindex = 0
    function updateKeyStats(event) {

        if (!P1Details.current.selected) {
            if (event.keyCode == 87) { // w
                newindex = Math.max(0, P1Details.current.selectionIndex - 5);
                P1Details.current.selectionIndex = newindex
            }
            if (event.keyCode == 83) { // s
                newindex = Math.min(14, P1Details.current.selectionIndex + 5) >= 15 ? P1Details.current.selectionIndex : Math.min(14, P1Details.current.selectionIndex + 5)
                P1Details.current.selectionIndex = newindex
            }
            if (event.keyCode == 65) { // a
                newindex = Math.max(0, P1Details.current.selectionIndex - 1);
                P1Details.current.selectionIndex = newindex
            }
            if (event.keyCode == 68) { // d
                newindex = Math.min(14, P1Details.current.selectionIndex + 1) >= 15 ? P1Details.current.selectionIndex : Math.min(14, P1Details.current.selectionIndex + 1)
                P1Details.current.selectionIndex = newindex
            }
        }

        if (!P2Details.current.selected) {
            if (event.keyCode == 38) { // up
                newindex = Math.max(0, P2Details.current.selectionIndex - 5);
                P2Details.current.selectionIndex = newindex
            }
            if (event.keyCode == 40) { // down
                newindex = Math.min(14, P2Details.current.selectionIndex + 5) >= 15 ? P2Details.current.selectionIndex : Math.min(14, P2Details.current.selectionIndex + 5)
                P2Details.current.selectionIndex = newindex
            }
            if (event.keyCode == 37) { // left
                newindex = Math.max(0, P2Details.current.selectionIndex - 1);
                P2Details.current.selectionIndex = newindex
            }
            if (event.keyCode == 39) { // right
                newindex = Math.min(14, P2Details.current.selectionIndex + 1) >= 15 ? P2Details.current.selectionIndex : Math.min(14, P2Details.current.selectionIndex + 1)
                P2Details.current.selectionIndex = newindex
            }
        }


        setP1Details({ ...P1Details.current })
        setP2Details({ ...P2Details.current })

    }


    useEffect(() => {
        addEventListener('keydown', updateKeyStats)
        return () => {
            removeEventListener('keydown', updateKeyStats)
        }
    })



    const playLoop = () => {
        setP1Details({ ...P1Details.current })
        setP2Details({ ...P2Details.current })
        window.requestAnimationFrame(playLoop)
    }

    useEffect(() => {
        playLoop();
    }, [])



    const Characters = useRef(
        [
            {
                name: "Coming Soon",
                showcase:"/Unknown_Showcase.png",
                image: "Soon"
            },
            {
                name: "Character2",
                showcase:"/PlayerSelect/Showcases/Character2.png",
                image: "Char2Image"
            },
            {
                name: "Coming Soon",
                showcase:"/Unknown_Showcase.png",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                showcase:"/Unknown_Showcase.png",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                showcase:"/Unknown_Showcase.png",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                showcase:"/Unknown_Showcase.png",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                showcase:"/Unknown_Showcase.png",
                image: "Soon"
            },
            {
                name: "Baba Ramdev",
                showcase:"/PlayerSelect/Showcases/Baba_Ramdev",
                image: "/PlayerSelect/Baba_Ramdev.png"
            },
            {
                name: "Coming Soon",
                showcase:"/Unknown_Showcase.png",
                image: "Soon"
            },

            {
                name: "Coming Soon",
                showcase:"/Unknown_Showcase.png",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                showcase:"/Unknown_Showcase.png",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                showcase:"/Unknown_Showcase.png",
                image: "Soon"
            },

            {
                name: "Coming Soon",
                showcase:"/Unknown_Showcase.png",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                showcase:"/Unknown_Showcase.png",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                showcase:"/Unknown_Showcase.png",
                image: "Soon"
            },

        ]
    )

    return (
        <div className="bg-stone-950 w-screen h-screen flex flex-col">
            <div className="w-[60%] h-[50%] bg-red-500  m-auto mt-[50px] flex-wrap flex ">
                {
                    Characters.current.map((c, index) => {
                        if (P1Details.current.selectionIndex == index) {
                            return (<div key={index} className={`bg-gradient-to-r from-red-900 via-transparent to-red-900  h-[33%] w-[20%] flex items-end justify-start border-[3px] border-blue-500 overflow-hidden`}  > <img src={c.image} alt={c.name} className="w-full mt-2"/> </div>)
                        }
                        else if (P2Details.current.selectionIndex == index) {
                            return (<div key={index} className={` bg-gradient-to-r from-red-900 via-transparent to-red-900  h-[33%] w-[20%] flex items-end justify-start border-[3px] border-green-500 overflow-hidden`}  > <img src={c.image} alt={c.name} className="object-cover w-full"/> </div>)
                        }
                        else {
                            return (<div key={index} className={` bg-red-500 h-[33%] w-[20%] flex items-end justify-start overflow-hidden`}  > <img src={c.image} alt={c.name} className="object-cover w-full" /> </div>)
                        }
                    })
                }
            </div>

            <div className="bg-zinc-500 fixed w-[30%] h-[40%] left-0 bottom-0 ">
                {`P1 : ${Characters.current[P1Details.current.selectionIndex].name}`}
            </div>
            <div className="bg-zinc-500 fixed w-[30%] h-[40%] right-0 bottom-0 ">
                {`${Characters.current[P2Details.current.selectionIndex].name} : P2`}
            </div>
        </div>
    );

}

export default Local