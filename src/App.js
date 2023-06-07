// import { createElement } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { FRAME } from "./components/Constants/Constants";

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
      <Main frame={FRAME} />
      <Footer />
    </div>
  );
};

export default App;
