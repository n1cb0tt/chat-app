import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Lori Hunter"
        avatar="https://randomuser.me/api/portraits/women/50.jpg"
        online
      />
      <Contact
        name="Zack Silva"
        avatar="https://randomuser.me/api/portraits/men/66.jpg"
      />
      <Contact
        name="Georgia Shelton"
        avatar="https://randomuser.me/api/portraits/women/81.jpg"
        online
      />
    </div>
  );
}

export default App;
