"use client";
import React, { useState, useEffect } from "react";
 
// //Server side rendering exammple of data fetching
async function productList() {
  let data = await fetch("https://dummyjson.com/products")
  data = await data.json()
  return data.products
}
 
export default async function Page(){
  let products = await productList()
  //console.log(products)
 
  return (
      <div>
          <h1>Product List</h1>
          {
              products.map((item) => (
                  <div>
                      <h3>Name: {item.title}</h3>
                  </div>
              ))
          }
      </div>
  )
}
 
/*
//Fetching data through api Client side rendering
const ProductList = () => {
  const [product, setProduct] = useState([]);
 
  // usestate is used because we want to save the data in the client first and then render the data
  useEffect(() => {
    let isMounted = true; // Flag to track component mount status
 
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);
 
        if (isMounted) {
          setProduct(data.products);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error state or display an error message
      }
    };
 
    fetchData();
 
    // Cleanup function to unsubscribe or clear any resources
    return () => {
      isMounted = false; // Update mount status on component unmount
    };
  }, []);
 
  return (
    <div>
      <h1>Product List</h1>
      {product.map((item) => (
        <h3>
          Name: {item.title}, Price: {item.price}
        </h3>
      ))}
    </div>
  );
};
export default ProductList;
*/