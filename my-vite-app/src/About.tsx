// src/About.tsx
import React, { useEffect } from 'react';

const About: React.FC = () => {
    useEffect(() => {
        console.log('Trang Giới Thiệu đã được load');

        // Có thể thêm các xử lý khác ở đây, ví dụ:
        // alert('Chào mừng đến với trang Giới Thiệu');
    }, []); // Chạy 1 lần duy nhất khi component mount

    return (
        <div>
            <h1>Giới Thiệu</h1>
            <p>Chào mừng bạn đến với trang giới thiệu về ứng dụng của chúng tôi.</p>
        </div>
    );
};

export default About;
