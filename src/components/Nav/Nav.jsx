import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetFav, showAll } from "../../redux/actions";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

export default function Nav(props) {
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const { onSearch, logout } = props;
    
    function fullLogout() {
        dispatch(resetFav());
        logout();
    }

    function backToFav() {
        (pathname !== '/favourites') && dispatch(showAll());
    }

    return (
        <nav className={style.navbar}>
            <div className={style.logo}>
                <img src={require("../../images/rym_logo.png")} alt="Rick and Morty logo" />
            </div>
            <div className={style.contBotones}>
                <Link to='/home' className={style.link}>Home</Link>
                <Link to='/about' className={style.link}>About</Link>
                <Link to='/favourites' className={style.link} onClick={backToFav}>Favourites</Link>
            </div>
            <SearchBar onSearch={onSearch} />
            <div className={style.contLogout}>
                <button className={style.logoutButton} onClick={fullLogout}>Log out</button>
            </div>
        </nav>
    );
}