import './AppNav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png';
import { useEffect, useState } from 'react';

function AppNav() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else setScrolled(false)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])
    
    return (
        <nav className='position-fixed w-100 z-3'>
            <Navbar expand="lg" className={`${scrolled ? `navbar-parent-shadow` : `navbar-parent`} bg-body-white`}>
                <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={Logo}
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-bar-links ms-auto fw-bold">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about-us">About Us</Nav.Link>
                        <Nav.Link href="#explore-foods">Explore Foods</Nav.Link>
                        <Nav.Link href="#reviews">Reviews</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                        <Nav.Link href="tel:+1800 789 123" className='phonenumber'>1800 789 123</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
}

export default AppNav;