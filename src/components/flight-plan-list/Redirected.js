import React from 'react';
import style from "./TableStyle.module.css";

const DUMMY_DATA = [
  {
    "id": 1,
    "plan": "sample plan",
    "redirected_aerodrome": "ltcf",
    "sender": "sample sender",
    "update_user": "sample user update"
  },
  {
    "id": 2,
    "plan": "sample plan",
    "redirected_aerodrome": "ltcf",
    "sender": "sample sender",
    "update_user": "sample user update"
  },
  {
    "id": 3,
    "plan": "sample plan",
    "redirected_aerodrome": "ltcf",
    "sender": "sample sender",
    "update_user": "sample user update"
  },
  
];

function Redirected() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>PLAN</th>
          <th>Redirected Aerodrome ICAO</th>
          <th>Sender</th>
          <th>Update User</th>
        </tr>
      </thead>
      <tbody>{DUMMY_DATA.map((item)=> (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.plan}</td>
          <td>{item.redirected_aerodrome}</td>
          <td>{item.sender}</td>
          <td>{item.update_user}</td>
        </tr>
      ))}</tbody>
    </table>
  )
}

export default Redirected