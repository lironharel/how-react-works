import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <div>
      <h2>Online Friends:</h2>
      <ul>
         <OnlineFriend fullName={"Liron Harel"} />
         <OnlineFriend fullName={"Adam Levi"} />
         <OnlineFriend fullName={"Michal Shefler"} />
      </ul>
   </div>
);

// OnlineFriend component code
function OnlineFriend({ fullName }) {
   return (
      <li>
         <img src="./person.png" />
         <span>{fullName}</span>
      </li>
   );
}
