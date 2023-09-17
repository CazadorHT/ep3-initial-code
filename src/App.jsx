import reactLogo from "./assets/react.svg";
import "./App.css";
import StudentItem from "./components/StudentItem";
import { useState } from "react";
import NewStudentItem from "./components/NewStudentItem";

function App() {
  const studentList = [
    {name: "Tom", surname: "Cruise", age: 29},  // studentList[0]
    {name: "Tony", surname: "Ja", age: 65},     // studentList[1]
    {name: "Tom", surname: "Hank", age: 68},    // studentList[2]
    {name: "Chris", surname: "Evan", age: 35},  // studentList[3]
  ]

  const [status,setStatus]= useState("Available") //Stactus

  const clickhandler = ()=>{
    console.log("Clicked Const ประกาศข้างนอก")
    statusText ="Busy"
    console.log ("เปลี่ยนค่า H3 statusText",statusText) //เปลี่ยนค่าอ h3 แต่ยังไม่ออก ต้องไปทำ State
  }

  const clickHandler = ()=>{
    setStatus("Busy")
    console.log("Status",status) //state ค่าเปลี่ยนแล้ว แต่แสดงค่าเก่าขึ้นมา
  } // State

  const addStudentHandler = (newStudent) =>{
    const newStudentItem ={
      ...newStudent,
      id: Math.random().toString(),
    }
    console.log(newStudentItem)
  }


  return (
    <div className="App">
      <h1>Vite + React</h1>
      <NewStudentItem onAddStudent={addStudentHandler}/>
      <StudentItem name={studentList[0].name} surname={studentList[0].surname} age={studentList[0].age}/>
      <StudentItem name={studentList[1].name} surname={studentList[1].surname} age={studentList[1].age}/>
      <StudentItem name={studentList[2].name} surname={studentList[2].surname} age={studentList[2].age}/>
      <StudentItem name={studentList[3].name} surname={studentList[3].surname} age={studentList[3].age}/>
      
      <h3>Status : {status}</h3>
      <button onClick={() => console.log("Arrow Click")}>Arrow Click </button>
      <button onClick={function(){console.log("Function Click")}}>Function Click </button>
      <button onClick={clickhandler}>outside function Click </button>
      <button onClick={clickHandler}>State function Click </button>
      





    </div>
  );
}

export default App;
