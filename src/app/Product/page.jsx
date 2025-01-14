"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Card, Grid, Typography } from "@mui/material";

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
    <div>
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
          <div>
            <Grid container item sm={6} md={4} lg={3} spacing={2}>
              <Card>
                <div key={item.id} className="product-item p-4">
                  {" "}
                  {/* Added padding */}
                  {item?.image && (
                    <div className="flex justify-center mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-40 object-contain"
                      />
                    </div>
                  )}
                  <Typography variant="h6" className="text-center">
                    {item?.title}
                  </Typography>
                  <Typography variant="body2" className="text-center">
                    Category: {item?.category?.name}
                  </Typography>
                </div>
              </Card>
            </Grid>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
