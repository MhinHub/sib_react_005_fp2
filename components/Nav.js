import { BsFillCartFill } from "react-icons/bs";
import React from 'react'

function Nav() {
    return (
        <nav className="flex border-b border-black justify-between px-3 items-center">
            <div className="flex items-center">
                <span className="w-14 font-light text-7xl">#</span>
                <h1 className="font-medium text-6xl">HARIMART</h1>
            </div>
            <div className="flex items-center">
                <div className="flex justify-end mx-4">
                    <span className="absolute text-white p-px w-fit justify-items-center items-center bg-red-700 rounded-full text-xs font-semibold">99</span>
                    <BsFillCartFill size={30} />
                </div>
                <button className="h-12 w-24 bg-black text-white">Account</button>
            </div>
        </nav>
    )
}

export default Nav