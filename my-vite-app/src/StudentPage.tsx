import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentForm from './StudentForm';

interface Student {
  id: number;
  name: string;
  status: 'active' | 'inactive';
}

const StudentPage: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [filtered, setFiltered] = useState<Student[]>([]);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [editingStudent, setEditingStudent] = useState<Student | null>(null); // state lưu sinh viên sửa

  const fetchStudents = () => {
    axios.get('http://localhost:3001/students')
      .then(res => {
        setStudents(res.data);
        setFiltered(res.data);
      });
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    let result = [...students];
    if (search) {
      result = result.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (filterStatus !== 'all') {
      result = result.filter(s => s.status === filterStatus);
    }
    setFiltered(result);
  }, [search, filterStatus, students]);

  const handleDelete = (id: number) => {
    if (confirm('Bạn có chắc muốn xóa sinh viên này?')) {
      axios.delete(`http://localhost:3001/students/${id}`).then(() => {
        setStudents(prev => prev.filter(s => s.id !== id));
      });
    }
  };

  const handleEditClick = (student: Student) => {
    setEditingStudent(student);
  };

  const handleFormSuccess = () => {
    setEditingStudent(null); // reset form về chế độ thêm mới sau khi sửa xong
    fetchStudents();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Quản lý sinh viên</h2>

      {/* Form thêm / sửa sinh viên */}
      <StudentForm
        onSuccess={handleFormSuccess}
        editingStudent={editingStudent}
        onCancel={() => setEditingStudent(null)}
      />

      {/* Tìm kiếm & Lọc */}
      <div style={{ marginBottom: 16 }}>
        <input
          placeholder="Tìm kiếm theo tên..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ marginRight: 8, padding: 6 }}
        />
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
          <option value="all">Tất cả</option>
          <option value="active">Hoạt động</option>
          <option value="inactive">Không hoạt động</option>
        </select>
      </div>

      {/* Bảng dữ liệu */}
      <table border={1} cellPadding={8} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ tên</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.status === 'active' ? 'Hoạt động' : 'Không hoạt động'}</td>
              <td>
                <button onClick={() => handleEditClick(student)} style={{ marginRight: 8 }}>Sửa</button>
                <button onClick={() => handleDelete(student.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentPage;
