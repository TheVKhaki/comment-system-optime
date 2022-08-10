
// import Payment from "../components/Payment";
import { useEffect, useState } from "react";
// import Payment from "../components/Payment";
// import { ethers } from "ethers";
// import PaymentContractABI from "./paymentABI.json";
import Web3 from "web3";








const Home = () => {
    const ContractABI = [
        {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint16",
                    name: "affiliate_payment_id",
                    type: "uint16"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "affiliate_address",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }
            ],
            name: "AffiliatePayment",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint16",
                    name: "affiliate_payment_id",
                    type: "uint16"
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "buyer_address",
                    type: "address"
                }
            ],
            name: "Payment",
            type: "event"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "affiliate_address",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "affiliate_share",
                    type: "uint256"
                }
            ],
            name: "add_affiliate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [],
            name: "buy",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        },
        {
            inputs: [],
            name: "getBalance",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            name: "shareholders",
            outputs: [
                {
                    internalType: "uint256",
                    name: "share",
                    type: "uint256"
                },
                {
                    internalType: "address",
                    name: "share_address",
                    type: "address"
                }
            ],
            stateMutability: "view",
            type: "function"
        }

    ]

    const providerUrl = 'https://polygon-mainnet.g.alchemy.com/v2/Hls17KjQ5iCo0xhLgg9OySa9WCu3I60c';
    const [web3, setWeb3] = useState(undefined);
    const [accounts, setAccounts] = useState(undefined);
    const [contract, setContract] = useState(undefined);
    const [balance, setBalance] = useState(undefined);
    const [currentTransfer, setCurrentTransfer] = useState(undefined);
    const [current_gas_price, setCurrent_gas_price] = useState(undefined);
    const [current_gas_amount, setCurrent_gas_amount] = useState(undefined);




    useEffect(() => {
        const ConnectToInjected = async () => {
            let provider = null;
            if (typeof window.ethereum !== 'undefined') {
                provider = window.ethereum;
                try {

                    const accounts = await provider.request({ method: 'eth_requestAccounts' })
                    console.log("account selected: ", accounts)
                    setAccounts(accounts[0]);

                } catch (error) {
                    throw new Error("User Rejected");
                }
            } else if (window.web3) {
                provider = window.web3.currentProvider;
            } else if (window.celo) {
                provider = window.celo;
            } else {
                throw new Error("No Web3 Provider found");
            }
            return provider;
        };

        const init = async () => {
            const provider = await ConnectToInjected();
            console.log('provider is : ', provider);
            const web3 = await new Web3(
                provider
            );
            //  console.log(account)
            const networkId = await web3.eth.net.getId();
            const contract = new web3.eth.Contract(
                ContractABI,
                process.env.REACT_APP_CONTRACT_ADDRESS
            );
            const gas_price = await web3.eth.getGasPrice();
            console.log("gas_price: ", gas_price)
            setCurrent_gas_price(gas_price)
            setWeb3(web3);
            setContract(contract);
        };
        init();
        window.ethereum.on("accountsChanged", (accounts) => {
            console.log(accounts);
            setAccounts(accounts);
        });
    }, []);




    function set_input_value(value) {
        const buyinput = document.getElementById("buy_input");
        buyinput.value = value;
    }
    function get_buy_input_value() {
        return document.getElementById("buy_input").value;
    }
    function __clickOnQuickbuy(event) {
        console.log("Quick Buy Value : ", event.currentTarget.dataset.value)
        set_input_value(event.currentTarget.dataset.value);
        OnBuy();
    }


    function OnBuy() {

        const buy_value = get_buy_input_value();
        if (buy_value > 0) {

            console.log('buy_value is: ', buy_value);
            const buy_value_in_wei = Math.pow(10, 18) * buy_value;
            console.log('gas price: ', current_gas_price)
            console.log(' current_gas_amount: ', current_gas_amount)
            const tx = contract.methods.buy().send({
                from: accounts,
                value: buy_value_in_wei,
                gasPrice: current_gas_price,
                gas: 338370
            }).on('receipt', receipt_transaction).on("transactionHash", transaction_hash_generates).on("confirmation", transaction_confirmation);
            console.log(tx);
        } else {
            alert("enter valid amout");
        }
    }
    function receipt_transaction(receipt) {
        console.log("receipt_transaction", receipt);
    }
    function transaction_hash_generates(hash) {
        console.log("transactionHash", hash);

    }
    function transaction_confirmation(confirmationNumber, receipt) {
        console.log("confirmation-confirmationNumber", confirmationNumber);
        console.log("confirmation-receipt", receipt);

    }

    return (
        <>

            <main className="container">
                <div className="row mt-5" id="web3_status"> </div>
                <div className="row ">
                    <div className="form-group">
                        <label>Quick payment:</label>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <button className="btn btn-success col-12" onClick={__clickOnQuickbuy} data-value="50" >50 Matic</button>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-success col-12" onClick={__clickOnQuickbuy} data-value="150">150 Matic</button>
                        </div>
                        <div className="col-3">
                            <button data-value="250" className="btn btn-success col-12" onClick={__clickOnQuickbuy}>250 Matic</button>
                        </div>
                        <div className="col-3">
                            <button data-value="350" className="btn btn-success col-12" onClick={__clickOnQuickbuy}>350 Matic</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label >Amount to buy in eth:</label>
                        <input type="text" className="form-control" placeholder="Enter amount to buy" id="buy_input" />
                    </div>

                    <button className="btn btn-primary mt-2" onClick={OnBuy}>Buy</button>
                </div>
                <div className="row">
                    <h3>Payment Transactions:</h3>
                </div>
                <div className="row" id="transactions">

                </div>
            </main>

        </>
    );
};

export default Home;
