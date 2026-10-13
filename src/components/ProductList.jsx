
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {

  return products.length === 0 ? (
    <div className="status">
      <p>商品がありません。</p>
    </div>
  ) : (
    <div className="product-list">
      {/* TODO:商品情報を１つずつ取り出し小コンポーネントに渡す*/}
    </div>
  );
}
