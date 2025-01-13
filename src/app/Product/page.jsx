"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";
import Image from "next/image";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json("");
        console.log(data, "datavalue");
        setProduct(data); // The API returns an array directly
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-green-300 display flex justify-between align-items-center px-5 py-3">
        <h1 className="text-4xl">Header</h1>
        <div>
          <ul className="text-center">
            <Link href="/Header">Home</Link>
            <Link href="/About" className="mx-3">
              About
            </Link>
            <Link href="/Product">Product</Link>
            <Link href="/Service" className="mx-3">
              Service
            </Link>
          </ul>
        </div>
        <div>
          <Link href="/SignIn">
            <AccountCircleIcon className="text-black" />
          </Link>
        </div>
      </div>
      <h1 className="text-5xl">This is product page</h1>

      {/* Render Products */}
      {product?.map((item) => {
        return (
          <div key={item.id} className="product-item">
            {" "}
            {/* Added unique key here */}
            <Typography variant="h6">{item?.title}</Typography>
            <Typography variant="body2">
              Category: {item?.category?.name}
            </Typography>
            <div>
              <Image
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="item image"
                width={300}
                height={300}
              />
              <Image src={item?.image} width={200} height={200} />
              
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Product;
