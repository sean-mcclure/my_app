import "./App.css";

import Buttons from "./Buttons";

function MyApp() {
    return(
        <div className="wrapper">
            <div className="item">
                <img className="logo" src="https://bit.ly/39Xa87U" alt="logo"></img>
            </div>
            <div className="item"></div>
            <div className="item">
                 <Buttons/>
            </div>
            <div className="item"></div>
        </div>
    )
}

export default MyApp;




