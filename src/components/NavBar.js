import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { FaGithubAlt, FaStackOverflow, FaDiscord } from "react-icons/fa";
import { GiLotus, GiSpedometer } from "react-icons/gi";
// import {IoSpeedometer, IoMdSpeedometer, IoSpeedometerOut, IoSpeedometerSha} from "react-icons/Io";
import {
  AiOutlineeArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiOutlineArrowsAlt,
} from "react-icons/ai";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }
  return (
    <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="home">
          {" "}
          <GiLotus alt="Logo" /> Shanel Hickman Whitmore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <span className="navbar-toggler-icon"></span>
        <Navbar.Collapse id="basic-navbar nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              } onClick={()=> onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              } onClick={()=> onUpdateActiveLink('about')}
            >
              About
            </Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown" className="dropdown">
              <NavDropdown.Item href="#action/1.1">
                JS Project 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">
                JS Project 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">
                JS Project 3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2.1">
                Java Project{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">
                Python Project{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.3">
                Ruby Project
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">
                Basic HTML & CSS Project
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Brand Identity Project
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Data Analysis Project
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.github.com/shanelhw">
                <FaGithubAlt  className='icon'/>
              </a>
              <a href="https://www.stackoverflow.com">
                <FaStackOverflow className='icon'/>
              </a>
              <a href="https://www.discord.com">
                <FaDiscord className='icon'/>
              </a>
            </div>
            <button className="shw" onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
