export default function Cart() {
    return (
        <div className="m-12 overflow-x-hidden font-[Raleway]">
            <h1 className="text-5xl font-bold">My Cart</h1>
            <br />
            <div className="flex mb-2">
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Cart image" width={120} height={160} />
                <div className="flex flex-col justify-between ml-4 py-6">
                    <div>
                        <h2 className="font-medium text-lg w-4/5">Product sdfg sdfghds sfd Title lorem ipsum kemana kesum kjgckhgc kghcjhgc</h2>
                        <p className='bg-stone-200 px-2 py-0 h-fit w-fit text-sm text-gray-700'>Category</p>
                    </div>
                    <div>
                        <button className="bg-black text-white px-2 w-8 h-8 text-2xl">-</button>
                        <span className="px-4">1</span>
                        <button className="bg-black text-white px-2 w-8 h-8 text-2xl">+</button>
                    </div>
                </div>
                <div className="flex flex-col justify-between ml-4 py-6">
                    <button>x</button>
                    <p className="font-bold text-xl">$ 9.00</p>
                </div>
                <hr className="border-x border-solid border-black" />
            </div>
        </div>
    )
}