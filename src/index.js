// 1. Import the React and ReactDOM libraries/module or package
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';


// 2. Get a reference to the div with id root
const element = document.getElementById("root");

// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(element);

//4. Show the component on the screen
root.render(<App />);
