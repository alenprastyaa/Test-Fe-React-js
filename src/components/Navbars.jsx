import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="/">ADMIN </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/penjual">Penjual</Nav.Link>
                        <Nav.Link href="/marketing">Penjualan</Nav.Link>
                        <Nav.Link href="/komisi">Komisi</Nav.Link>
                        <NavDropdown title="Pembayaran" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/list-payment">Histori Pembayaran</NavDropdown.Item>
                            <NavDropdown.Item href="/add-payment">
                                Tambah Pembayaran
                            </NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbars;