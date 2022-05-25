import React, { useEffect, useState } from "react";
import { db } from "../../config/Config";
import "./Users.css";

import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export default function Users() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    let allUsers = [];
    const querySnapshot = await getDocs(collection(db, "user"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      let data = { ...doc.data(), id: doc.id };
      allUsers.push(data);
    });
    setUsers(allUsers);
    console.log("user data ", users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.zip}</td>
                <td>{user.country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
