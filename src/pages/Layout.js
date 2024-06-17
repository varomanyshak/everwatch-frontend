import { Outlet, Link } from "react-router-dom";
import { Col, Row, Container, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Layout = () => {
  const dropdownChange = (parm) => {
    console.log(parm);
  }

  return (
    <>
      <Container fluid>
        <Row>
          {/* <Col xs={2}>
            <Sidebar />
          </Col> */}
          <Col>
            <h1>ik tech</h1>
            <Nav variant="pills" activeKey="1">
              <NavDropdown title="Data Category" id="nav-dropdown" onSelect={dropdownChange}>
                <NavDropdown.Item eventKey="1" >ASN Information</NavDropdown.Item>
                <NavDropdown.Item eventKey="2">Azure Tenant</NavDropdown.Item>
                <NavDropdown.Item eventKey="3">Geolocation</NavDropdown.Item>
                <NavDropdown.Item eventKey="4">Code Repository</NavDropdown.Item>
                <NavDropdown.Item eventKey="5">Code Repository</NavDropdown.Item>
                <NavDropdown.Item eventKey="6">DNS Name</NavDropdown.Item>
                <NavDropdown.Item eventKey="7">Email Address</NavDropdown.Item>
                <NavDropdown.Item eventKey="8">Finding</NavDropdown.Item>
                <NavDropdown.Item eventKey="9">Open TCP Port</NavDropdown.Item>
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