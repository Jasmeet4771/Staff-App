
import { useState, useContext } from "react";
import "../App.css";
import Cardlist from "../Cardlist";
import Header from "../Header";
import "../header.css";
import { StaffContext } from "../context/StaffContext";

function Homepage() {
  const [searchTerm, setsearchterm] = useState("");

  // Call useContext at the component's top level
  const { uploadStaff } = useContext(StaffContext);

  function handlechange(event) {
    setsearchterm(event.target.value);
  }

  return (
    <div>
      <div className="head">
        <Header heading="Staff List SIT313" />

        <input
          type="text"
          placeholder="search the staff"
          value={searchTerm}
          onChange={handlechange}
        />

        <br />
        <br />

        
      </div>

      <Cardlist searchstaff={searchTerm} />
    </div>
  );
}

export default Homepage;
