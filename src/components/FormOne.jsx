import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

function FormOne() {
  const [text, setText] = useState({
    fname: "",
    lname: "",
    email: "",
    dateob: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setText((prevText) => {
      return {
        ...prevText,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    console.log(text);

    setText({
      fname: "",
      lname: "",
      email: "",
      dateob: "",
    });

    console.log(text);

    event.preventDefault();
  }

  return (
    <div>
      <form className="sub-form">
        <h4 className="sub-heading">Personal Details / व्यक्तिगत विवरण</h4>

        <div className="input-div">
          <label>First Name: </label>
          <input
            name="fname"
            onChange={handleChange}
            value={text.fname}
            placeholder="Enter your First Name."
          />
        </div>

        <div className="input-div">
          <label>Last Name: </label>
          <input
            name="lname"
            onChange={handleChange}
            value={text.lname}
            placeholder="Enter your Last Name."
          />
        </div>

        <div className="input-div">
          <label>Eamil: </label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={text.email}
            placeholder="Enter your Email Address."
          />
        </div>

        <div className="input-div">
          <label>DOB: </label>
          <input
            name="dateob"
            type="date"
            onChange={handleChange}
            value={text.dateob}
            placeholder="Enter your Date of Birth."
          />
        </div>

        <Fab onClick={handleClick}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default FormOne;
