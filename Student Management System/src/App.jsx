import { useEffect, useMemo, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Students from './pages/Students';
import Reports from './pages/Reports';
import Landing from './pages/Landing';

const sampleStudents = [
  {
    id: '102',
    name: 'Akshita Aggarwal',
    email: 'akshita@example.com',
    phone: '9123456780',
    course: 'B.Tech ECE',
    semester: '2',
    address: 'Sector 60, Noida',
    dob: '2005-08-23',
    present: 85,
    absent: 10,
    leave: 5,
    marks: {
      maths: 78,
      physics: 81,
      chemistry: 76,
      english: 83,
      programming: 88,
    },
  },
  {
    id: '103',
    name: 'Rohan Singh',
    email: 'rohan@example.com',
    phone: '9988776655',
    course: 'B.Tech ME',
    semester: '3',
    address: 'Sector 45, Gurugram',
    dob: '2004-12-05',
    present: 88,
    absent: 7,
    leave: 5,
    marks: {
      maths: 82,
      physics: 75,
      chemistry: 79,
      english: 80,
      programming: 72,
    },
  },
  {
    id: '104',
    name: 'Neha Sharma',
    email: 'neha@example.com',
    phone: '9871234560',
    course: 'B.Tech CSE',
    semester: '1',
    address: 'Sector 20, Noida',
    dob: '2005-03-18',
    present: 94,
    absent: 4,
    leave: 2,
    marks: {
      maths: 91,
      physics: 85,
      chemistry: 88,
      english: 90,
      programming: 93,
    },
  },
  {
    id: '105',
    name: 'Priya Nair',
    email: 'priya@example.com',
    phone: '9012345678',
    course: 'B.Tech IT',
    semester: '2',
    address: 'Sector 15, Noida',
    dob: '2005-06-10',
    present: 90,
    absent: 6,
    leave: 4,
    marks: {
      maths: 84,
      physics: 79,
      chemistry: 82,
      english: 86,
      programming: 89,
    },
  },
];

function calculateGrade(percentage) {
  if (percentage >= 90) return 'A+';
  if (percentage >= 80) return 'A';
  if (percentage >= 70) return 'B';
  if (percentage >= 60) return 'C';
  return 'D';
}

function enhanceStudent(student) {
  const marks = student.marks || { maths: 0, physics: 0, chemistry: 0, english: 0, programming: 0 };
  const totalMarks = Object.values(marks).reduce((sum, value) => sum + Number(value || 0), 0);
  const percentage = Math.round(totalMarks / 5);
  const totalDays = Number(student.present || 0) + Number(student.absent || 0) + Number(student.leave || 0);
  const attendance = totalDays ? Math.round((Number(student.present || 0) / totalDays) * 100) : 0;
  return {
    ...student,
    totalMarks,
    percentage,
    grade: calculateGrade(percentage),
    attendance,
  };
}

function App() {
  const [students, setStudents] = useState(() => {
    const stored = localStorage.getItem('sms-students');
    if (stored) {
      return JSON.parse(stored).map(enhanceStudent);
    }
    return sampleStudents.map(enhanceStudent);
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchField, setSearchField] = useState('name');
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('sms-students', JSON.stringify(students));
  }, [students]);

  const handleSaveStudent = (student) => {
    const enhanced = enhanceStudent(student);
    setStudents((current) => {
      const existingIndex = current.findIndex((item) => item.id === enhanced.id);
      if (existingIndex >= 0) {
        const next = [...current];
        next[existingIndex] = enhanced;
        return next;
      }
      return [...current, enhanced];
    });
    setSelectedStudent(enhanced);
    navigate('/students');
  };

  const handleDeleteStudent = (id) => {
    if (!window.confirm('Delete this student?')) return;
    setStudents((current) => current.filter((student) => student.id !== id));
    if (selectedStudent?.id === id) {
      setSelectedStudent(null);
    }
  };

  const handleSelectStudent = (id) => {
    setSelectedStudent(students.find((student) => student.id === id) || null);
  };

  const filteredStudents = useMemo(() => {
    return students
      .filter((student) => {
        const value = String(student[searchField] || '').toLowerCase();
        return String(searchQuery || '').toLowerCase().split(' ').every((part) => value.includes(part));
      })
      .sort((a, b) => {
        const first = String(a[sortBy] || '').toLowerCase();
        const second = String(b[sortBy] || '').toLowerCase();
        if (first < second) return sortOrder === 'asc' ? -1 : 1;
        if (first > second) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
  }, [students, searchField, searchQuery, sortBy, sortOrder]);

  const dashboardData = useMemo(() => {
    const total = students.length;
    const average = total
      ? Math.round(students.reduce((sum, student) => sum + (student.percentage || 0), 0) / total)
      : 0;
    const topPerformer = students.reduce((best, student) => {
      return !best || student.percentage > best.percentage ? student : best;
    }, null);
    const averageAttendance = total
      ? Math.round(students.reduce((sum, student) => sum + (student.attendance || 0), 0) / total)
      : 0;
    return { total, average, topPerformer, averageAttendance };
  }, [students]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Home dashboard={dashboardData} />} />
          <Route
            path="/students"
            element={
              <Students
                students={filteredStudents}
                selectedStudent={selectedStudent}
                onDelete={handleDeleteStudent}
                onSelect={handleSelectStudent}
                onSave={handleSaveStudent}
                searchQuery={searchQuery}
                searchField={searchField}
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSearchQueryChange={setSearchQuery}
                onSearchFieldChange={setSearchField}
                onSortByChange={setSortBy}
                onSortOrderChange={setSortOrder}
              />
            }
          />
          <Route path="/reports" element={<Reports students={students} />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
