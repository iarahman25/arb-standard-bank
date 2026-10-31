import DepositForm from "../components/DepositForm";

function Deposit({ account, setAccount, setTransactions }) {
    return(
        <section className="deposit-page">
            <h1>Deposit Money</h1>
            <p>Deposit money into your account.</p>
            <DepositForm
                account={account}
                setAccount={setAccount}
                setTransactions={setTransactions}
            />
        </section>
    );
}

export default Deposit;