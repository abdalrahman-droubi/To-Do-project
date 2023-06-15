import React from "react";
import List from "../Components/list";
export default function Home() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "200px",
          background: "linear-gradient(to bottom, #058dcb, white)",
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="text-2xl">Welcome to Your To-Do App</h1>
        <br />
        <p>Stay organized and manage your tasks efficiently.</p>
      </div>

      <List />
    </>
  );
}
