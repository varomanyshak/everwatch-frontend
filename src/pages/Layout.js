import { Outlet } from "react-router-dom";
import { Container} from '@themesberg/react-bootstrap';

import Navbar from "../components/Navbar";
const Layout = (props) => {
  return (
    <>
      <Container fluid style={{ overflow: 'auto', paddingTop: '120px'}} >
        <Navbar />
        <Outlet style={{background:'#444', margin:'0'}}/>
      </Container>
    </>
  )
};

export default Layout;