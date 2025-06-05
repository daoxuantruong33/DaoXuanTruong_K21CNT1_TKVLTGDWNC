import React, { useState } from 'react';

interface Product {
    image: string;
    name: string;
    description: string;
    price: number;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(1); // Khởi tạo số lượng mặc định là 1

    const increase = () => setQuantity(prev => prev + 1);
    const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1)); // Không giảm dưới 1

    return (
        <div style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <button onClick={decrease} style={styles.qtyButton}>-</button>
                <span>{quantity}</span>
                <button onClick={increase} style={styles.qtyButton}>+</button>
            </div>

            <button style={styles.button}>Add to cart</button>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    card: {
        width: 280,
        border: '1px solid #ddd',
        padding: 12,
        borderRadius: 6,
        fontFamily: 'Arial, sans-serif',
    },
    image: {
        width: '100%',
        height: 180,
        objectFit: 'cover',
        borderRadius: 4,
    },
    button: {
        marginTop: 8,
        padding: '8px 16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
    },
    qtyButton: {
        padding: '4px 12px',
        backgroundColor: '#eee',
        border: '1px solid #ccc',
        borderRadius: 4,
        cursor: 'pointer',
        userSelect: 'none',
    },
};

export default ProductCard;
