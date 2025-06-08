import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import ProductDetail from './ProductDetail';
import StudentPage from './StudentPage'; // 👈 thêm dòng này
import './index.css';

export const App = () => (
  <BrowserRouter>
    <nav style={{ padding: 12, backgroundColor: '#eee' }}>
      <Link to="/" style={{ marginRight: 12 }}>Trang Chủ</Link>
      <Link to="/about" style={{ marginRight: 12 }}>Giới Thiệu</Link>
      <Link to="/product/123" style={{ marginRight: 12 }}>Chi Tiết Sản Phẩm</Link>
      <Link to="/students">Quản Lý Sinh Viên</Link> {/* 👈 thêm menu này */}
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/students" element={<StudentPage />} /> {/* 👈 thêm route này */}
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
