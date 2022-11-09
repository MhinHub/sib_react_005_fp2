import { useSelector, useDispatch } from "react-redux";
import { initiateProducts } from "../context/products-slice";
import CardItem from "../components/CardItem";
import { categories } from "../components/Categories";
import { useState, useEffect } from "react";
import Navbar from "../components/Nav";
import Image from "next/image";
import { SiHashnode } from "react-icons/si";
import Layout from "../components/Layout";


export default function Products() {
  const dispatch = useDispatch();
  const { firstRender, products } = useSelector((state) => state.data);
  if (firstRender) dispatch(initiateProducts(products));

  const [value, setvalue] = useState("all");

  const [imageCategory, setImageCategory] = useState("");

  // get image value from category array
  useEffect(() => {
    const image = categories.find((item) => item.name === value);
    if (image) {
      setImageCategory(image.image);
    } else {
      setImageCategory("all");
    }
  }, [value]);

  // console.log("imageCategory", imageCategory);

  return (
    <Layout title="Products">
      <div className="bg-image-linear-gradient-v">
      <Navbar />
      {imageCategory === "all" ? (
        <p className="mx-auto my-14 w-40 h-40 ">
          <SiHashnode size={160} />
        </p>
      ) : (
        <Image
          className="mx-auto my-14 w-40"
          src={imageCategory}
          alt="Category Products"
          width={300}
          height={300}
        />
      )}
      <div className="flex justify-between my-5 mx-4 p-4 border-t border-solid border-black">
        <div className="flex-row flex-wrap justify-center">
          <span>Category:</span>
          <select
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            className="select select-ghost w-fit max-w-xs underline underline-offset-4 text-base decoration-solid"
          >
            <option value="all">All</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))}
          </select>
        </div>

        <div className="flex-row flex-wrap justify-center">
          <span>Sort By:</span>
          <select className="select select-ghost w-32 max-w-xs underline underline-offset-4 text-base decoration-solid">
            <option>Sort by</option>
            <option>Price</option>
            <option>Popularity</option>
            <option>Rating</option>
          </select>
        </div>
        </div>

      </div>

      <div className="grid grid-cols-3 -mr-px mb-8">
        {products.map((product, id) => (
          <CardItem key={id} dataProduct={product} />
        ))}
      </div>
    </Layout>
  );
}
