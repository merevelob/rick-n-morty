import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetFav, showAll } from "../../redux/actions";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

export default function Nav(props) {
    const { onSearch, logout, clearAll } = props;
    
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const activeLink = ({ isActive }) => {
        return {
        backgroundColor: isActive ? 'ghostwhite' : ""
        }
    };

    function backToFav() {
        (pathname !== '/favourites') && dispatch(showAll());
    }

    function clearAllAll() {
        dispatch(resetFav());
        clearAll();
    }

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
                <NavLink to='/home' className={style.link} style={activeLink}>Home</NavLink>
                <NavLink to='/about' className={style.link} style={activeLink}>About</NavLink>
                <NavLink to='/favourites' className={style.link} style={activeLink} onClick={backToFav}>Favourites</NavLink>
            </div>
            <SearchBar onSearch={onSearch} />
            <div className={style.contClear}>
                <button className={style.botonClear} onClick={clearAllAll}>Clear all</button>
            </div>
            <div className={style.contLogout}>
                <button className={style.logoutButton} onClick={fullLogout}>Log out</button>
            </div>
        </nav>
    );
}