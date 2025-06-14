import { useState } from "react";
import { Table as Btable, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import destroy  from "../../../services/products/destroy";

function Table({ products, onItemDelete }) {
    const [deleting, setDeleting] = useState(false);

    const navigate = useNavigate();

    const handleDelete = (id) => {
        setDeleting(true);
        
        destroy(id).then(() => {
            if(onItemDelete){ 
                onItemDelete() 
            } 
        }). finally(() => {
            setDeleting(false);

        })
    }

    const handleClickUpdate = (id) => {
        navigate(`/products/edit/${id}`);
    }

    return (
        <Btable striped bordered hover>
            <thead>
                <tr>
                    <th>SKU</th>
                    <th>Nombre</th>
                    <th>Unidad</th>
                    <th>Cantidad</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {products?.data?.map((product) =>{
                    const { sku, name, unit, ammount } = product;
                    return (
                        <tr key={product.id}>
                            <td>{sku}</td>
                            <td>{name}</td>
                            <td>{unit}</td>
                            <td>{ammount}</td>
                            <td>
                                <Button variant="danger" size = "sm" onClick={() => handleDelete(product.id)} disabled={deleting}>Eliminar</Button>
                                <Button variant="primary" size="sm" onClick={() => handleClickUpdate(product.id)}>Editar</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Btable>
    )
}

export default Table;
