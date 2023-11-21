import React, { useState } from 'react';
import './page.css';
import axios from "axios";
// import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [employee, setEmployee] = useState({
    name: '',
    position: '',
    salary: null,
    joindate: '',
  });


  const handleChange = (e) => {
    setEmployee((prev) => ({
        ...prev, [e.target.name]: e.target.value
    }));
  };

//   const navigate = useNavigate();

  const handleClick = async e => {
    e.preventDefault()
    try{
        await axios.post("http://localhost:5000/emp", employee)
        console.log(employee);
    }
    catch(err){
        console.log(err);
    }
  }


  return (
    <div>
      <input type="text" placeholder='name' name='name'onChange={handleChange}/>
      <input type="text" placeholder='position'name='position'onChange={handleChange}/>
      <input type="text" placeholder='salary'name='salary'onChange={handleChange}/>
      <input type="date" placeholder='joindate'name='joindate'onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Form;
