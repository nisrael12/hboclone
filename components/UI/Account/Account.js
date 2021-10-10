import Link from 'next/Link'

const Account = (props) => {

    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 1; index <= digit; index++){
            thumbnails.push(comp);
        }
        
        return thumbnails;
    }

    return(
        <div className="account">
            <div className="account__details">

                <div className="account__title"></div>
                <div className="account__watch-list">
                    {loopComp((<div className="account__watch-list">
                        <div className="account__watch-video">
                            <img src="https://sm.ign.com/t/ign_me/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_qky2.1080.jpg"/>
                            <div className="account__watch-overlay">
                                <div className="account__watch-buttons">
                                    <div className="account__watch-circle">
                                        <i className="fas fa-play" />
                                    </div>
                                    <div className="account__watch-circle">
                                        <i className="fas fa-times" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>), 6)}
                        </div>
                <div className="account__watch-list">
                    <div className="account__watch-video">
                        <img src="https://sm.ign.com/t/ign_me/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_qky2.1080.jpg"/>
                        <div className="account__watch-overlay">
                            <div className="account__watch-buttons">
                                <div className="account__watch-circle">
                                    <i className="fas fa-play" />
                                </div>
                                <div className="account__watch-circle">
                                    <i className="fas fa-times" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="account__menu">
                <ul className="account__main">
                    <li><Link href="/" className="active">My List</Link></li>
                </ul>
                <div className="side-nav__divider"/>
                <ul className="account__main">
                    <li><Link href="/">Account</Link></li>
                    <li><Link href="/">Sign Out</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Account