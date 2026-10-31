import TransactionList from "../components/TransactionList";


function Transactions({ transactions }) {
    return(
        <section className="transaction-page">
            <h1>Transaction History</h1>
            <TransactionList transactions={transactions} />
        </section>
    );
}

export default Transactions;