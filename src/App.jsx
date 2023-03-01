import reactLogo from "./assets/react.svg";
import "./App.css";
import StudentItem from "./components/StudentItem";

function App() {
  const studentList = [
    {name: "Tom", surname: "Cruise", age: 29},  // studentList[0]
    {name: "Tony", surname: "Ja", age: 65},     // studentList[1]
    {name: "Tom", surname: "Hank", age: 68},    // studentList[2]
    {name: "Chris", surname: "Evan", age: 35},  // studentList[3]
  ]

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <StudentItem name={studentList[0].name} surname={studentList[0].surname} age={studentList[0].age}/>
      <StudentItem name={studentList[1].name} surname={studentList[1].surname} age={studentList[1].age}/>
      <StudentItem name={studentList[2].name} surname={studentList[2].surname} age={studentList[2].age}/>
      <StudentItem name={studentList[3].name} surname={studentList[3].surname} age={studentList[3].age}/>
    </div>
  );
}

export default App;
