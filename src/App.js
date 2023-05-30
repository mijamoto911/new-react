// import { createElement } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const App = () => {
    return (
        <div className = "App" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Header />
            <Main />
            <Footer /> 
            
        </div> 
        );
};

export default App;