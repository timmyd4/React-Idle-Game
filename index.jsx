import {createRoot} from "react-dom/client";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Game from "./Components/Game.jsx";
import Error from "./Components/Error.jsx";
const root = createRoot(document.querySelector("#root"));
root.render
(
    <>
    <Error/>
        <div className="whole-container">
            <Header />
            <Game />
            <Footer />
        </div>
    </>
)