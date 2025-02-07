import React from "react";
import AuthButtons from "./Components/authButton";
import Profile from "./Components/profile";

const App = () => {
  return (
    <div className="App">
      <h1>React Auth0 Example</h1>
      <AuthButtons />
      <Profile />
    </div>
  );
};

export default App;