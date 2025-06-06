import React, { useState } from 'react';

const Counter: React.FC = () => {
    // Khai báo state count, mặc định = 0
    const [count, setCount] = useState(0);

    // Hàm tăng count
    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Giá trị hiện tại: {count}</h2>
            <button onClick={handleIncrement}>Tăng giá trị</button>
        </div>
    );
};

export default Counter;
