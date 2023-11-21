import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './update.css';

const Update = () => {

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
        };fetchAllBooks();
    }, []);

    const handleDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:5000/users/${id}`);
            window.location.reload();
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <div className="employee-table">
        <a href="/">Employee Details</a>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Join Date</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.salary}</td>
              <td>{new Date(emp.joindate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Update