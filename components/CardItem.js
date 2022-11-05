import { BsCartPlus, BsStar } from "react-icons/bs";

export default function CardItem({ dataProduct }) {
  return (
    <article className="grid border content-between max-h-fit border-solid border-black ml-[-1px] mb-[-1px] bg-stone-50 px-6 py-4">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="w-auto font-medium pr-8">{dataProduct?.title}</p>
          <p className="bg-stone-200 px-2 py-0 h-fit w-fit text-sm text-gray-700">
            {dataProduct?.category}
          </p>
        </div>
        <p className="flex bg-slate-300 px-2 py-0 h-fit w-fit">{`$${dataProduct?.price}`}</p>
      </div>
      <img
        className="justify-self-center px-10 w-4/5 my-4"
        src={dataProduct?.image}
        alt="random image"
      />
      <div className="flex bottom-0 justify-between px-2">
        <div className="grid place-items-center">
          <span className="absolute pt-1 text-sm font-medium">
            {dataProduct?.rating.rate.toFixed()}
          </span>
          <BsStar size={30} />
        </div>
        <BsCartPlus className="self-center" size={30} />
      </div>
    </article>
  );
}
