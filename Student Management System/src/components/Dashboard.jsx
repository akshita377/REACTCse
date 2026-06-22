function Dashboard({ dashboard }) {
  return (
    <div className="grid grid-4" style={{ gap: '1rem', marginTop: '1rem' }}>
      <div className="small-card">
        <h4>Total Students</h4>
        <p>{dashboard.total}</p>
      </div>
      <div className="small-card">
        <h4>Average Marks</h4>
        <p>{dashboard.average}%</p>
      </div>
      <div className="small-card">
        <h4>Top Performer</h4>
        <p>{dashboard.topPerformer?.name || 'N/A'}</p>
      </div>
      <div className="small-card">
        <h4>Attendance %</h4>
        <p>{dashboard.averageAttendance}%</p>
      </div>
    </div>
  );
}

export default Dashboard;
