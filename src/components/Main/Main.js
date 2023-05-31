
import React from "react";
import './Main.Style.css';


class Main extends React.Component{
    carlist =(list) => {
        return list.map((product) =>{
            return (
            <ul key={product.id}>
            <li className="left-sidebar">Library: {product.library}</li>
            </ul>
            );
        });
    };
    render(){
        
    return (
            <div className="main-page">
                    <div className="left-column">
                        <h2>I'm learning React</h2>
                        {this.carlist(this.props.frame)}
                        <img className=" img-responsive" src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*kxBdslclglg4zgCw0NMIIA.png" aria-hidden alt="Left Image" />
                        </div>
                    <div className="right-column">
                        <h2>I'm learning React</h2>
                        <img className="img-responsive right-img" src="https://codeflarelimited.com/blog/wp-content/uploads/2021/01/react-one.jpg.webp" aria-hidden alt="Right Image" />
                    </div>
                    
            </div>
            );
        }
            
    }
            
            
    export default Main;
    