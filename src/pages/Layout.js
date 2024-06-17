import { Outlet, Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Col, Container, Row } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <Container fluid>
        <Row>
          {/* <Col xs={2}>
            <Sidebar />
          </Col> */}
          <Col>
            <h1>Sheetdata</h1>
            <Outlet />
          </Col>
        </Row>

      </Container>

      {/* 
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}



    </>
  )
};

export default Layout;