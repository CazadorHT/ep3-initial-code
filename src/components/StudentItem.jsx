import React from "react";
import "./StudentItem.css";
import StudentTag from "./StudentTag";

function StudentItem(props) {
  const name = props.name;
  const surname = props.surname;
  const age = props.age;

  return (
    <div className="StudentItem">
      <div>{name}</div>
      <div>{surname}</div>
      <div>{age}</div>
      <StudentTag tagAge={age} />
    </div>
  );
}

export default StudentItem;
