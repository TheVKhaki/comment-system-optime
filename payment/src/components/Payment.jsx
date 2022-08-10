import { useEffect } from "react";




const Payment = (tx_hash, sender_address, to_contract, value, gas_used, tx_data) => {

    return (
        <>
            <div className="col-12 text-center"><p>TX:{tx_hash}</p></div>
            <div className="row">
                <div className="col-6"><h3>Sender Address: </h3><p>{sender_address}</p></div>
                <div className="col-6"><h3>To Contract Address: </h3><p>{to_contract}</p></div>
            </div>
            <div className="row">
                <div className="col-3"><p>Value: {value}</p></div>
                <div className="col-3"><p>Gas Used: {gas_used}</p></div>
                <div className="col-3"><p>TX Data: {tx_data}</p></div>
            </div>
            <div className="col-12"><h3>Events</h3></div>

        </>
    );
};

export default Payment;
