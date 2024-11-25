import express from 'express';
 
const app = express();
const port = 8080;
 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
 
const students = [
  { id: 1, name: 'Kevin', grade: '2ITA', birthday: '14-12-2006' },
  { id: 2, name: 'Jørgen', grade: '2ITA', birthday: '07-10-2005' },
  { id: 3, name: 'nahuel', grade: '2ITA', birthday: '20-9-152BC' },
  { id: 4, name: 'filip', grade: '2ITA', birthday: '1-1-2006'},
  { id: 5, name: 'andreas', grade: '2ITA', birthday: '3-6-2006' }
];
 
app.get('/students/:studentId?', (req, res) => {
    const studentId = req.params.studentId;
    if (studentId) {
      const student = students.find((student) => student.id === parseInt(studentId));
      res.json(student || { error: 'Student not found' });
    } else {
      res.json(students);
    }
  });

 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});