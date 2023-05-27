import { connect } from "react-redux";
import Cards from "../Cards/Cards";

function Favourites(props) {
    const {myFavourites, onClose} = props;
    return (
        <Cards characters={myFavourites} onClose={onClose} />
    );
}

const mapStateToProps = (state) => {
    return {
        myFavourites: state.myFavourites
    };
};

export default connect(mapStateToProps, null)(Favourites);