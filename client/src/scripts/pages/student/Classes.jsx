import React, { useState } from "react";
import Sidebar from "../../layouts/Sidebar/Sidebar";
import CardContainer from "../../layouts/Classes/ClassesLayout";  
const ProfileImage = "../../../assets/img/Classes/perfil.jpg";

const values = [
  {
    id: 1,
    name: "Blockchain Technology",
    teacher: "Mr. Abcd Wxyz",
    role: "student",
    url: "/classes/1/stream/s",
    profileImg: { ProfileImage },
  },
  {
    id: 2,
    name: "Data Structure",
    teacher: "Mr. Abcd Wxyz",
    role: "teacher",
    url: "/classes/2/stream/t",
    profileImg: { ProfileImage },
  },
  {
    id: 3,
    name: "Computer Graphics",
    teacher: "Mr. Abcd Wxyz",
    role: "student",
    url: "/classes/3/stream/s",
    profileImg: { ProfileImage },
  },
  {
    id: 4,
    name: "Probability and Statistics",
    teacher: "Mr. Abcd Wxyz",
    role: "student",
    url: "/classes/4/stream/s",
    profileImg: { ProfileImage },
  },
  {
    id: 5,
    name: "Mathematics III",
    teacher: "Mr. Abcd Wxyz",
    role: "student",
    url: "/classes/5/stream/s",
    profileImg: { ProfileImage },
  },
  {
    id: 6,
    name: "Blockchain Technology",
    teacher: "Mr. Abcd Wxyz",
    role: "teacher",
    url: "/classes/6/stream/t",
    profileImg: { ProfileImage },
  },
  {
    id: 7,
    name: "Blockchain Technology",
    teacher: "Mr. Abcd Wxyz",
    role: "student",
    url: "/classes/7/stream/t",
    profileImg: { ProfileImage },
  },
];
function Classes() {
  const [classes] = useState(values);
  return (
    <Sidebar
      show={false}
      component={<CardContainer classList={classes} />}
    ></Sidebar>
  );
}

export default Classes;
