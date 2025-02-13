'use client';

import React, { useReducer, useRef, useState } from "react";



const LoginPage = () => {

    const uname = useRef("")
    const pass = useRef("")
    const [isLoading, setLoading] = useState(false)



    async function handleLogin(event) {
        event.preventDefault();
        setLoading(true)
        var reques = await fetch('http://192.168.1.198:2000/login/auth', { method: 'POST', headers: { 'Accept': '*/*', 'Content-type': 'application/json' }, body: JSON.stringify({ username: uname.current.value, password: pass.current.value }) })
        const jsd = await reques.json()
        if (jsd.status == 403) {
            uname.current.value = ""
            pass.current.value = ""
            alert("Invalid Credentials")
        }
        else {
            localStorage.setItem("token", jsd.token)
        }
        console.log(jsd)
        setLoading(false)
    }

    return (
        <div className="w-screen h-screen bg-zinc-800 ">
            <div className="m-auto">
                <form >
                    <input type="text" placeholder="username" className="absolute w-[20%] left-[40%] t-[100px]" ref={uname} />
                    <input type="password" className="absolute w-[20%] left-[40%] t-[200px]" placeholder="password" ref={pass} />
                    {
                        isLoading && (<input type="submit" className="w-[100px] bg-red-500 cursor-not-allowed" onClick={(event) => { handleLogin(event) }} />)
                    }
                    {
                        !isLoading && (<input type="submit" className="w-[100px] bg-red-500" onClick={(event) => { handleLogin(event) }} />)
                    }
                </form>
            </div>
        </div>
    )
}

export default LoginPage