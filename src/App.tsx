import React from "react";
import "./App.css";
import JobList from "./components/Job/JobList";
import JobProvider from "./components/Job/JobProvider";


const App: React.FC = () => {
  return (
    <div className="App ">
      <JobProvider >
        <JobList />
      </JobProvider>
    </div>
  );
};

export default App;
