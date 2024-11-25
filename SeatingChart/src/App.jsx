import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css'
 
function App() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    fetch('http://localhost:8080/students')
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);
 
  const handleStudentClick = (student) => {
    navigate(`/students/${student.id}`);
  };
 
  return (
<div>
<h1>Students</h1>
<div>
        {students.length > 0 ? (
          students.map((student, index) => (
<div key={index}>
<h2 onClick={() => handleStudentClick(student)}>{student.name}</h2>
</div>
          ))
        ) : (
<p>Loading...</p>
        )}
</div>
</div>
  );
}
 
export default App;