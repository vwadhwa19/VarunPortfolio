import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import '../styles/Header.css';


function Header() {

    return (
        <div className='container'>
            <Navbar className='header-navbar' collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Navbar.Brand><i className="fa fa-vk" aria-hidden="true"></i> Varun | Portfolio</Navbar.Brand>
                <Navbar.Toggle arai-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="ml-auto">
                        <Nav.Link as={NavLink} to='/'> Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
                        <Nav.Link as={NavLink} to='/experiences'>Experiences</Nav.Link>
                        <Nav.Link as={NavLink} to='/photos'>Photos</Nav.Link>
                        <Nav.Link as={NavLink} to='/contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header; 