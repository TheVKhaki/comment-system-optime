import CardTable from "../components/CardTable";
import logoUSDT from "../images/tether.png";
import logoETH from "../images/ethereum.png";
import logoCreditCard from "../images/credit-card.png";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function ModalBuyPackage(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}

      <div className="modal-buy">
        <ul>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
            ut?
          </p>
          <li>1000$</li>
          <li>2000$</li>
          <li>3000$</li>
          <li>4000$</li>
          <button>Accept</button>
        </ul>
      </div>
    </Modal>
  );
}

const PrivateSale = () => {
  const [showNetwork, setShowNetwork] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleClickConnectWallet = () => {
    setShowNetwork(true);
  };
  const handleClickNetwork = () => {
    setShowModal(true);
  };
  return (
    <>
      <section className="price-list">
        <div className="price-list-card">
          <div className="wrapper-price-list-card">
            <h1>Private Sale</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam
              nostrum minus illo! Accusantium dolores cum repudiandae nemo
              excepturi? Earum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam
              nostrum minus illo! Accusantium dolores cum repudiandae nemo
              excepturi? Earum?
            </p>
            {showNetwork ? (
              <ul>
                <li onClick={handleClickNetwork}>
                  <img src={logoETH} alt="" /> ETH
                </li>
                <li onClick={handleClickNetwork}>
                  <img src={logoUSDT} alt="" /> USDT
                </li>
                <li onClick={handleClickNetwork}>
                  <img src={logoCreditCard} alt="" /> CARD
                </li>
              </ul>
            ) : (
              <button onClick={handleClickConnectWallet}>Connect Wallet</button>
            )}
          </div>
        </div>
        <CardTable />
      </section>
      <ModalBuyPackage show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
};
export default PrivateSale;
