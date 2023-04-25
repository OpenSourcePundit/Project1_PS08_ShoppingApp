import { React } from "react";
import { fakeFetch } from "../FakeFetch";
import { useEffect, useState } from "react";

export default function ProductListing() {
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
        {ProductData.map(({ id, name, description, price }) => {
          return (
            <li key={id}>
              <h2>{name}</h2>
              <p>{description}</p>
              <h3>Price: {price}</h3>
              <button>VISIT ITEM</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
