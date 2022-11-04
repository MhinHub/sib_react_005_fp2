export default function Welcome() {
    return (
        <section className="flex flex-col h-screen w-full">
            <div className="flex flex-col my-auto items-center">
                <h1 className="text-9xl font-extrabold">Welcome to Harimart</h1>
                <h2 className="text-2xl font-light">More you buy more we sell</h2>
                {/*Todo:  animation bottom*/}
            </div>
            {/* create marquee rectangle in bottom screen */}
            <div className="flex absolute bg-black h-14 !w-screen items-center animate-marquee">
                <p className="text-white text-center text-2xl font-light animate-marquee">Discounts up to 50% off --</p>
                <p className="text-white text-center text-2xl font-light animate-marquee">Discounts up to 50% off --</p>
                <p className="text-white text-center text-2xl font-light animate-marquee">Discounts up to 50% off </p>
            </div>
        </section>
    )
}