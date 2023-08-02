import React from "react";
import style from "./TableStyle.module.css";

const DUMMY_DATA = [
  {
    id: 1,
    description: "sample data",
    plan: "sample plan",
    ats_messages: "ats messagesss",
    sender: "sample sender",
    update_user: "sample user update",
  },
  {
    id: 2,
    description: "sample dataaaaaaa",
    plan: "sample plannnnnnn",
    ats_messages: "ats messagessssssss",
    sender: "sample sendeeeer",
    update_user: "sample user updateeeee",
  },
  {
    id: 3,
    description: "sample dataaaaaaa",
    plan: "sample plannnnnnn",
    ats_messages: "ats messagessssssss",
    sender: "sample sendeeeer",
    update_user: "sample user updateeeee",
  },
  {
    id: 4,
    description: "sample dataaaaaaa",
    plan: "sample plannnnnnn",
    ats_messages: "ats messagessssssss",
    sender: "sample sendeeeer",
    update_user: "sample user updateeeee",
  },
  {
    id: 5,
    description: "sample dataaaaaaa",
    plan: "sample plannnnnnn",
    ats_messages: "ats messagessssssss",
    sender: "sample sendeeeer",
    update_user: "sample user updateeeee",
  },
];

function Processed() {
  return (
    <table className={style.container}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>PLAN</th>
          <th>ATS Messages</th>
          <th>Sender</th>
          <th>Update User</th>
        </tr>
      </thead>
      <tbody>
        {DUMMY_DATA.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.description}</td>
            <td>{item.plan}</td>
            <td>{item.ats_messages}</td>
            <td>{item.sender}</td>
            <td>{item.update_user}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Processed;
