function SearchBar({ query, field, onQueryChange, onFieldChange }) {
  return (
    <div className="card" style={{ marginBottom: '1rem' }}>
      <div className="field-row grid-3">
        <div>
          <label htmlFor="searchField">Search by</label>
          <select id="searchField" value={field} onChange={(e) => onFieldChange(e.target.value)}>
            <option value="name">Name</option>
            <option value="id">Student ID</option>
            <option value="course">Course</option>
          </select>
        </div>
        <div>
          <label htmlFor="searchQuery">Search term</label>
          <input
            id="searchQuery"
            type="text"
            value={query}
            placeholder="Search students"
            onChange={(e) => onQueryChange(e.target.value)}
          />
        </div>
        <div style={{ alignSelf: 'end' }}>
          <p className="subtitle">Type a name, ID, or course to filter the table.</p>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
