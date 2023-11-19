// EmployeeManagementPage.jsx

import React, { useState } from 'react';
import './home.css';

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [joinDate, setJoinDate] = useState('');

  const addEmployee = () => {
    if (name && position) {
      const newEmployee = { id: Date.now(), name, position, salary, joinDate };
      setEmployees([...employees, newEmployee]);
      setName('');
      setPosition('');
      setSalary('');
      setJoinDate('');
    }
  };

  const updateEmployee = () => {
    if (name && position && editingEmployee) {
      const updatedEmployees = employees.map((employee) =>
        employee.id === editingEmployee.id ? { ...employee, name, position, salary, joinDate } : employee
      );
      setEmployees(updatedEmployees);
      setEditingEmployee(null);
      setName('');
      setPosition('');
      setSalary('');
      setJoinDate('');
    }
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setName(employee.name);
    setPosition(employee.position);
    setSalary(employee.salary);
    setJoinDate(employee.joinDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingEmployee) {
      updateEmployee();
    } else {
      addEmployee();
    }
  };

  const handleCancel = () => {
    setEditingEmployee(null);
    setName('');
    setPosition('');
    setSalary('');
    setJoinDate('');
  };

  return (
    <div className="employee-management">
      <h1>Employee Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="input-field"
        />
        <input
          type="date"
          placeholder="joinDate"
          value={joinDate}
          onChange={(e) => setJoinDate(e.target.value)}
          className="input-field"
        />
        <div className="button-container">
          <button type="submit" className="action-button">
            {editingEmployee ? 'Update' : 'Add'}
          </button>
          {editingEmployee && (
            <button type="button" className="action-button" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
      <ul className="employee-list">
        {employees.map((employee) => (
          <li key={employee.id} className="employee-item">
            <span>{employee.name}</span> - <span>{employee.position}</span> - <span>{employee.salary}</span> - <span>{employee.joinDate}</span>
            <div>
              <button onClick={() => handleEdit(employee)} className="edit-button">
                Edit
              </button>
              <button onClick={() => deleteEmployee(employee.id)} className="delete-button">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
