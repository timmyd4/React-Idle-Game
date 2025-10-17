import {createRoot} from "react-dom/client";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Game from "./Components/Game.jsx";
const root = createRoot(document.querySelector("#root"));
root.render
(
    <>
    <Header />
        <div className="whole-container">
            <Game />
            <Footer/>
        </div>
    
    </>
)