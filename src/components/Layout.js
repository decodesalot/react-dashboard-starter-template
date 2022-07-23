import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Header from "./Header";
const Layout = (props) => {
  const [showSidebar, setSidebar] = useState(false);
  const handleSidebar = (e) => {
    showSidebar ? setSidebar(false) : setSidebar(true);
  };
  return (
    <>
      <Container fluid className="mb-4">
        <Row>
          <Sidebar showSidebar={showSidebar} />
          <Header handleSidebar={handleSidebar} />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {props.children}
          </main>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
