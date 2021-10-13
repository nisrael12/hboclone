import Account from "../Account/Account";
import SearchModal from "../SearchModal/SearchModal";
import SideNav from "../SideNav/SideNav";
import Link from "next/link";
import { useStateContext } from "../../HBOProvider";

const Header = (props) => {
  const globalState = useStateContext();

  return (
    <>
      <header
        className={`top-header ${
            globalState.accountModalOpen || globalState.sideNavOpen
            ? 'top-header--menu-open'
            : ''
        }`}
      >
        <div className="top-header__left-side">
          <div
            className="top-header__menu-btn"
            onClick={() => globalState.setSideNavOpenAction(true)}
          >
            <i className="fas fa-bars" />
          </div>
          <div className="top-header__search-btn" onClick={() => globalState.setSearchOpenAction(true)}>
            <i className="fas fa-search" />
          </div>
        </div>
        <div className="top-header__logo"></div>
        <div
          className="top-header__account"
          onClick={() =>
            globalState.setAccountModalOpenAction(!globalState.accountModalOpen)
          }
        >
          <img
            className="top-header__user-img"
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=d5849d81af587a09dbcf3f11f6fa122f"
          />
          <div className="top-header__user-name">Cindy</div>
        </div>
        <Account />
        <SearchModal />
      </header>
    </>
  );
};

export default Header;
