import TransactionItem from "./TransactionItem";

function TransactionList({ transactions }) {
    console.log("Transaction received:", transactions)
    return(
        <div className="transaction-list">
            {transactions.length === 0 ? (
                <p className="empty-message">
                    No transactions yet.
                </p>
            ) : (
                transactions.map((transaction) => {
                    return(
                        <TransactionItem
                        key={transaction.id}
                        transaction={transaction}
                    />
                    );
                    
                })
            )}
        </div>
    );
}

export default TransactionList;