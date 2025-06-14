import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Page({ children }) {

    return (
        <>
            <div className="d-flex flex-column min-vh-100">

                <Navbar expand="lg" className='bg-body-tertiary'>
                    <Container>
                        <Navbar.Brand>Inventario de productos</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/" className="nav-link">Home</Link>
                                <Link to="/products" className="nav-link">Productos</Link>
                                <Link to="/movements" className="nav-link">Movimientos</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <main className="flex-fill">
                    <Container>
                        {children}
                    </Container>
                </main>
                
                <Footer />
            </div>
        </>
    )
}

export default Page