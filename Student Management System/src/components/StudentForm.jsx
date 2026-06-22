import { useEffect, useState } from 'react';

const defaultMarks = { maths: 0, physics: 0, chemistry: 0, english: 0, programming: 0 };

function StudentForm({ student, onSave, onReset }) {
  const [form, setForm] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    course: '',
    semester: '',
    address: '',
    dob: '',
    present: 0,
    absent: 0,
    leave: 0,
    marks: defaultMarks,
  });

  useEffect(() => {
    if (student) {
      setForm({
        ...student,
        marks: student.marks || defaultMarks,
      });
    }
  }, [student]);

  const handleChange = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleMarkChange = (subject, value) => {
    setForm((current) => ({
      ...current,
      marks: {
        ...current.marks,
        [subject]: Number(value),
      },
    }));
  };

  const totalMarks = Object.values(form.marks).reduce((sum, mark) => sum + Number(mark || 0), 0);
  const percentage = Math.round(totalMarks / 5);
  const grade = percentage >= 90 ? 'A+' : percentage >= 80 ? 'A' : percentage >= 70 ? 'B' : percentage >= 60 ? 'C' : 'D';

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.id || !form.name || !form.course) {
      alert('Student ID, name, and course are required.');
      return;
    }
    onSave({ ...form, present: Number(form.present), absent: Number(form.absent), leave: Number(form.leave) });
    setForm((current) => ({ ...current }));
  };

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>{student ? 'Edit Student' : 'Add Student'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="field-row grid-3">
          <div>
            <label htmlFor="studentId">Student ID</label>
            <input id="studentId" value={form.id} onChange={(e) => handleChange('id', e.target.value)} disabled={Boolean(student)} />
          </div>
          <div>
            <label htmlFor="studentName">Name</label>
            <input id="studentName" value={form.name} onChange={(e) => handleChange('name', e.target.value)} />
          </div>
          <div>
            <label htmlFor="studentEmail">Email</label>
            <input id="studentEmail" value={form.email} onChange={(e) => handleChange('email', e.target.value)} type="email" />
          </div>
        </div>

        <div className="field-row grid-3">
          <div>
            <label htmlFor="studentPhone">Phone</label>
            <input id="studentPhone" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} />
          </div>
          <div>
            <label htmlFor="studentCourse">Course</label>
            <input id="studentCourse" value={form.course} onChange={(e) => handleChange('course', e.target.value)} />
          </div>
          <div>
            <label htmlFor="studentSemester">Semester</label>
            <input id="studentSemester" value={form.semester} onChange={(e) => handleChange('semester', e.target.value)} />
          </div>
        </div>

        <div className="field-row grid-3">
          <div>
            <label htmlFor="studentDob">Date of Birth</label>
            <input id="studentDob" type="date" value={form.dob} onChange={(e) => handleChange('dob', e.target.value)} />
          </div>
          <div>
            <label htmlFor="studentAddress">Address</label>
            <input id="studentAddress" value={form.address} onChange={(e) => handleChange('address', e.target.value)} />
          </div>
          <div>
            <label htmlFor="studentAttendance">Attendance %</label>
            <input id="studentAttendance" type="text" readOnly value={Math.round((Number(form.present) || 0) / Math.max(1, Number(form.present) + Number(form.absent) + Number(form.leave)) * 100)} />
          </div>
        </div>

        <div className="field-row grid-3">
          <div>
            <label htmlFor="presentDays">Present Days</label>
            <input id="presentDays" type="number" min="0" value={form.present} onChange={(e) => handleChange('present', e.target.value)} />
          </div>
          <div>
            <label htmlFor="absentDays">Absent Days</label>
            <input id="absentDays" type="number" min="0" value={form.absent} onChange={(e) => handleChange('absent', e.target.value)} />
          </div>
          <div>
            <label htmlFor="leaveDays">Leave Days</label>
            <input id="leaveDays" type="number" min="0" value={form.leave} onChange={(e) => handleChange('leave', e.target.value)} />
          </div>
        </div>

        <div className="card" style={{ marginBottom: '1rem' }}>
          <h3>Marks</h3>
          <div className="field-row grid-3">
            <div>
              <label htmlFor="maths">Maths</label>
              <input id="maths" type="number" min="0" max="100" value={form.marks.maths} onChange={(e) => handleMarkChange('maths', e.target.value)} />
            </div>
            <div>
              <label htmlFor="physics">Physics</label>
              <input id="physics" type="number" min="0" max="100" value={form.marks.physics} onChange={(e) => handleMarkChange('physics', e.target.value)} />
            </div>
            <div>
              <label htmlFor="chemistry">Chemistry</label>
              <input id="chemistry" type="number" min="0" max="100" value={form.marks.chemistry} onChange={(e) => handleMarkChange('chemistry', e.target.value)} />
            </div>
          </div>
          <div className="field-row grid-3" style={{ marginTop: '1rem' }}>
            <div>
              <label htmlFor="english">English</label>
              <input id="english" type="number" min="0" max="100" value={form.marks.english} onChange={(e) => handleMarkChange('english', e.target.value)} />
            </div>
            <div>
              <label htmlFor="programming">Programming</label>
              <input id="programming" type="number" min="0" max="100" value={form.marks.programming} onChange={(e) => handleMarkChange('programming', e.target.value)} />
            </div>
            <div>
              <label htmlFor="percentage">Percentage</label>
              <input id="percentage" type="text" readOnly value={`${percentage}%`} />
            </div>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <strong>Grade: </strong>
            <span className="badge badge-success">{grade}</span>
          </div>
        </div>

        <div className="button-group">
          <button type="submit" className="primary">
            Save Student
          </button>
          <button type="button" className="ghost" onClick={onReset}>
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
