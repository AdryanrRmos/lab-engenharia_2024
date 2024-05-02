import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Atividade01 from "./Atividade01/Atividade01";
export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Atividade01" element={<Atividade01/>}/>
            </Routes>
        </BrowserRouter>
    );
}