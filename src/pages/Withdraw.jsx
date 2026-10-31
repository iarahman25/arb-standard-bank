import WithdrawForm from "../components/WithdrawForm";

function Withdraw({ account, setAccount, setTransactions }) {
    return(
        <section className="withdraw-page">
            <h1>Withdraw Money</h1>

            <WithdrawForm
                account={account}
                setAccount={setAccount}
                setTransactions={setTransactions}
            />
        </section>
    );
}

export default Withdraw;