import { Outlet, Link } from "react-router-dom";
import { Col, Row, Container, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import GeneralTimeline from "../components/Timeline";
import Logo from "../assets/img/log/ik-logo.svg"
import Navbar from "../components/Navbar";
const Layout = (props) => {
  return (
    <>
      <Container fluid style={{ overflow: 'auto', paddingTop: '120px' }} >
        <Navbar />
        <Outlet />
      </Container>
    </>
  )
};

export default Layout;