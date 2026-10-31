function TransactionItem({ transaction }) {
    return(
        <div className={`transaction-item ${transaction.type.toLowerCase()}`}>
            <h3>{transaction.type}</h3>

            <p>Amount: ৳{transaction.amount.toLocaleString()}</p>
            <p>Date: {transaction.date}</p>
        </div>
    );
}


export default TransactionItem;