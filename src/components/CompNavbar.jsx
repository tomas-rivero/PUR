import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavLink, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const CompNavbar = () => {
    const [backgroundcolor, setBackgroundcolor] = useState('noScrolled')

    document.addEventListener("scroll", () => {
        window.scrollY > 100 ? setBackgroundcolor('scrolled') : setBackgroundcolor('noScrolled')
    });

    return (
        <Navbar fixed="top" className={'fw-bolder navbarBackground ' + backgroundcolor} expand='sm' collapseOnSelect data-bs-theme="dark"  >
            <Container fluid>

                <NavLink to="/" as={Link}>
                    <Navbar.Brand>
                        <img src="../img/iconPUR-lineas.png" alt="" width="30" height="30" />
                    </Navbar.Brand>
                </NavLink>

                <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav className='ms-auto'>

                        <NavLink as={Link} eventKey="1" to='/' className="nav-link active">PUR</NavLink>

                        <NavDropdown id="nav-dropdown-dark-example" title="Áreas" menuVariant="dark">
                            <NavLink eventKey="2" as={Link} to='areas/sociales' className="nav-link navDropdown">Sociales</NavLink>
                            <NavLink eventKey="3" as={Link} to='areas/ecopuring' className="nav-link navDropdown">Ecopuring</NavLink>
                            <NavLink eventKey="4" as={Link} to='areas/arteydisenio' className="nav-link navDropdown">Arte y diseño</NavLink>
                            <NavLink eventKey="5" as={Link} to='areas/salud' className="nav-link navDropdown">Salud</NavLink>
                        </NavDropdown>

                        <NavDropdown id="nav-dropdown-dark-example" title="Equipos" menuVariant="dark">
                            <NavLink eventKey="6" as={Link} to='equipos/comunicacion' className="nav-link navDropdown">Comunicacion</NavLink>
                            <NavLink eventKey="7" as={Link} to='equipos/integracion' className="nav-link navDropdown">Integracion</NavLink>
                            <NavLink eventKey="8" as={Link} to='equipos/fye' className="nav-link navDropdown">Formacion y espiritualidad</NavLink>
                            <NavLink eventKey="9" as={Link} to='equipos/cordinacion' className="nav-link navDropdown">Cordinacion</NavLink>
                        </NavDropdown>

                        <NavLink eventKey="10" as={Link} to="/sanpantaleon" className="nav-link active">Sede</NavLink>
                        <NavLink eventKey="11" as={Link} to='/manosalaobra' className="nav-link active">Manos a la Obra</NavLink>


                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >

    )
}
