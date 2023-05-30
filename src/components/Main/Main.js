import React from "react";
import './Main.Style.css';

class Main extends React.Component {
    render() {
        return (
                <div className="main-page">
                    <div className="left-column">
                        <h2>I'm learning React</h2>
                        <img className=" img-responsive" src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*kxBdslclglg4zgCw0NMIIA.png" aria-hidden alt="Left Image" />
                        <ul className="left-sidebar">
                            <li>About react</li>
                            <li>Lesson</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="right-column">
                        <h2>I'm learning React</h2>
                        <img className=" img-responsive" src="https://codeflarelimited.com/blog/wp-content/uploads/2021/01/react-one.jpg.webp" aria-hidden alt="Right Image" />
                    </div>
                </div>
            );
        }
    }
            
            
    export default Main;
    