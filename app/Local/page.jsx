'use client';

import React, { useEffect } from "react";
import { useRef, useState } from "react";




const Local = () => {

    const imgUrlRef = useRef("")
    useEffect(() => {
        imgUrlRef.current = localStorage.getItem("imgUrl")
    }, [])


    return (
        <div className="bg-stone-950 w-screen h-screen object-cover flex">
            <div className="bg-zinc-50 fixed h-[50px] w-full bottom-[0px] ">
            </div>
            <img src={localStorage.getItem("imgUrl")} alt="arena Image" className="flex" />

        </div>
    );

}

export default Local

