import { Formik, Form, Field, ErrorMessage } from 'formik';
import type { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

interface Student {
    id: number;
    name: string;
    status: 'active' | 'inactive';
}

interface Props {
    onSuccess: () => void;
    editingStudent: Student | null;
    onCancel: () => void;
}

interface StudentFormValues {
    name: string;
    status: 'active' | 'inactive';
}

const validationSchema = Yup.object({
    name: Yup.string().required('Tên không được để trống'),
    status: Yup.string()
        .oneOf(['active', 'inactive'], 'Giá trị không hợp lệ')
        .required('Trạng thái không được để trống'),
});

const StudentForm: React.FC<Props> = ({ onSuccess, editingStudent, onCancel }) => {
    // Giá trị khởi tạo sẽ thay đổi theo editingStudent
    const initialValues: StudentFormValues = {
        name: editingStudent ? editingStudent.name : '',
        status: editingStudent ? editingStudent.status : 'active',
    };

    const handleSubmit = (
        values: StudentFormValues,
        { resetForm }: FormikHelpers<StudentFormValues>
    ) => {
        if (editingStudent) {
            // PUT cập nhật
            axios
                .put(`http://localhost:3001/students/${editingStudent.id}`, values)
                .then(() => {
                    resetForm();
                    onSuccess();
                });
        } else {
            // POST thêm mới
            axios.post('http://localhost:3001/students', values).then(() => {
                resetForm();
                onSuccess();
            });
        }
    };

    return (
        <div style={{ marginBottom: 20 }}>
            <h3>{editingStudent ? 'Sửa thông tin sinh viên' : 'Thêm mới sinh viên'}</h3>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <label>Họ tên:</label><br />
                        <Field name="name" placeholder="Tên sinh viên" />
                        <ErrorMessage name="name" render={msg => <div style={{ color: 'red' }}>{msg}</div>} />
                    </div>
                    <div>
                        <label>Trạng thái:</label><br />
                        <Field as="select" name="status">
                            <option value="active">Hoạt động</option>
                            <option value="inactive">Không hoạt động</option>
                        </Field>
                    </div>
                    <button type="submit" style={{ marginRight: 8 }}>
                        {editingStudent ? 'Cập nhật' : 'Thêm'}
                    </button>
                    {editingStudent && (
                        <button type="button" onClick={onCancel}>
                            Hủy
                        </button>
                    )}
                </Form>
            </Formik>
        </div>
    );
};

export default StudentForm;
