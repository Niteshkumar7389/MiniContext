import { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>Hi welcome</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
