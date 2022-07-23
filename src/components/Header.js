import {Button, Col, Row} from 'react-bootstrap';
const Header = ({handleSidebar}) => {
  return (
    <>
      <nav className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-md-3 bg-white shadow-sm">
        <Row>
          <Button
            className="btn btn-link"
            onClick={handleSidebar}
            id="sidebar-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </Button>
          <Col md={4} className="ps-md-2 ps-4">
            <form role="search">
              <div className="search-group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </div>
            </form>
          </Col>
          <Col md={8}>
            <div className="dropdown text-end dropdown-usrn">
              <a
                href="#"
                className="link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://via.placeholder.com/32/454752/ffffff?text=D"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle me-1"
                />
                decodesalot
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </nav>
    </>
  );
};

export default Header;