import React, { useEffect, useState } from "react";

function AllProducts2() {
  const [products, setProducts] = useState([]);
  const main = {
    display: "flex",
    alignItems: "center",
    height: "150vh",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginBottom: "20px",
  };

  const div = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "87vh",
    padding: "10px 0px",
    width: "20vw",
    // border: "1px solid black",
  };

  const img = {
    height: "250px",
    padding: "10px 0px",
    width: "250px",
    // border: "1px solid black",
  };

  useEffect(() => {
    const api = "https://fakestoreapi.com/products/";

    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="h-[435vh] ">
      <main id="main" style={main}>
        {products.map((product) => (
          <div key={product.id} style={div}>
            <img src={product.image} alt="Product" style={img} />
            <strong>{product.price}</strong>
            <span className="text-xs ">{product.description}</span>
          </div>
        ))}
      </main>
    </div>
  );
}

export default AllProducts2;
