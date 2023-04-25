import { useContext } from "react";
import { MainContext } from "..";

export default function Cart() {
  const { CartData } = useContext(MainContext);
  return <h1>this is cart</h1>;
}
