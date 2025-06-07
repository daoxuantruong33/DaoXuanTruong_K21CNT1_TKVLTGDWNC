import React from 'react';
import UserCard from './UserCard';
import ProductCard from './ProductCard';
import Counter from './Counter';
import RegisterForm from './RegisterForm';

const Home: React.FC = () => {
    const user = {
        avatar: 'https://pos.nvncdn.com/492284-9176/ps/20241110_9edosBcfN5.jpeg',
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@example.com',
        phone: '0123 456 789',
        address: '123 Đường ABC, Quận 1, TP.HCM',
    };

    const product = {
        image: 'https://bizweb.dktcdn.net/100/287/440/products/ao-thun-nam-form-rong-tay-lo-mau-den-18.jpg?v=1618754798253',
        name: 'Áo thun nam',
        description: 'Áo thun cotton mềm mại, thoáng mát.',
        price: 199000,
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Trang Chủ</h1>
            <div style={{ display: 'flex', gap: 24, marginBottom: 40 }}>
                <UserCard user={user} />
                <ProductCard product={product} />
            </div>

            <Counter />
            <hr style={{ margin: '40px 0' }} />
            <RegisterForm />
        </div>
    );
};

export default Home;
