import BalanceCard from "../components/BalanceCard";


function Dashboard({ account }) {
    return(
        <section className="dashboard-page">
            <h1>Dashboard</h1>

            <div className="account-info-card">
                <h2>Account Information</h2>
                <p>
                    <strong>Account Holder: </strong>{account.holderName}
                </p>
                <p>
                    <strong>Account Number: </strong>{account.accountNumber}
                </p>
            </div>

            <BalanceCard
                balance={account.balance}
                totalDeposited={account.totalDeposited}
                totalWithdrawn={account.totalWithdrawn}
            />
        </section>
    );
}

export default Dashboard;