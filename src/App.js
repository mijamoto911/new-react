// import { createElement } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const App = () => {
    const darkMode = false;
    const frame = [{
        library: 'React',
        color: 'blue',
        initialRelease: 2013,
        id: 0.
    },{
        library: 'Vue',
        color: 'green',
        initialRelease: 2014,
        id: 1,
    },{
        library: 'Angular',
        color: 'red',
        initialRelease: 2016,
        id: 2,
    },
];
    return (
        <div className = "App" style={{
            minHeight: '100vh',
            display: 'flex',
            color: darkMode ? 'green' : 'red',
            flexDirection: 'column',
        }}>
            <Header />
            <Main frame={frame}/>
            <Footer /> 
        </div> 
        );
};

export default App;