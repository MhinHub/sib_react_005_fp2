import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import AboutDev from "../components/AboutDev";
import Marquee from "react-fast-marquee";

export default function about() {
  return (
    <Layout title={"About Dev"}>
      <Nav />
      <h1 className="text-center text-4xl font-bold my-10 underline">About</h1>
      <section className="flex flex-col h-[71vh] justify-between">
        <div className="flex flex-col">
          <h2 className="text-center text-2xl font-bold my-5">
            Developer Member of Team 1
          </h2>
          <div className="grid grid-cols-3 content-evenly place-content-evenly">
            <AboutDev
              name={"Muhammad Irfan Zidni"}
              code={"002"}
              img={"/avatar/Irfan.jpg"}
              univ={"Universitas Dian Nuswantoro"}
              linkGh={"https://github.com/irfanzidniofficial"}
              linkIg={"https://www.instagram.com/irfanzidni11/"}
              linkLd={"https://www.linkedin.com/in/irfanzidni/"}
            />
            <AboutDev
              name={"Muhaemin Iskandar"}
              code={"001"}
              img={"/avatar/Muhaemin.jpg"}
              univ={"Universitas Hasanuddin"}
              linkGh={"https://github.com/MhinHub/"}
              linkIg={"https://www.instagram.com/muhis.me/"}
              linkLd={"https://www.linkedin.com/in/muhaemin-iskandar/"}
            />
            <AboutDev
              name={"Vika Alpiana"}
              code={"003"}
              img={"/avatar/Vika.jpg"}
              univ={"Universitas Dian Nuswantoro"}
              linkGh={"https://github.com/vikaalpianaaa"}
              linkIg={"http://instagram.com/vikaalpiana"}
              linkLd={"https://www.linkedin.com/in/vika-alpiana-84084820a"}
            />
          </div>
        </div>
        <Marquee
          pauseOnHover
          gradient={false}
          speed={50}
          className={
            "py-2 text-white bg-black text-xl font-semibold justify-evenly absolute bottom-0"
          }
        >
          <p className="mx-6">Together We Grow</p>
          <p className="mx-6">Hacktiv8</p>
          <p className="mx-6">Kampus Merdeka</p>
        </Marquee>
      </section>
      <section>
        <h2 className="text-center text-2xl font-bold mb-5 mt-40">
          Project Management
        </h2>
        <div className="flex justify-center">
          <iframe
            src="https://trello.com/b/B6jRcl3z.html"
            width="80%"
            height="600"
          />
        </div>
      </section>
    </Layout>
  );
}
