import React from 'react'; // Import React for managing component 
import styles from './Style.module.css'; // Import CSS module for styling the component
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

// Define a type for product data
type Product = {
    id: number;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
};

// Sample product data
const products: Product[] = [
    {
        id: 1,
        imageUrl: 'https://plus.unsplash.com/premium_photo-1680373109883-47a3617e9acd?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Bag',
        description: 'Vintage Givenchy Bag',
        price: 100,
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Shoes',
        description: 'Comfortable Running Shoes',
        price: 75,
    },
    {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1456444029056-7dfaeeb83a19?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Watch',
        description: 'Elegant Gold Watch',
        price: 200,
    },
    {
        id: 4,
        imageUrl: 'https://plus.unsplash.com/premium_photo-1673757119677-6445b73a405e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Sunglasses',
        description: 'Stylish Sunglasses',
        price: 150,
    },
    {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1649867219867-3faeab653df9?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Stanley Cups',
        description: 'Temperature Retaining Flasks ',
        price: 80,
    }
    
];

const Products: React.FC = () => {
    return (
        // Product section
        <div className={styles.products}>
            {/* Total price */}
            <p className={styles.tPrice}>Total Price: $0</p>
            {/* Container for product cards */}
            <div className={styles.cards}>
                {/* Map through each of the cards */}
                {products.map((product) => (
                    <div key={product.id} className={styles.card}>
                        {/* Image */}
                        <img src={product.imageUrl} alt={product.name} className={styles.image} />
                        {/* Name */}
                        <p className={styles.productName}>{product.name}</p>
                        {/* Description */}
                        <p className={styles.productDes}>{product.description}</p>
                        {/* Price */}
                        <p className={styles.price}>${product.price}</p>
                        {/* Quantity */}
                        <div className={styles.quantitySelector}>
                            <span className={styles.circled}>+</span> 
                            <span className={styles.quantity}>0</span>
                            <span className={styles.circled}>-</span>
                        </div>
                        {/*Delete and love*/}
                        <div className={styles.icons}>
                        <MdDelete />
                        <FaHeart />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;



