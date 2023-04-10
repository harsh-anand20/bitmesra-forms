import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Theme from "./Theme";
import { useParams, useNavigate } from "react-router-dom";
import fireDB from "../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formOneStatus, setFormOneStatus] = useState("");
  const [formTwoStatus, setFormTwoStatus] = useState("");

  useEffect(() => {
    const formsRef = fireDB.child("pretermData");
    const query = formsRef.orderByChild("searchID").equalTo(id);
    query.once("value").then((snapshot) => {
      snapshot.forEach((child) => {
        const form = child.val();
        setFormOneStatus(form.formOneStatus);
        setFormTwoStatus(form.formTwoStatus);
      });
    });
  }, [id]);

  function handleFormOneClick() {
    if (formOneStatus === "Filled") {
      toast.success("Form Already Submitted!");
      setTimeout(() => toast.success("Fetching Form One Data!"), 1000);
      setTimeout(() => navigate(`/form-one-data/${id}`), 7000);
    } else {
      toast.success("Fetching Form One!");
      setTimeout(() => navigate(`/form-one/${id}`), 6000);
    }
  }

  function handleFormTwoClick() {
    if (formTwoStatus === "Filled") {
      toast.success("Form Already Submitted!");
      setTimeout(() => toast.success("Fetching Form Two Data!"), 1000);
      setTimeout(() => navigate(`/form-two-data/${id}`), 7000);
    } else {
      toast.success("Fetching Form Two!");
      setTimeout(() => navigate(`/form-two/${id}`), 6000);
    }
  }

  return (
    <div className="home-page">
      <h4 className="home-heading">
        Welcome! Please select the form you want to fill.
      </h4>

      <Button
        variant="contained"
        className="home-button"
        theme={Theme}
        onClick={handleFormOneClick}
      >
        Form One
      </Button>
      <br />
      <Button
        variant="contained"
        className="home-button"
        theme={Theme}
        onClick={handleFormTwoClick}
      >
        Form Two
      </Button>
      <ToastContainer />
    </div>
  );
}

export default Home;
