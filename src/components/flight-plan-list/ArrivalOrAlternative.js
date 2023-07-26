import React from "react";
import style from "./TableStyle.module.css"

const DUMMY_DATA = [];

function ArrivalOrAlternative() {
  return (
    <table>
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

export default ArrivalOrAlternative;
