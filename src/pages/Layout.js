import { Outlet, Link } from "react-router-dom";
import { Col, Row, Container, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import GeneralTimeline from "../components/Timeline";
import Logo from "../assets/img/log/ik-logo.svg"
import Sidebar from "../components/Sidebar";
const Layout = (props) => {
  return (
    <>
      <Container fluid>
        <Row>
          {/* <Col> */}
            {/* <GeneralTimeline data = {props.Tabledata} /> */}
            {/* <Sidebar /> */}
          {/* </Col> */}
          <Col>
            {/* <img src={Logo}></img> */}
            <h1>ik tech</h1>
            <Nav variant="pills" activeKey="1" style={{ 'marginBottom': '-50px' }}>
              <NavDropdown title="Data Category" id="nav-dropdown" style={{ 'zIndex': '1007' }}>
                <NavDropdown.Item eventKey="1"><Link to="/">ASN Information</Link></NavDropdown.Item>
                <NavDropdown.Item eventKey="2"><Link to="/azure">Azure Tenant</Link></NavDropdown.Item>
                <NavDropdown.Item eventKey="3"><Link to="/geolocation">Geolocation</Link></NavDropdown.Item>
                <NavDropdown.Item eventKey="4"><Link to="/coderepo">Code Repository</Link></NavDropdown.Item>
                <NavDropdown.Item eventKey="5"><Link to="/dns-name">DNS Name</Link></NavDropdown.Item>
                <NavDropdown.Item eventKey="6"><Link to="/email-address">Email Address</Link></NavDropdown.Item>

                <NavDropdown.Item eventKey="7">Finding</NavDropdown.Item>
                <NavDropdown.Item eventKey="8">Open TCP Port</NavDropdown.Item>
                <NavDropdown.Item eventKey="10">Organization Indication</NavDropdown.Item>
                <NavDropdown.Item eventKey="11">Scanning Information</NavDropdown.Item>
                <NavDropdown.Item eventKey="12">Social Profiles</NavDropdown.Item>
                <NavDropdown.Item eventKey="13">Technology</NavDropdown.Item>
                <NavDropdown.Item eventKey="14">Web Application Firewall (WAF)</NavDropdown.Item>
                <NavDropdown.Item eventKey="15">General URL</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default Layout;