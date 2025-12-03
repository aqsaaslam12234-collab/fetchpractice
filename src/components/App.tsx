import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import type { ProductType } from "../Types/ProductTypes";

const App = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };
    fetchData();
  }, []);
  return (
    <div>
      <ProductList items={products} />
    </div>
  );
};

export default App;
