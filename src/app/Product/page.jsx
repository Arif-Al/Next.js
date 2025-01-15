"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, Card, Grid, Typography } from "@mui/material";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://67825c8bc51d092c3dcf32d8.mockapi.io/test"
        );
        let data = await response.json("");
        console.log(data, "datavalue");
        setProduct(data); // The API returns an array directly
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="bg-green-300 flex items-center justify-between px-5 py-3">
        {/* Header Title */}
        <h1 className="text-4xl">Header</h1>

        {/* Navigation Links */}
        <div className="hidden md:block">
          <ul className="flex space-x-3">
            <Link href="/Header" className="hover:underline">
              Home
            </Link>
            <Link href="/About" className="hover:underline">
              About
            </Link>
            <Link href="/Product" className="hover:underline">
              Product
            </Link>
            <Link href="/Service" className="hover:underline">
              Service
            </Link>
          </ul>
        </div>

        {/* Account Icon */}
        <div>
          <Link href="/SignIn">
            <AccountCircleIcon className="text-black text-2xl" />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden">
          <button
            className="text-black text-2xl focus:outline-none"
            onClick={() => setShowMenu(!showMenu)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {showMenu && (
          <div className="absolute top-16 left-0 w-full bg-green-300 z-10 shadow-md md:hidden">
            <ul className="flex flex-col space-y-2 p-4">
              <Link href="/Header" className="hover:underline">
                Home
              </Link>
              <Link href="/About" className="hover:underline">
                About
              </Link>
              <Link href="/Product" className="hover:underline">
                Product
              </Link>
              <Link href="/Service" className="hover:underline">
                Service
              </Link>
            </ul>
          </div>
        )}
      </div>

      {/* <h1 className="text-5xl">This is product page</h1> */}

      <Grid container spacing={2} className="mt-5">
        {product?.map((item) => (
          <Grid item sm={4} key={item.id}>
            <Card className="my-5">
              <div className="product-item p-4">
                {item?.image && (
                  <div className="flex justify-center mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-40 object-contain img-fluid"
                    />
                  </div>
                )}
                <Typography variant="h6" className="text-center">
                  {item?.name}
                </Typography>
                <Typography variant="body2" className="text-center">
                  Price: ${item?.price}
                </Typography>
                <Typography variant="body2" className="text-center">
                  Category: {item?.description}
                </Typography>
                <div className="flex justify-center my-3">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onAddToCart(item)}
                    className="rounded-full px-6"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Product;
