import { useState } from "react";
import { useNavigate } from "react-router-dom";
import create from "../../../services/products/create";
import Page from "../../shared/Page.jsx";

function ProductCreatePage() {
    const [product, setProduct] = useState({ name: "", sku: "", unit: "", ammount: 0 });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        create(product).then(() => {
            navigate("/products");
        }).finally(() => {
            setLoading(false);
        })
    }

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    return (
        <Page>
            <h1>Crear producto</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" name="name" value={product.name} onChange={handleChange} required />
                    <div className="form-text">Ingrese el nombre del producto</div>
                    <div className="invalid-feedback">
                        Por favor ingrese un nombre válido
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="sku" className="form-label">SKU</label>
                    <input type="text" className="form-control" id="sku" name="sku" value={product.sku} onChange={handleChange} required />
                    <div className="form-text">Ingrese el SKU del producto</div>
                    <div className="invalid-feedback">
                        Por favor ingrese un SKU válido
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="unit" className="form-label">Unidad</label>
                    <input type="text" className="form-control" id="unit" name="unit" value={product.unit} onChange={handleChange} required />
                    <div className="form-text">Ingrese la unidad del producto</div>
                    <div className="invalid-feedback">
                        Por favor ingrese una unidad válida
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="ammount" className="form-label">Cantidad</label>
                    <input type="number" className="form-control" id="ammount" name="ammount" value={product.ammount} onChange={handleChange} required />
                    <div className="form-text">Ingrese la cantidad del producto</div>
                    <div className="invalid-feedback">
                        Por favor ingrese una cantidad válida
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Guardando..." : "Guardar"}
                </button>
            </form>
        </Page>
        
        
    )
}

export default ProductCreatePage