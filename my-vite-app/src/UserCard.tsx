import React from 'react';

interface User {
    avatar: string;
    name: string;
    email: string;
    phone: string;
    address: string;
}

interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <div style={styles.card}>
            <img src={user.avatar} alt="Avatar" style={styles.avatar} />
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    card: {
        width: 300,
        border: '1px solid #ccc',
        padding: 16,
        borderRadius: 8,
        boxShadow: '0 0 8px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
    },
    avatar: {
        width: 100,
        borderRadius: '50%',
    },
};

export default UserCard;
