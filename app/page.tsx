'use client';
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-screen h-screen bg-zinc-700 flex">
      <div>
        <div onClick={() => { router.push("/#") }}>
          King of Lighters
        </div>
        <div onClick={() => { router.push("/Local") }}>
          Local Multiplayer
        </div>
        <div onClick={() => { router.push("/Online") }}>
          Online Multiplayer
        </div>
        <div onClick={() => { router.push("/Single") }}>
          Singleplayer
        </div>
        <div onClick={() => { router.push("/Practice") }}>
          Practice Mode
        </div>
      </div>
    </div>
  );
}
