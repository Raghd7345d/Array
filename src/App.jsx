import { useState } from "react";
import "./App.css";

function FilterButton() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  const isActive = (filter) => {
    return filter === activeFilter ? "active" : "";
  };
  const [users, setUsers] =useState([
    {name : "Raghd", gender: "famale", age: 28}
    {name : "Peter", gender: "male", age: 40}
    {name : "Falk", gender: "male", age: 40}

  ])
  return (
    <>
      <div>
        <h1>Hier ist die Aufgabe</h1>

        <button
          className={isActive("all")}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={isActive("woman")}
          onClick={() => handleFilterChange("woman")}
        >
          Woman
        </button>
        <button
          className={isActive("man")}
          onClick={() => handleFilterChange("man")}
        >
          Man
        </button>
        <button
          className={isActive("By name")}
          onClick={() => handleFilterChange("By name")}
        >
          By name
        </button>
        <button
          className={isActive("by age")}
          onClick={() => handleFilterChange("by age")}
        >
          By age
        </button>
      </div>
    </>
  );
}

export default FilterButton;
