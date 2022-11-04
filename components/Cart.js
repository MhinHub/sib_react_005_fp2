import { GrTrash } from 'react-icons/gr'

export default function Cart() {
    return (
        <>
            <input type="checkbox" id="cart-modal" className="modal-toggle" />
            <label className="modal" htmlFor="cart-modal">
                <section className="modal-box m-12 overflow-x-hidden font-[Raleway] w-11/12 max-w-5xl flex flex-col">
                    <h1 className="text-5xl font-bold justify-self-start mb-5">My Cart</h1>
                    <br />
                    <div className="flex flex-col">
                        {/* Items */}
                        <div className="flex mb-4 pb-4 justify-center border-b border-solid border-black">
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
                            <div className="flex flex-col justify-between items-end ml-4 py-6">
                                <button>
                                    <GrTrash size={20} />
                                </button>
                                <p className="font-bold text-xl">$ 9.00</p>
                            </div>
                        </div>

                        <div className="flex mb-4 pb-4 justify-center border-b border-solid border-black">
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
                        </div>
                        <div className="flex mb-4 pb-4 justify-center border-b border-solid border-black">
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
                        </div>

                    </div>
                </section>
            </label>
        </>
    )
}