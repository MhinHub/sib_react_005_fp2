import { useSelector, useDispatch } from "react-redux";
import { initiateProducts } from "../context/products-slice";
import { useState, useEffect } from "react";
import Navbar from "../components/Nav";
import Image from "next/image";
import { SiHashnode } from "react-icons/si";
import Layout from "../components/Layout";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import CardSkeleton from "../components/CardSkeleton";

const CardItem = dynamic(() => import("../components/CardItem"), {
  suspense: true,
});

const categories = [
  {
    id: 1,
    name: "men's clothing",
    image: "/static/man-cloth.png",
  },
  {
    id: 2,
    name: "women's clothing",
    image: "/static/woman-cloth.png",
  },
  {
    id: 3,
    name: "jewelery",
    image: "/static/jewelery.png",
  },
  {
    id: 4,
    name: "electronics",
    image: "/static/electronic.png",
  },
];

export default function Products() {
  const dispatch = useDispatch();
  const { firstRender, products } = useSelector((state) => state.data);
  if (firstRender) dispatch(initiateProducts(products));

  const [category, setCategory] = useState("all");
  const [product, setProduct] = useState(products);

  const [imageCategory, setImageCategory] = useState("all");

  const uniqueCategory = [...new Set(products.map((item) => item.category))]; // unique category by products

  useEffect(() => {
    const image = categories.find((item) => item.name === category);
    image ? setImageCategory(image?.image) : "all";
  }, [category]);

  // console.log("imageCategory", imageCategory);

  // filter product by category
  useEffect(() => {
    if (category === "all") {
      setProduct(products);
    } else {
      const filterProduct = products.filter(
        (item) => item.category === category
      );
      setProduct(filterProduct);
    }
  }, [category, products]);

  // console.log('category by value', category);
  // console.log("product ", product);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Layout title="Products">
      <div className="bg-image-linear-gradient-v w-full">
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
              value={category}
              onChange={handleCategory}
              className="select select-ghost w-fit max-w-xs underline underline-offset-2 text-base decoration-solid"
            >
              <option value="all">All</option>
              {uniqueCategory.map((category, id) => (
                <option key={id} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-row flex-wrap justify-center">
            <span>Sort By:</span>
            <select className="select select-ghost w-fit max-w-xs underline underline-offset-2 text-base decoration-solid">
              <option>Sort by</option>
              <option>Price</option>
              <option>Popularity</option>
              <option>Rating</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-screen pr-px lg:pr-0 lg:-mr-px my-8">
        {product.map((item, id) => (
          <Suspense key={id} fallback={<CardSkeleton />}>
            <CardItem key={id} dataProduct={item} />
          </Suspense>
        ))}
      </div>
    </Layout>
  );
}
