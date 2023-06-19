import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",

        color: "white",
        flexDirection: "column",
      }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
