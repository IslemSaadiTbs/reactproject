function App() {
  const studentName = "Islem Saadi";
  const courseTitle = "Advanced Web Development"
  const student = {
  name: "Islem ",
  age: 20,
  track: "Business Analytics"};
  function sayHello() {
  return "Helloo"; }
  return (
    <div>
      <h1> Hello </h1>
      <p>{sayHello()}</p>
      <p> I'm {studentName}.I'm having {courseTitle} as a course. </p>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>
      <label htmlFor="name" > Enter your name : </label>
      <input type="text" id="nameInput" />
    </div>
  );
}
export default App;
