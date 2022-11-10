import React, { useState, useEffect } from 'react'
import { auth } from '../../pages/api'
import { useRouter } from 'next/router'

export default function Login() {
    const router = useRouter()

    const authenticate = JSON.parse(localStorage.getItem("auth"))

    // console.log("authenticate: ", authenticate);
    // console.log("authenticate role ", authenticate.role);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (authenticate) {
            authenticate.role === "user" ? router.push("/") : router.push("/admin");
        }
    }, [username, password])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === "admin@haffmart.id" && password === "admin123") {
            const auth = {
                token: "token-admin",
                role: "admin",
            }
            localStorage.setItem("auth", JSON.stringify(auth));
            router.push("/admin");
        } else {
            auth({ username, password })
                .then((res) => {
                    const auth = {
                        token: res.data.token,
                        role: "user",
                    }
                    localStorage.setItem("auth", JSON.stringify(auth));
                    router.push("/");
                }).catch((err) => {
                    alert(err.response.data.message);
                });
        }
        setUsername("");
        setPassword("");
    }

    return (
        <>
            <input type="checkbox" id="login-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <div className="flex flex-col items-center justify-center h-fit">
                        <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 bg-white border border-gray-900 rounded-none shadow-md sm:px-10">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-100">
                                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </div>
                            <h1 className="text-xl font-semibold text-center text-black">Sign in to your account</h1>
                            <form className="flex flex-col w-full mt-4" onSubmit={handleSubmit}>
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-none focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                        placeholder="Username/Email"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="relative mt-4">
                                    <input
                                        type="password"
                                        className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-none focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-black border border-transparent rounded-none hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                                >
                                    Sign in
                                </button>
                                <label
                                    htmlFor="login-modal"
                                    className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-red-600 border cursor-pointer border-transparent rounded-none hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    <span className="btn-text">Cancel</span>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
