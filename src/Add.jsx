import React, { useState } from 'react';
import './add.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [employee, setEmployee] = useState({
    name: '',
    position: '',
    salary: null,
    joindate: '',
  });

  const navigate = useNavigate();

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:5000/emp", employee)
      console.log(employee);
      navigate("/");
    }
    catch(err){
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setEmployee((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }));
  }

  return (
    <div className="employee-management">
      <h1>Add Employee</h1>
        <input
          type="text"
          placeholder="name"
          name='name'
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Position"
          name='position'
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="salary"
          name='salary'
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="date"
          placeholder="joinDate"
          name='joindate'
          onChange={handleChange}
          className="input-field"
        />
        <div className="button-container">
          <button type="submit" className="action-button" onClick={handleClick}>Add
          </button>
        </div>
    </div>
  );
};

export default Add;
