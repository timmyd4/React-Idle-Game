import {createRoot} from "react-dom/client";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
const root = createRoot(document.querySelector("#root"));
root.render
(
    <>
        <Header />
        <Footer />
    </>
)