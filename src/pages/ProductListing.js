import { React, useEffect, useState, useContext } from "react";
import { fakeFetch } from "../FakeFetch";
import { MainContext } from "..";

export default function ProductListing() {
  const { CartData, addTo } = useContext(MainContext);
  const [ProductData, setProduct] = useState([]);
  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/products");
      if (response.status === 200) {
        setProduct(response.data.products);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>PRODUCT LISTING PAGE</h1>
      <ul style={{ textAlign: "start", listStyle: "none" }}>
        {ProductData.map((product) => {
          const { id, name, description, price } = product;

          return (
            <li key={id}>
              <h2>{name}</h2>
              <p>{description}</p>
              <h3>Price: {price}</h3>
              <a href="">View Details</a>
              <button
                style={{ alignItems: "flex-end" }}
                onClick={() => addTo(product, "cart")}
              >
                ADD TO CART{" "}
              </button>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
