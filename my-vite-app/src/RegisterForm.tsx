import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Vui lòng nhập họ tên'),
            email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
            password: Yup.string().min(6, 'Mật khẩu tối thiểu 6 ký tự').required('Vui lòng nhập mật khẩu'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Mật khẩu không khớp')
                .required('Vui lòng xác nhận mật khẩu'),
        }),
        onSubmit: (values) => {
            alert('Đăng ký thành công:\n' + JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
            <h2>Đăng ký tài khoản</h2>

            <div style={{ marginBottom: 12 }}>
                <label>Họ tên:</label><br />
                <input
                    name="name"
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ width: '100%', padding: 8 }}
                />
                {formik.touched.name && formik.errors.name && (
                    <div style={{ color: 'red' }}>{formik.errors.name}</div>
                )}
            </div>

            <div style={{ marginBottom: 12 }}>
                <label>Email:</label><br />
                <input
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ width: '100%', padding: 8 }}
                />
                {formik.touched.email && formik.errors.email && (
                    <div style={{ color: 'red' }}>{formik.errors.email}</div>
                )}
            </div>

            <div style={{ marginBottom: 12 }}>
                <label>Mật khẩu:</label><br />
                <input
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ width: '100%', padding: 8 }}
                />
                {formik.touched.password && formik.errors.password && (
                    <div style={{ color: 'red' }}>{formik.errors.password}</div>
                )}
            </div>

            <div style={{ marginBottom: 12 }}>
                <label>Xác nhận mật khẩu:</label><br />
                <input
                    name="confirmPassword"
                    type="password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ width: '100%', padding: 8 }}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <div style={{ color: 'red' }}>{formik.errors.confirmPassword}</div>
                )}
            </div>

            <button type="submit" style={{ padding: '10px 20px' }}>Đăng ký</button>
        </form>
    );
};

export default RegisterForm;
