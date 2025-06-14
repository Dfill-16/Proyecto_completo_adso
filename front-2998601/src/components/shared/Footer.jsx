import {Link} from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className="footer mt-auto py-3 bg-body-tertiary text-right">
                <p>© 2023 Adso. Todos los derechos reservados.<Link to="" className="ms-auto">Política de privacidad</Link></p>
            </footer>
        </>
    )
}

export default Footer