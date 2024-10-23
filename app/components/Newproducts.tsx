"use client"

import React from "react";

import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/womanwatch.avif",
    title: "watch",
    desc: "Istalish watch",
    rating: 6,
    price: "30.00",
  },
  {
    img: "/sunglassess.jpg",
    title: "glassess",
    desc: "sunglassess",
    rating: 5,
    price: "25.00",
  },
  {
    img: "/partyshoes.jpg",
    title: "party wear",
    desc: "woman's party wear shoes",
    rating: 3,
    price: "35.00",
  },
  {
    img: "/manjacket.jpeg",
    title: "Jacket",
    desc: "Men Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/gentle-man.jpg",
    title: "perfume",
    desc: "Gentlemen givenchy perfume",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/summer.jpeg",
    title: "shirt",
    desc: "Man's summer cllection shirt",
    rating: 4,
    price: "45.00",
  },
];

const Newproducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2x1 pb-4">New Products</h2>

        <div
          className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
        lg:grid-col-3 x1:grid-cols-4 gap-10 x1:gap-x-10 x1:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newproducts;
