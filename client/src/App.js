import React, { Fragment, useState } from "react";
import { BioProvider } from './BioContext';
import Graph from "./components/Graph.js"
import Overview from "./components/Overview.js"
import Parameter from "./components/Parameter.js"
import Score from "./components/Score.js"
import './App.css';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <BioProvider>
    <div className="container">
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        {isSidebarOpen && <p>Sidebar content here</p>}
      </div>
      <div className={`main ${isSidebarOpen ? 'with-sidebar' : 'without-sidebar'}`}>
        <h1>Main Screen</h1>
        <p>Main content goes here</p>
      </div>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isSidebarOpen ? '❮' : '❯'}
      </button>
    </div>
    </BioProvider>
  );
};

export default App;