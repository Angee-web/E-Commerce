import { useEffect, useState } from "react";
import styles from "./Style.module.css";

interface Product {
  _id: string;
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
}

function FetchProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/getProducts")
      .then((response) => response.json())
      .then((data: { data: Product[] }) => {
        setProducts(data.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className={styles.products}>
      <p className={styles.tPrice}>Total Price: $0</p>
      <div className={styles.cards}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className={styles.image}
            />
            <p className={styles.productName}>{product.name}</p>
            <p className={styles.productDes}>{product.description}</p>
            <p className={styles.price}>${product.price}</p>
            <div className={styles.quantitySelector}>
              <span className={styles.circled}>+</span>
              <span className={styles.quantity}>0</span>
              <span className={styles.circled}>-</span>
            </div>
            <div className={styles.deleteIcons}>
              <img
                className={styles.del}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yIdJ9GxAbEpmTwOV2GbhgX_-2-mGOpZKOg&s"
                alt="Delete Icon 1"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchProducts;
