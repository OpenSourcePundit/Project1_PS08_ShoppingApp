import { useContext } from "react";
import { MainContext } from "..";

export default function Cart() {
  const { CartData, removeFrom } = useContext(MainContext);
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul style={{ textAlign: "start", listStyle: "none" }}>
        {CartData.map((product) => {
          const { id, name, description, price } = product;

          return (
            <li key={id}>
              <h2>{name}</h2>
              <p>{description}</p>
              <h3>Price: {price}</h3>
              <button onClick={() => {}}>REMOVE FROM CART</button>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
