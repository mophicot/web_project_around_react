//App.jsx

import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// import logo from "./images/AroundTheUS.png";
// import avatar from "./images/Avatar.png";
// import editButton from "./images/EditButton.png";
// import addButton from "./images/AddButton.png";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="page">
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
