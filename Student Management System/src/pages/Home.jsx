import Dashboard from '../components/Dashboard';

function Home({ dashboard }) {
  return (
    <div>
      <div className="card" style={{ marginTop: '1rem' }}>
        <h1 className="page-title">Dashboard</h1>
        <p className="subtitle">Overview of student count, marks, attendance, and top performers.</p>
      </div>
      <Dashboard dashboard={dashboard} />
    </div>
  );
}

export default Home;
