function StudentList({ students, onEdit, onView, onDelete, sortBy, sortOrder, onSortByChange, onSortOrderChange }) {
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ margin: 0 }}>Student List</h2>
          <p className="subtitle">Manage student records, sort the table, or view a profile.</p>
        </div>
        <div className="button-group">
          <select value={sortBy} onChange={(e) => onSortByChange(e.target.value)}>
            <option value="id">Sort by ID</option>
            <option value="name">Sort by Name</option>
            <option value="course">Sort by Course</option>
            <option value="percentage">Sort by Percentage</option>
          </select>
          <button className="ghost" onClick={() => onSortOrderChange(sortOrder === 'asc' ? 'desc' : 'asc')}>
            {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
          </button>
        </div>
      </div>

      <div className="table-scroll">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Semester</th>
              <th>Attendance</th>
              <th>Percentage</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length ? (
              students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                  <td>{student.semester}</td>
                  <td>{student.attendance}%</td>
                  <td>{student.percentage}%</td>
                  <td>
                    <span className="badge badge-primary">{student.grade}</span>
                  </td>
                  <td className="action-buttons">
                    <button className="ghost" onClick={() => onView(student.id)}>
                      View
                    </button>
                    <button className="ghost" onClick={() => onEdit(student)}>
                      Edit
                    </button>
                    <button className="ghost" onClick={() => onDelete(student.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '2rem 0' }}>
                  No students match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
