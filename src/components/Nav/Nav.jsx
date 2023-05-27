import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
    const {onSearch} = props;
    return (
        <nav className={style.navbar}>
            <div className={style.logo}>
                <img src={require("../../images/rym_logo.png")} alt="Rick and Morty logo" />
            </div>
            <div className={style.contBotones}>
                <ul>
                    <li>
                    <Link to='/home' className={style.link}>Home</Link>
                    </li>
                    <li>
                    <Link to='/about' className={style.link}>About</Link>
                    </li>
                    <li>
                    <Link to='/favourites' className={style.link}>Favourites</Link>
                    </li>
                </ul>
            </div>
            <div className={style.empty}></div>
            <SearchBar onSearch={onSearch} />
        </nav>
    );
}