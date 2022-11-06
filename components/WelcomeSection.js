import Marquee from "react-fast-marquee";

export default function Welcome() {
  return (
    <section className="flex flex-col h-screen w-full">
      {/* create marquee rectangle in bottom screen */}
      <div className="flex absolute bg-black h-14 !w-screen items-center justify-center animate-marquee">
        <Marquee
          pauseOnHover
          gradient={false}
          speed={50}
          className={
            "justify-around text-white text-xl font-semibold tracking-wider"
          }
        >
          <p className="px-2">💻️</p>
          <p className="px-5">Final Project 2 for Hacktiv8</p>
          <p className="px-2">🧑‍💻</p>
          <p className="px-2">💻️</p>
          <p className="px-5">Build Ecommerce web app</p>
          <p className="px-2">🧑‍💻</p>
          <p className="px-2">💻️</p>
          <p className="px-5">Using Fakestoreapi</p>
          <p className="px-2">🧑‍💻</p>
        </Marquee>
      </div>
      <div className="flex flex-col my-auto items-center">
        <h1 className="text-9xl font-extrabold">Welcome to Harimart</h1>
        <h2 className="text-2xl font-light">More you buy more we sell</h2>
        {/*Todo:  animation bottom*/}
      </div>
    </section>
  );
}
