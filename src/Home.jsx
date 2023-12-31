import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import axios from 'axios';

const Home = () => {

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try{
                const res = await axios.get("http://localhost:5000/users");
                setEmployee(res.data);
            }
            catch(err){
                console.log(err);
            }
        };
        fetchAllBooks();
    }, []);

    console.log(employee);

  return (
    <div className="home">
      <h1>Employee Management System</h1>
      <div className="buttons">
        <Link to="/add" className="action-button">
          Add Employee
        </Link>
        <Link to="/update" className="action-button">
          Update Employee
        </Link>
      </div>
      <div className="employee-table">
      <h2>Employee Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Join Date</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.salary}</td>
              <td>{new Date(emp.joindate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Home;
