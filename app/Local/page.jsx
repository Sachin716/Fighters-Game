'use client';

import React, { useEffect } from "react";
import { useRef, useState } from "react";




const Local = () => {

    const Characters = useRef(
        [
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Baba Ramdev",
                showcase: "/PlayerSelect/Showcases/Baba_Ramdev.png",
                image: "/PlayerSelect/Baba_Ramdev.png",
                name_img: '/PlayerSelect/PlayerNames/Baba_Ramdev.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },

            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },

            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },
            {
                name: "Coming Soon",
                showcase: "/PlayerSelect/Showcases/Unknown_Showcase.png",
                image: "/PlayerSelect/Unknown_Player.png",
                name_img: '/PlayerSelect/PlayerNames/Unknown_Name.png'
            },

        ]
    )



    const keyStats = useRef({
        w: false,
        s: false,
        a: false,
        d: false,
        j: false,
        k: false,
        l: false,
        i: false,
        up: false,
        down: false,
        left: false,
        right: false,
        num8: false,
        num4: false,
        num6: false,
        num: false
    })


    const Player1 = useRef({
        health: 100,
        player: "",
        playerImage: "",
        StateImg: "",
        isOnGround: true,

        Punch_1: {
            isHitting: false,
            PositionHorizontal: 0,
            PositionVertical: 0
        },
        Projectile: {
            isHitting: false,
            PositionHorizontal: 0,
            PositionVertical: 0
        },
        Kick_1: {
            isHitting: false,
            PositionHorizontal: 0,
            PositionVertical: 0
        }
    })

    const Player2 = useRef({
        health: 100,
        player: "",
        playerImage: "",
        StateImg: "",
        isOnGround: true,

        Punch_1: {

        },
        Projectile: {

        },
        Kick_1: {

        }
    })

    useEffect(() => {
        // Player1.current.player = Characters.currnet[localStorage.getItem("P1Details")]
        // Player2.current.player = Characters.currnet[localStorage.getItem("P2Details")]
    }, [])

    const handleKeyDown = (e, value) => {

    }

    const handleKeyUp = (e, value) => {

    }




    const imgUrlRef = useRef("")
    useEffect(() => {
        // imgUrlRef.current = localStorage.getItem("imgUrl")
        addEventListener('keydown', (event) => { handleKeyDown(event, true) })
        addEventListener('keyup', (event) => { handleKeyUp(event, false) })
    }, [])


    return (
        <div className="bg-stone-950 w-screen h-screen object-cover flex">
            <div className="fixed w-[45%] h-[25px] bg-red-500 left-[2%] top-[25px] rounded-sm overflow-hidden">
                <div className="h-full absolute left-0 bg-green-400" style={{ width: `${Player1.current.health}%` }}>

                </div>
            </div>
            <div className="fixed w-[45%] h-[25px] bg-red-500 right-[2%] top-[25px] rounded-sm overflow-hidden">
                <div className="h-full absolute right-0 bg-green-400" style={{ width: `${Player2.current.health}%` }}>

                </div>
            </div>
            <div className="bg-zinc-50 fixed h-[50px] w-full bottom-[0px] ">
            </div>
            {/* <img src={localStorage.getItem("imgUrl")} alt="arena Image" className="flex" /> */}
        </div>
    );

}

export default Local

