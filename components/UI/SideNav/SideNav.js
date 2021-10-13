import Link from 'next/link'
import { useStateContext } from '../../HBOProvider';

const SideNav = (props) => {
    const globalState = useStateContext();
    return(
        <div className={`side-nav ${globalState.sideNavOpen ? 'side-nav--active' : ''}`}>
            <div className="side-nav__close-btn" onClick={ () => globalState.setSideNavOpenAction(false)}>
                <i className="fas fa-times" />
            </div>
            <ul className="side-nav__main">
                <li>
                    <Link href='/' className="active">Home</Link>
                </li>
                <li>
                    <Link href='/'>Series</Link>
                </li>
                <li>
                    <Link href='/'>Movies</Link>
                </li>
                <li>
                    <Link href='/'>Originals</Link>
                </li>
                <li>
                    <Link href='/'>Just Added</Link>
                </li>
                <li>
                    <Link href='/'>Last Chance</Link>
                </li>
                <li>
                    <Link href='/'>Coming Soon</Link>
                </li>
                <li>
                    <Link href='/'>Trending Now</Link>
                </li>
            </ul>
            <div className="side-nav__divider" />
            <ul className="side-nav__main">
                <li>
                    <Link href='/' className="active">Home</Link>
                </li>
                <li>
                    <Link href='/'>Action</Link>
                </li>
                <li>
                    <Link href='/'>Comedy</Link>
                </li>
                <li>
                    <Link href='/'>Crime</Link>
                </li>
                <li>
                    <Link href='/'>Documentaries</Link>
                </li>
                <li>
                    <Link href='/'>Drama</Link>
                </li>
                <li>
                    <Link href='/'>Fantasy & Sci-fi</Link>
                </li>
                <li>
                    <Link href='/'>Horror</Link>
                </li>
                <li>
                    <Link href='/'>International</Link>
                </li>
                <li>
                    <Link href='/'>Kids & Family</Link>
                </li>
                <li>
                    <Link href='/'>Latino</Link>
                </li>
                <li>
                    <Link href='/'>Music</Link>
                </li>
                <li>
                    <Link href='/'>News/Talk</Link>
                </li>
                <li>
                    <Link href='/'>Reality</Link>
                </li>
                <li>
                    <Link href='/'>Romance</Link>
                </li>
                <li>
                    <Link href='/'>Shorts</Link>
                </li>
                <li>
                    <Link href='/'>Sports</Link>
                </li>
                <li>
                    <Link href='/'>Suspence</Link>
                </li>
            </ul>
            <div className="side-nav__divider" />
        </div>
    )
}

export default SideNav