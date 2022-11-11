import React, { useState, useEffect } from "react";
import { auth } from "../../pages/api";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation"; // <-- this is the new import nextjs13 beta
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  const authenticate = JSON.parse(localStorage.getItem("auth"));

  const isAdmin = authenticate && authenticate.role === "admin";
  const isUser = authenticate && authenticate.role === "user";

  // console.log("authenticate: ", authenticate);
  // console.log("authenticate role ", authenticate.role);

  const [username, setEmail] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const [isAuth, setIsAuth] = useState(authenticate);

  const [welcome, setWelcome] = useState("");

  useEffect(() => {
    isAdmin ? setWelcome("Admin") : setWelcome("User");
  }, [authenticate]);

  // useEffect(() => {
  //     if (authenticate) {
  //         authenticate.role === "user" ? router.push("/") : router.push("/admin");
  //     }
  // }, [email, password])

  function handleSubmit(e) {
    e.preventDefault();
    if (username === "admin@hashop.id" && password === "admin123") {
      const auth = {
        token: "token-admin",
        role: "admin",
      };
      localStorage.setItem("auth", JSON.stringify(auth));
      router.push("/#home");
    } else {
      auth({ username: username, password: password })
        .then((res) => {
          const auth = {
            token: res.data.token,
            role: "user",
          };
          localStorage.setItem("auth", JSON.stringify(auth));
          router.push("/#home");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
    setEmail("");
    setPassword("");
  }

  function handleLogout() {
    localStorage.removeItem("auth");
    setIsAuth(!isAuth);
    router.refresh();
    // router.push("/#home");
  }

  return (
    <>
      <input type="checkbox" id="login-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <div className="flex flex-col items-center justify-center h-fit">
            <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 bg-white border border-gray-900 rounded-none shadow-md sm:px-10">
              {!authenticate && (
                <>
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-100">
                    <svg
                      className="w-6 h-6 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </div>
                  <h1 className="text-xl font-semibold text-center text-black">
                    Sign in to your account
                  </h1>
                  <form
                    className="flex flex-col w-full mt-4"
                    onSubmit={handleSubmit}
                  >
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-none focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        placeholder="Email/Username"
                        value={username}
                        onChange={(e) => setEmail(e.target.value)}
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
                  <Link
                    href="https://fakestoreapi.com/users"
                    className="underline text-sm text-gray-600 hover:text-gray-900 my-4"
                    target={"_blank"}
                  >
                    As user use email and password from this link
                  </Link>
                  <p>Or</p>
                  <p className="flex flex-col justify-start text-sm">
                    As admin use
                    <span>email: admin@hashop.id</span>
                    <span>password: admin123</span>
                  </p>
                </>
              )}
              {authenticate && (
                <>
                  <h1 className="text-xl font-semibold text-center text-black">
                    Welcome back {welcome}
                  </h1>
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-black border border-transparent rounded-none hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                  <label
                    htmlFor="login-modal"
                    className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-red-600 border cursor-pointer border-transparent rounded-none hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <span className="btn-text">Cancel</span>
                  </label>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
