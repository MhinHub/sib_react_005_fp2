import React from "react";
import Image from "next/image";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export default function AboutDev({
  name,
  img,
  code,
  univ,
  linkGh,
  linkIg,
  linkLd,
}) {
  return (
    <>
      <div className="grid place-items-center place-self-center p-5">
        <div className="avatar online">
          <div className="w-24 h-24 p-px mask mask-squircle bg-base-content bg-opacity-10">
            <Image
              src={img}
              width={200}
              height={200}
              alt="Avatar"
              className="mask mask-squircle w-11 h-11"
            />
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg font-extrabold">{name}</div>
          <div className="my-3 text-sm text-base-content text-opacity-60">
            <p>RCTN-005-{code}</p>
            <p>{univ}</p>
            <br />
          </div>
        </div>
        <div className="flex mt-2 justify-center gap-x-8">
          <a href={linkGh} target="_blank">
            <FaGithubSquare size={30} />
          </a>
          <a href={linkIg} target="_blank">
            <FaInstagramSquare size={30} />
          </a>
          <a href={linkLd} target="_blank">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </>
  );
}
