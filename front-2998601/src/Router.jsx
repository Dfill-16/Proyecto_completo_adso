import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./components/pages/products/ProductsPage";
import ProductCreatePage from "./components/pages/products/ProductCreatePage";
import ProductEditPage from "./components/pages/products/ProductEditPage";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/create" element={<ProductCreatePage />} />
                <Route path="/products/edit/:id" element={<ProductEditPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
