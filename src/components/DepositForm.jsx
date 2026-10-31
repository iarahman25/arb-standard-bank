import { useState } from "react";

function DepositForm({ account, setAccount, setTransactions }) {
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState({
        type: "",
        text: "",
    });
    function handleDeposit(event) {
        event.preventDefault();
        console.log('Entered Amount:', amount);
        const depositAmount = Number(amount);
        if (
            amount.trim() === '' ||
            !Number.isFinite(depositAmount) ||
            depositAmount <= 0
        ) {
            setMessage({
                type: "error",
                text: "Please enter a valid amount greater than zero",
            });
            return;
        }
        setMessage("");
        console.log("valid Deposit Amount:", depositAmount);
        setAccount((previousAccount) => {
            return {
                ...previousAccount,

                balance: Number(
                    (previousAccount.balance + depositAmount).toFixed(2)
                ),

                totalDeposited: Number(
                    (previousAccount.totalDeposited + depositAmount).toFixed(2)
                ),
            };
        });

        const newTransaction = {
            id: Date.now(),
            type: "Deposit",
            amount: depositAmount,
            date: new Date().toLocaleString(),
        };

        setTransactions((previousTransactions) => {
            return [newTransaction, ...previousTransactions];
        });

        setMessage({
            type: "success",
            text: `৳${depositAmount.toLocaleString()} deposited successfully.`,
        });

        setAmount("");
    }
    return(
        <div className="deposit-form">
            <h2>Deposit Amount</h2>
            <p>
                Available Balance: ৳{account.balance.toLocaleString()}
            </p>

            <form onSubmit={handleDeposit}>
                <div className="form-group">
                    <label htmlFor="depositAmount">Enter Amount (৳)</label>
                    <input
                     type="number"
                     id="depositAmount"
                     step="any"
                     placeholder="Enter deposit amount"
                     value={amount}
                     onChange={(event) => {
                        setAmount(event.target.value);
                        setMessage({
                            type: "",
                            text: "",
                        });
                     }}
                     />
                </div>

                <button type="submit" className="submit-button">
                    Deposit
                </button>
            </form>

            {message.text && (
                <p className={`form-message ${message.type}`} role="status">
                    {message.text}
                </p>
            )}
        </div>
    );
}

export default DepositForm;