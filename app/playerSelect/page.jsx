'use client';

import { useRouter } from "next/router";
import React from "react";
import { useRef, useState, useEffect } from "react";


const Local = () => {

    const P1Details = useRef({
        selectionIndex: 0,
        selected: false
    });
    const P2Details = useRef({
        selectionIndex: 4,
        selected: false
    });

    function handleKeyDown(e) {
        if (e.keyCode == 87) {
            P1Details.current.selectionIndex = P1Details.prev.selectionIndex - 5
        }
        if (e.keyCode == 83) {
            P1Details.current.selectionIndex = P1Details.prev.selectionIndex + 5
        }
        if (e.keyCode == 65) {
            P1Details.current.selectionIndex = P1Details.prev.selectionIndex - 1
        }
        if (e.keyCode == 68) {
            P1Details.current.selectionIndex = P1Details.prev.selectionIndex + 1
        }

    }

    useEffect(() => {
        addEventListener('onkeydown', (e) => { handleKeyDown(e) })

        return () => {
            removeEventListener('onkeydown', (e) => { handleKeyDown(e) })
        }
    })




    const Characters = useRef(
        [
            {
                name: "Character1",
                image: "imageUrl1"
            },
            {
                name: "Character2",
                image: "imageUrl2"
            },
            {
                name: "Coming Soon",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                image: "Soon"
            },

            {
                name: "Coming Soon",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                image: "Soon"
            },

            {
                name: "Coming Soon",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                image: "Soon"
            },
            {
                name: "Coming Soon",
                image: "Soon"
            },

        ]
    )

    return (
        <div className="bg-stone-950 w-screen h-screen flex flex-col">
            <div className="w-[70%] h-[50%] bg-red-500  m-auto mt-[50px] flex-wrap flex ">
                {
                    Characters.current.map((c, index) => {
                        if (P1Details.current.selectionIndex == index) {
                            console.log(index)
                            return (<div key={index} className={`bg-blue-500 h-[33%] w-[20%] flex items-center justify-center`}  > {c.name} </div>)
                        }
                        else if (P2Details.current.selectionIndex == index) {
                            console.log('found p2')
                            return (<div key={index} className={`bg-green-500 h-[33%] w-[20%] flex items-center justify-center`}  > {c.name} </div>)
                        }
                        else {
                            return (<div key={index} className={`bg-red-500 h-[33%] w-[20%] flex items-center justify-center`}  > {c.name} </div>)
                        }
                    })
                }
            </div>

            <div className="bg-zinc-500 fixed w-[30%] h-[40%] left-0 bottom-0 "></div>
            <div className="bg-zinc-500 fixed w-[30%] h-[40%] right-0 bottom-0 "></div>
        </div>
    );

}

export default Local