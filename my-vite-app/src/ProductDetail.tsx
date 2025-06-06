// src/ProductDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <h1>Chi tiết sản phẩm</h1>
            <p>Mã sản phẩm: {id}</p>
        </div>
    );
};

export default ProductDetail;
