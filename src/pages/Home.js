import React from "react";
import UserForm from "../components/UserForm";

const Home = () => {
  return (
    <div
      className="container"
      style={{
        overflow: "auto",
        minHeight: "-webkit-fill-available",
        maxHeight: "100%",
        paddingTop: "30px",
        paddingRight: "auto",
      }}
    >
      <UserForm />
    </div>
  );
};

export default Home;
