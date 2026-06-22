import { useState } from 'react';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';
import SearchBar from '../components/SearchBar';
import Attendance from '../components/Attendance';
import Marks from '../components/Marks';

function Students({
  students,
  selectedStudent,
  onDelete,
  onSelect,
  onSave,
  searchQuery,
  searchField,
  sortBy,
  sortOrder,
  onSearchQueryChange,
  onSearchFieldChange,
  onSortByChange,
  onSortOrderChange,
}) {
  const [editingStudent, setEditingStudent] = useState(null);

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const handleReset = () => {
    setEditingStudent(null);
  };

  return (
    <div>
      <div className="card" style={{ marginTop: '1rem' }}>
        <h1 className="page-title">Students</h1>
        <p className="subtitle">Add new students, update details, search, sort, and track attendance.</p>
      </div>
      <SearchBar query={searchQuery} field={searchField} onQueryChange={onSearchQueryChange} onFieldChange={onSearchFieldChange} />
      <div className="grid grid-2" style={{ gap: '1rem' }}>
        <StudentForm student={editingStudent} onSave={(item) => { onSave(item); handleReset(); }} onReset={handleReset} />
        <div className="grid" style={{ gap: '1rem' }}>
          <Attendance student={selectedStudent} />
          <Marks student={selectedStudent} />
        </div>
      </div>
      <StudentList
        students={students}
        onEdit={handleEdit}
        onView={onSelect}
        onDelete={onDelete}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSortByChange={onSortByChange}
        onSortOrderChange={onSortOrderChange}
      />
    </div>
  );
}

export default Students;
