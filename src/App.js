import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      {/* <h1>Let's Build a MERN Whatsapp Clone</h1> */}
      <div className="app__body">
        {/* SiderBar */}
        <Sidebar />
        {/* Chat Component */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
