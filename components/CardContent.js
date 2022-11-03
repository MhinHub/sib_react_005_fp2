import { BsCartPlus, BsStar } from 'react-icons/bs';

export default function CardContent() {
    return (
        <article className="grid border border-solid border-black ml-[-1px] mb-[-1px] bg-stone-50 px-6 py-4">
            <div className="flex justify-between">
                <h2 className="w-1/2">Product Title lorem ipsum kemana kesum kjgckhgc kghcjhgc</h2>
                <p className='bg-slate-300 px-2 py-0 h-fit'>$ 9.00</p>
            </div>
            <img className='justify-self-center px-10' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="random image" width={400} height={500} />
            <div className="flex justify-between px-2">
                <div className="grid place-items-center">
                    <span className="absolute pt-1 text-sm font-medium">5</span>
                    <BsStar size={30} />
                </div>
                <BsCartPlus size={30} />
            </div>
        </article>
    )
}