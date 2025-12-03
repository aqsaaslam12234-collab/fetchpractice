import type { ProductType } from "../Types/ProductTypes"
import ProductItem from "./ProductItem";

interface ProductListProps{
    items: ProductType[];
}

const ProductList = ({ items }: ProductListProps) => {
  return (
    <div className="flex gap-3 flex-wrap justify-around">
        {items.map((item) =>(

      <ProductItem key={item.id} product={item} />
        ) )}
      
    </div>
  )
}

export default ProductList
