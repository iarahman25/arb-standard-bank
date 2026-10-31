import { use, useState } from "react";


function WithdrawForm({ account, setAccount, setTransactions }) {

    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState({
        type: "",
        text: "",
    })

    function handleWithdraw(event) {
        event.preventDefault();
        console.log("Enter Withdrawl Amount:", amount);

        const withdrawAmount = Number(amount);
        const minimumBalance = 500;

        if (
            amount.trim() === "" ||
            !Number.isFinite(withdrawAmount) ||
            withdrawAmount <= 0
        ) {
            setMessage({
                type: "error",
                text: "Please enter a valid amount greater than zero.",
            });
            return;
        }


        console.log("Valid Withdraw Amount:", withdrawAmount);

        if (withdrawAmount > account.balance - minimumBalance) {
            setMessage({
                type: "error",
                text: "Insufficient balance. You must maintain a minimum balance of ৳500.",
            });
            return;
        }

        setMessage({
            type: "",
            text: "",
        });
        console.log("Valid Withdrawl Amount:", withdrawAmount);

        const confirmed = window.confirm(
            `Are you sure you want to withdraw ৳${withdrawAmount.toLocaleString()}?`
        );

        if (!confirmed) {
            return;
        }

        setAccount((previousAccount) => {
            return{
                ...previousAccount,
                balance: Number(
                    (previousAccount.balance - withdrawAmount).toFixed(2)
                ),
                totalWithdrawn: Number(
                    (previousAccount.totalWithdrawn + withdrawAmount).toFixed(2)
                ),
            };
        });

        const newTransaction = {
            id: Date.now(),
            type: 'Withdrawal',
            amount: withdrawAmount,
            date: new Date().toLocaleString(),
        };

        setTransactions((previousTransactions) => {
            return [newTransaction, ...previousTransactions];
        });

        setMessage({
            type: "success",
            text: `৳${withdrawAmount.toLocaleString()} withdrawn successfully.`,
        });

        setAmount("");
    }

    return(
        <div className="withdraw-form">
            <h2>Withdraw Amount</h2>

            <p>
                Available Balance: ৳{account.balance.toLocaleString()}
            </p>

            <form onSubmit={handleWithdraw}>

                <div className="form-group">
                    <label htmlFor="withdrawAmount">Enter Amount (৳)</label>

                    <input
                     type="number" 
                     id="withdrawAmount"
                     step={"any"}
                     placeholder="Enter withdraw amount"
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
                    Withdraw
                </button>
            </form>

            {message.text && (
                <p className={`form-message ${message.type}`}>
                    {message.text}
                </p>
            )}
        </div>
    );
}

export default WithdrawForm;