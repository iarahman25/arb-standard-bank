import { NavLink } from 'react-router-dom';


function Navbar() {
    return(
        <nav className='navbar'>

            <h2 className="brand">
                <span className="brand-name">ARB Standard Bank</span>
                <span className="brand-subtitle">Bangladesh PLC</span>
            </h2>

            <div className='nav-links'>

                <NavLink to='/' end className='nav-link'>
                    Dashboard
                </NavLink>

                <NavLink to='/deposit' className='nav-link'>
                    Deposit
                </NavLink>

                <NavLink to='/withdraw' className='nav-link'>
                    Withdraw
                </NavLink>

                <NavLink to='/transactions' className='nav-link'>
                    Transactions
                </NavLink>

            </div>
        </nav>
    );
}

export default Navbar;