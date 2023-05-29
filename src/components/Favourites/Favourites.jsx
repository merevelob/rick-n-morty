import { connect } from "react-redux";
import { filterCards, orderCards, resetFav, showAll } from "../../redux/actions";
import { useState } from "react";
import Cards from "../Cards/Cards";
import style from "./Favourites.module.css";

function Favourites(props) {
    const { myFavourites, onClose, orderCards, filterCards, resetFav, showAll } = props;
    
    const [aux, setAux] = useState(false);
    
    const [selected, setSelected] = useState({
        selOrder: '',
        selGender: ''
    });
    
    function handleOrder(event) {
        orderCards(event.target.value);
        setSelected({
            selOrder: event.target.value,
            selGender: ''
        });
        setAux(!aux);
    }
    
    function handleFilter(event) {
        filterCards(event.target.value);
        setSelected({
            selOrder: '',
            selGender: event.target.value
        });
    }

    function clearAll() {
        resetFav();
        setSelected({
            selOrder: '',
            selGender: ''
        });
    }

    function allFav() {
        showAll();
        setSelected({
            selOrder: '',
            selGender: ''
        });
    }
    
    return (
        <div className={style.container}>
            <div className={style.filters}>
                <select onChange={handleOrder} value={selected.selOrder}>
                    <option value="" disabled selected hidden>Order</option>
                    <option value="A">Ascending</option>
                    <option value="D">Descending</option>
                </select>
                <select onChange={handleFilter} value={selected.selGender}>
                    <option value="" disabled selected hidden>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
                <button onClick={allFav}>Show all</button>
                <button onClick={clearAll}>Clear all</button>
            </div>
            <Cards characters={myFavourites} onClose={onClose} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        myFavourites: state.myFavourites
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        orderCards: (order) => dispatch(orderCards(order)),
        filterCards: (gender) => dispatch(filterCards(gender)),
        resetFav: () => dispatch(resetFav()),
        showAll: () => dispatch(showAll())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);