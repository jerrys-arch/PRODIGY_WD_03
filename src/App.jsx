import React from "react";
import TicTacToe from "./TicTacToe";
import "./index.css";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <TicTacToe />
    </div>
  );
};

export default App;
