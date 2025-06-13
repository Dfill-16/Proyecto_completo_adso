import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Table from "./components/pages/products/Table";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Table />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
