'use client'
import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import Login from "./auth/Login"
import Register from "./auth/Register"
import { useGeneralStore } from "../stores/general"

 export default function AuthOverlay(){

    let { setIsLoginOpen } = useGeneralStore()
    let [isRegister, setIsRegister] = useState<boolean>(false)

    return (
        <>
            <div
                id="AuthOverlay"
                className="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50"
            >
                <div className="relative bg-white  w-full max-w-[470px] h-[90%] p-4 rounded-lg">
                    <div className="w-full flex justify-end">
                        <button
                            onClick={ () => setIsLoginOpen(false)}
                            className="p-1.5 rounded-full bg--100"
                        >
                            <AiOutlineClose size="26"/>
                        </button>
                    </div>

                    {isRegister ? <Register /> : <Login />}

                    <div className="absolute flex items-center justify-center py-t left-0 bottom-0 border-t w-full">
                        <span className="text-[14px] text--600">Don't have an account ?</span>

                        <button
                            onClick={ () => setIsRegister(isRegister = !isRegister)}
                            className="text-[14px] text-[linear-gradient(to right,#94bc37,#12b9ca)] font-semibold pl-1"
                        >
                            <span>{!isRegister ? 'Register' : 'log in'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
 }