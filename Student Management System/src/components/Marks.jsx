function Marks({ student }) {
  if (!student) {
    return (
      <div className="card">
        <h3>Marks</h3>
        <p>Select a student to view marks and grade.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h3>Marks</h3>
      <div className="field-row grid-3">
        <div>
          <label>Maths</label>
          <p>{student.marks.maths}</p>
        </div>
        <div>
          <label>Physics</label>
          <p>{student.marks.physics}</p>
        </div>
        <div>
          <label>Chemistry</label>
          <p>{student.marks.chemistry}</p>
        </div>
      </div>
      <div className="field-row grid-3" style={{ marginTop: '1rem' }}>
        <div>
          <label>English</label>
          <p>{student.marks.english}</p>
        </div>
        <div>
          <label>Programming</label>
          <p>{student.marks.programming}</p>
        </div>
        <div>
          <label>Total</label>
          <p>{student.totalMarks}</p>
        </div>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <label>Percentage</label>
        <p>{student.percentage}%</p>
      </div>
      <div style={{ marginTop: '0.75rem' }}>
        <label>Grade</label>
        <p className="badge badge-warning" style={{ padding: '0.55rem 1rem' }}>
          {student.grade}
        </p>
      </div>
    </div>
  );
}

export default Marks;
