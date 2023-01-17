import { Dropdown } from "react-bootstrap";
const Table = ({data}) => {
    return (
      <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">
                <input className="form-check-input" type="checkbox" value="" id="checkAll" />
              </th>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Company</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ name, username, email, company }) => (
              <tr key={name + username}>
                <td>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
                <td>
                  <img
                    src={`https://via.placeholder.com/40x40/454752/ffffff?text=${name
                      .replace(/^M(r|s|rs)\./, "")
                      .replace(/\s+/g, "")
                      .slice(0, 1)}`}
                    alt=""
                    className="img-fluid rounded-circle border"
                  />
                </td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{company.name}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" className="text-primary dropdown-action" id="dropdown-basic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-three-dots-vertical"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Sit Amet</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Consectetur</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-3" className="text-danger">
                        Lorem Ipsum
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}

export default Table;