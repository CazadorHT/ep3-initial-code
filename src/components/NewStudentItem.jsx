import React, { useState } from "react";
import "./NewStudentItem.css";

const NewStudentItem = (props) => { //props

    // const nameChangeHandler =(event)=>{    //ดักฟัง
     const [currentName, setCurrentName] = useState("");
     const [currentSurname, setCurrentSurname] = useState("");
     const [currentAge, setCurrentAge] = useState("");

     const nameChangeHandler = (event) => {
            setCurrentName(event.target.value);
     };
        // console.log("event",event.target.value) //ดูค่าใน textbox
     const surnameChangeHandler = (event) => {
             setCurrentSurname(event.target.value);
     };
     const AgeChangeHandler = (event) => {
             setCurrentAge(event.target.value);
     };
   
     const submitHandler =(event)=>{
        event.preventDefault();
        const newStudent ={
            name:currentName,
            surname:currentSurname,
            age: Number (currentAge)
            
        }
       
        props.onAddStudent(newStudent) //props
        // console.log(newStudent)
        setCurrentName("")
        setCurrentSurname("")
        setCurrentAge("")
        
     }

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="NewStudentContainer">
        <div className="StudentInput">
          <label htmlFor="">Name</label> 
          <input onChange={nameChangeHandler} type="text" value={currentName}/>
          {/* onChange={nameChangeHandler}  ดังฟัง  */}
        </div> 
        <div className="StudentInput">
          <label htmlFor="">Surname</label>
          <input onChange={surnameChangeHandler} type="text" value={currentSurname}/>
        </div>
        <div className="StudentInput">
          <label htmlFor="">Age</label>
          <input onChange={AgeChangeHandler}type="number" min="0" max="100" step="1" value={currentAge}/>
        </div>
        <div className="SubmitButton">
          <button>Add Student</button>
        </div>
      </div>
    </form>
  );
};
export default NewStudentItem;
