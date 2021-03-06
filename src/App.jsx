import logo from "./logo.svg";
import "./App.css";
import Task from "./components/Task";
import UserInfo from "./components/UserInfo";
import { useState } from "react";



function App() {
  const [user, setUser] = useState({
    avatar: "string",
    name: "タスク・管理・アプリ♥♥♥",
  });


  return (
    <div className="container  ">
      <div className="custom-container rounded mx-auto bg-light shadow popup">
        {/* App title section  */}
        <UserInfo user={user}></UserInfo>
        
        {/* Todo list section  */}
        <Task></Task>
      </div>
    </div>
  );
}

export default App;
