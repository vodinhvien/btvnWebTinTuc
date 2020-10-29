import './Style.css';
import logo from './img/logo.png';
console.log(logo);

function Header() {
    return (
        <div className="header_area">
            <div className="logo floatleft">
                <a href="#"><img src={logo} alt="" /></a>

            </div>
            <div className="top_menu floatleft">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Subscribe</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            <div className="social_plus_search floatright">
                <div className="social">
                    <ul>
                        <li>
                            <a href="#" className="twitter"></a>
                        </li>
                        <li>
                            <a href="#" className="facebook"></a>
                        </li>
                        <li>
                            <a href="#" className="feed"></a>
                        </li>
                    </ul>
                </div>
                <div className="search">
                    <form action="#" method="post" id="search_form">
                        <input type="text" placeholder="Search news" id="s" />
                        <input type="submit" id="searchform" placeholder="search" />
                        <input type="hidden" placeholder="post" name="post_type" />
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Header;
