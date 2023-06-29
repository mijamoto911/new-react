import React from "react";
import { Outlet } from "react-router-dom";

import "./Main.Style.css";

// class Main extends React.Component {
//   render() {
//     return (
//       <div className="main-page">
//         <Outlet />
//       </div>
//     );
//   }
// }
const Main = () => {
  return (
    <div className="main-page">
      <Outlet />
    </div>
  );
};
export default Main;
