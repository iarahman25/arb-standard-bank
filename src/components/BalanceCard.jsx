function BalanceCard({ balance, totalDeposited, totalWithdrawn }) {
    return(
        <div className="balance-grid">

            <div className="balance-card">
                <h2>Current Balance</h2>
                <p>৳{balance.toLocaleString()}</p>
            </div>

            <div className="balance-card">
                <h2>Total Deposited</h2>
                <p>৳{totalDeposited.toLocaleString()}</p>
            </div>

            <div className="balance-card">
                <h2>Total Withdrawn</h2>
                <p>৳{totalWithdrawn.toLocaleString()}</p>
            </div>

        </div>
    );
}

export default BalanceCard;