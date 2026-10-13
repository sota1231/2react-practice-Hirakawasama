export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
        />
      </div>

      <div className="product-card-body">
        <span className="product-card-category">{product.category}</span>

        <h2>{product.title}</h2>

        <p className="product-card-description">{product.description}</p>

        <p className="product-card-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
