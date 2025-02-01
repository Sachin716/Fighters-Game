'use client';

import { useRouter } from "next/navigation";
import React from "react";
import { useRef, useState, useEffect } from "react";


const Local = () => {

    const router = useRouter();

    

    const P1Details = useRef({
        selectionIndex: 1,
        selected: false
    });
    const [P1DetailsState, setP1Details] = useState({ ...P1Details.current })

    const playerChange = useRef(false);
    const bgm = useRef(false);


    useEffect(()=>{
        bgm.current.play();
        bgm.current.volume = 0.2;
    } ,[] )

    const P2Details = useRef({
        selectionIndex: 13,
        selected: false
    });
    const [P2DetailsState, setP2Details] = useState({ ...P2Details.current })
    var newindex = 0

    function handleChangeAudio(){
        playerChange.current.currentTime = 0;
        playerChange.current.play();
        playerChange.current.volume = 0.2;
    }

    function updateKeyStats(event) {

        if (!P1Details.current.selected) {
            if (event.keyCode == 65) { // a
                newindex = Math.max(0, P1Details.current.selectionIndex - 1);
                P1Details.current.selectionIndex = newindex
                handleChangeAudio();
            }
            if (event.keyCode == 68) { // d
                newindex = Math.min(14, P1Details.current.selectionIndex + 1) >= 15 ? P1Details.current.selectionIndex : Math.min(14, P1Details.current.selectionIndex + 1)
                P1Details.current.selectionIndex = newindex
                handleChangeAudio();
            }
        }

        if (!P2Details.current.selected) {
            if (event.keyCode == 37) { // left
                newindex = Math.max(0, P2Details.current.selectionIndex - 1);
                P2Details.current.selectionIndex = newindex
                handleChangeAudio();
            }
            if (event.keyCode == 39) { // right
                newindex = Math.min(14, P2Details.current.selectionIndex + 1) >= 15 ? P2Details.current.selectionIndex : Math.min(14, P2Details.current.selectionIndex + 1)
                P2Details.current.selectionIndex = newindex
                handleChangeAudio();
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
                showcase:"/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img:'/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase:"/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img:'/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase:"/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img:'/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase:"/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img:'/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase:"/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img:'/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase:"/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img:'/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase:"/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img:'/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Baba Ramdev",
                showcase:"/PlayerSelect/Showcases/Baba_Ramdev.png",
                image: "/PlayerSelect/Baba_Ramdev.png",
                name_img:'/PlayerSelect/PlayerNames/Baba_Ramdev.png'
            },
            {
                name: "Coming Soon",
                showcase:"/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img:'/PlayerSelect/PlayerNames/Unknown_Name.png'
            },

            {
                name: "Coming Soon",
                showcase:"/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img:'/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase:"/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img:'/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase:"/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img:'/PlayerSelect/PlayerNames/Unknown_Name.png'
            },

            {
                name: "Coming Soon",
                showcase:"/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img:'/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase:"/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img:'/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase:"/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img:'/PlayerSelect/PlayerNames/Unknown_Name.png'
            },

        ]
    )

    return (
        <div className="bg-stone-950 w-screen h-screen flex flex-col">
            <div className="w-[90%] h-[10%] fixed left-[5%] bottom-[100px] border-b-[5px] border-t-[5px] border-zinc-400 bg-red-500 flex">
                {
                    Characters.current.map((c, index) => {
                        if((P1Details.current.selectionIndex == P2Details.current.selectionIndex) && (P1Details.current.selectionIndex == index) ){
                            return (<div key={index} className={`bg-gradient-to-r from-red-900 via-transparent to-red-900  flex items-end justify-start border-[3px] border-t-blue-500 border-l-blue-500 border-r-green-500 border-b-green-500 overflow-hidden`}  > <img src={c.image} alt={c.name} className="w-full mt-2"/> </div>)
                        }
                        else if (P1Details.current.selectionIndex == index) {
                            return (<div key={index} className={`bg-gradient-to-r from-red-900 via-transparent to-red-900  flex items-end justify-start border-[3px] border-blue-500 overflow-hidden`}  > <img src={c.image} alt={c.name} className="w-full mt-2"/> </div>)
                        }
                        else if (P2Details.current.selectionIndex == index) {
                            return (<div key={index} className={` bg-gradient-to-r from-red-900 via-transparent to-red-900  flex items-end justify-start border-[3px] border-green-500 overflow-hidden`}  > <img src={c.image} alt={c.name} className="object-cover w-full"/> </div>)
                        }
                        else {
                            return (<div key={index} className={` bg-red-500 flex items-end justify-start overflow-hidden `}  > <img src={c.image} alt={c.name} className="object-cover w-full" /> </div>)
                        }
                    })
                }
            </div>
            
            
            <div className="fixed w-[30%] h-[80%] bottom-[calc(10%+100px)] left-[10%] bg-gradient-to-t from-blue-600 via-[#0000ff52] to-transparent  ">
                <img src={Characters.current[P1Details.current.selectionIndex].showcase} alt={Characters.current[P1Details.current.selectionIndex].name} className="object-cover w-full absolute bottom-0 " />
                <img src={Characters.current[P1Details.current.selectionIndex].name_img} alt="Character_Name" className=" absolute left-0 bottom-0" />
            </div>
            <div className="fixed w-[30%] h-[80%] bottom-[calc(10%+100px)] right-[10%] bg-gradient-to-t from-green-600 via-[#00ff0052] to-transparent  ">
                <img src={Characters.current[P2Details.current.selectionIndex].showcase} alt={Characters.current[P2Details.current.selectionIndex].name} className="object-cover w-full absolute bottom-0  scale-x-[-1]" />
                <img src={Characters.current[P2Details.current.selectionIndex].name_img} alt="Character_Name" className="absolute right-0 bottom-0" />
            </div>
                <img src={'/PlayerSelect/Essentials/VS.png'} className="w-[8%] fixed left-[46%] bottom-[calc(10%+250px)]" />
            <audio src={'/PlayerSelect/Audio/Player_Select_BGM.mp3'} ref={bgm}  loop />
            <audio src={'/PlayerSelect/Audio/PlayerChange.wav'} ref={playerChange} />
        </div>
    );

}

export default Local