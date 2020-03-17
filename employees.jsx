import React, { Component } from "react";
import { generatePath } from "react-router-dom";
import Table from "./table";
import AddEmp from "./emp-form";
class Employees extends Component {
  state = {
    employees: [
      {
        id: 1,
        name: "Ammu",
        dept: "Accounts",
        email: "ammu123@gmail.com"
      },
      {
        id: 2,
        name: "Sai",
        dept: "Management",
        email: "sai56747@gmail.com"
      },
      {
        id: 3,
        name: "Geetha",
        dept: "HR",
        email: "geetha324@gmail.com"
      }
    ],
    employee: {
      id: "",
      name: "",
      dept: "",
      email: ""
    }
  };
  addEmp = event => {
    event.preventDefault();
    console.log(this.state.employee);
    const employees = [...this.state.employees, this.state.employee];
    console.log(employees);
    this.setState({ employees });
  };
  getEmp = id => {
    const employee = this.state.employees.filter(emp => emp.id === id);
    this.setState({ employee: employee[0] });
  };
  deleteEmp = id => {
    const employees = this.state.employees.filter(emp => emp.id !== id);
    this.setState({ employees });
  };
  updateEmp = event => {
    event.preventDefault();
    console.log("update", this.state.employee);
    const emp = this.state.employee;
    const employees = this.state.employees;
    const indx = this.state.employees.indexOf(emp);
    employees[indx] = emp;
    this.setState({ employees });
    console.log(indx);
  };
  handleInputField = event => {
    const employee = this.state.employee;
    const { name, value } = event.currentTarget;
    employee[name] = value;
    console.log("employee", employee);
    this.setState({ employee });
  };
  render() {
    console.log(this.state.employees);
    return (
      <div>
        <Table
          deleteEmp={this.deleteEmp}
          updateEmp={this.updateEmp}
          employees={this.state.employees}
          getEmp={this.getEmp}
          employee={this.state.employee}
          handleInputField={this.handleInputField}
        />
        <AddEmp handleInputField={this.handleInputField} addEmp={this.addEmp} />
      </div>
    );
  }
}

export default Employees;





