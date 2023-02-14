import { Dropdown } from "react-bootstrap";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function CardTable() {
  return (
    <div className="invite-links">
      <div className="header-invite-links">
        <h2>History</h2>
      </div>
      <div className="table-responsive">
        <div className="table-crypto-payouts ">
          <table>
            <thead>
              <tr>
                <th scope="col">Label</th>
                <th scope="col">Transaction</th>
                <th scope="col"></th>
                <th scope="col">Created</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>label 002</td>
                <td>02/12/2020 10:45</td>
                <td>
                  <FontAwesomeIcon icon={faCopy} color="#fff" />
                </td>
                <td>02/12/2020 10:45</td>
                <td>
                  <span className="badge badge-light-success">New</span>
                </td>
              </tr>
              <tr>
                <td>label 023</td>
                <td>02/12/2020 10:45</td>
                <td>
                  <FontAwesomeIcon icon={faCopy} color="#fff" />
                </td>
                <td>02/12/2020 10:45</td>
                <td>
                  <span className="badge badge-light-danger">New</span>
                </td>
              </tr>
              <tr>
                <td>label 125</td>
                <td>02/12/2020 10:45</td>
                <td>
                  <FontAwesomeIcon icon={faCopy} color="#fff" />
                </td>
                <td>02/12/2020 10:45</td>
                <td>
                  <span className="badge badge-light-warning">New</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
