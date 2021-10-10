import Account from "../Account/Account"
import SearchModal from "../SearchModal/SearchModal"
import Link from 'next/Link'

const Header = (props) => {
    return(<>
    <header className="top-header">
        <div className="top-header__left-side">
            <div className="top-header__menu-btn">
                <i className="fas fa-bars" />
            </div>
            <div className="top-header__search-btn">
                <i className="fas fa-search" />
            </div>
        </div>
        <div className="top-header__logo"></div>
        <div className="top-header__account">
            <img className="top-header__user-img" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=d5849d81af587a09dbcf3f11f6fa122f" />
            <div className="top-header__user-name">Cindy</div>
        </div>
        <Account />
        <SearchModal />
    </header>
    </>)
}

export default Header