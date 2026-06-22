function Attendance({ student }) {
  if (!student) {
    return (
      <div className="card">
        <h3>Attendance</h3>
        <p>Select a student to view attendance data.</p>
      </div>
    );
  }

  const total = Number(student.present || 0) + Number(student.absent || 0) + Number(student.leave || 0);

  return (
    <div className="card">
      <h3>Attendance</h3>
      <div className="field-row grid-3">
        <div>
          <label>Present</label>
          <p>{student.present}</p>
        </div>
        <div>
          <label>Absent</label>
          <p>{student.absent}</p>
        </div>
        <div>
          <label>Leave</label>
          <p>{student.leave}</p>
        </div>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <label>Total Days</label>
        <p>{total}</p>
      </div>
      <div style={{ marginTop: '0.75rem' }}>
        <label>Attendance %</label>
        <p>{student.attendance}%</p>
      </div>
    </div>
  );
}

export default Attendance;
