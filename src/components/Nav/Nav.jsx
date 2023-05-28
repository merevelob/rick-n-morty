import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetFav } from "../../redux/actions";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

export default function Nav(props) {
    const dispatch = useDispatch();
    
    const { onSearch, logout } = props;
    
    function fullLogout() {
        dispatch(resetFav());
        logout();
    }

    return (
        <nav className={style.navbar}>
            <div className={style.logo}>
                <img src={require("../../images/rym_logo.png")} alt="Rick and Morty logo" />
            </div>
            <div className={style.contBotones}>
                <Link to='/home' className={style.link}>Home</Link>
                <Link to='/about' className={style.link}>About</Link>
                <Link to='/favourites' className={style.link}>Favourites</Link>
                {/* <ul>
                    <li>
                    <Link to='/home' className={style.link}>Home</Link>
                    </li>
                    <li>
                    <Link to='/about' className={style.link}>About</Link>
                    </li>
                    <li>
                    <Link to='/favourites' className={style.link}>Favourites</Link>
                    </li>
                </ul> */}
            </div>
            {/* <div className={style.empty}></div> */}
            <SearchBar onSearch={onSearch} />
            <div className={style.contLogout}>
                <button className={style.logoutButton} onClick={fullLogout}>Log out</button>
            </div>
        </nav>
    );
}