import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
 
function Profile() {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);
 
  useEffect(() => {
    fetch(`http://localhost:8080/students/${studentId}`)
    .then(response => response.json())
    .then(data => setStudent(data));
  }, [studentId]);
 
  if (!student) {
    return <div>Loading...</div>;
  }
 
  return (
<div>
<h1>{student.name}</h1>
<p>Grade: {student.grade}</p>
<p>Birthday: {student.birthday}</p>
</div>
  );
}
 
export default Profile;