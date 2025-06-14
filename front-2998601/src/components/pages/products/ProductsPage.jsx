import { useEffect, useState } from "react";
import getAll from "../../../services/products/getAll.js";
import Table from "./Table.jsx";
import Page from "../../shared/Page.jsx";
import { Link } from "react-router-dom";

function ProductsPage() {
    const [products, setProducts] = useState({ data: [] });
    const [loading, setLoading] = useState(true);

    const fetchProducts = () => {
        getAll().then((data) => {
            setProducts( data );
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) return <p>Cargando productos...</p>

    return (
        <Page>
            <h1>Productos <Link to="/products/create" className="btn btn-primary">Crear producto</Link></h1>
            <Table products={products} onItemDelete={fetchProducts} />
        </Page>
    )
}

export default ProductsPage;
