
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownButton, NavDropdown } from 'react-bootstrap';

export const CompNavbar = () => {
    return (
        <Navbar fixed="top" className="fw-bolder bg-dark" collapseOnSelect expand="lg" data-bs-theme="dark"  >
            <Container>


                <NavLink to="/">
                    <Navbar.Brand>
                        <img src="../img/iconPUR-lineas.png" alt="" width="30" height="30" />
                    </Navbar.Brand>
                </NavLink>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ms-auto">



                        <NavDropdown id="nav-dropdown-dark-example" title="PUR" menuVariant="dark">
                            <NavLink to='/' className="nav-link navDropdown">Inicio</NavLink>
                            <NavLink to='/pur/nosotros' className="nav-link navDropdown">Nosotros</NavLink>
                            <NavLink to='/pur/integrantes' className="nav-link navDropdown">Areas/Equipos</NavLink>
                        </NavDropdown>







                        <NavLink to="/sanpantaleon" className="nav-link active">Sede</NavLink>
                        <NavLink to='/manosalaobra' className="nav-link active">Manos a la Obra</NavLink>


                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >

    )
}
