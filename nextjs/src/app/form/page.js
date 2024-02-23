"use client";
import React, { useState } from "react";
 
const Form = () => {
  const [FName, SetFName] = useState("");
  const [LName, SetLName] = useState("");
  const [gender, Setgender] = useState("");
  const [age, SetAge] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name:- ", FName);
    console.log("Last Name:- ", LName);
    console.log("Age:- ", age);
    console.log("Gender:- ", gender);
    console.log("Email:- ", email);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={FName}
        placeholder="First Name"
        onChange={(e) => {
          SetFName(e.target.value);
        }}
      />
      <input
        type="text"
        value={LName}
        placeholder="Last Name"
        onChange={(e) => {
          SetLName(e.target.value);
        }}
      />
      <input
        type="Number"
        value={age}
        placeholder="Age"
        onChange={(e) => {
          SetAge(e.target.value);
        }}
      />
      <input
        type="text"
        value={gender}
        placeholder="Gender"
        onChange={(e) => {
          Setgender(e.target.value);
        }}
      />
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => {
          Setemail(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => {
          Setpassword(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;