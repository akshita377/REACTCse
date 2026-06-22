function Reports({ students }) {
  const gradeDistribution = students.reduce((distribution, student) => {
    distribution[student.grade] = (distribution[student.grade] || 0) + 1;
    return distribution;
  }, {});

  const topStudents = [...students]
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 3);

  return (
    <div>
      <div className="card" style={{ marginTop: '1rem' }}>
        <h1 className="page-title">Reports</h1>
        <p className="subtitle">Results, grade distribution, and performance summary for the batch.</p>
      </div>

      <div className="grid grid-2" style={{ gap: '1rem' }}>
        <div className="card">
          <h3>Grade Distribution</h3>
          <div className="field-row grid-3" style={{ marginTop: '1rem' }}>
            {['A+', 'A', 'B', 'C', 'D'].map((grade) => (
              <div key={grade} style={{ padding: '1rem', background: '#f9fafb', borderRadius: '16px' }}>
                <h4 style={{ margin: 0 }}>{grade}</h4>
                <p style={{ margin: '0.5rem 0 0', fontSize: '1.25rem' }}>{gradeDistribution[grade] || 0}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Top Performers</h3>
          <ol style={{ paddingLeft: '1.2rem', margin: '1rem 0 0' }}>
            {topStudents.map((student) => (
              <li key={student.id} style={{ marginBottom: '0.75rem' }}>
                <strong>{student.name}</strong> — {student.percentage}% ({student.grade})
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Reports;
