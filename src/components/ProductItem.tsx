import type { ProductType } from "../Types/ProductTypes";

interface ProductItemProps {
  product: ProductType;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="h-110 w-80 bg-white shadow-2xl rounded-2xl">
      <img
        className="h-60 w-full object-cover rounded-2xl"
        src={product.images}
        alt="Description"
      />
      <h1 className="font-bold text-2xl mt-4">{product.title}</h1>
      <p>{product.category}</p>
      <div className="flex justify-between">
        <p>Price: {product.price} </p>
        <p>Rating: {product.rating} </p>
      </div>
    </div>
  );
};

export default ProductItem;
